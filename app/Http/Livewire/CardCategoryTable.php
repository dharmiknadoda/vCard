<?php

namespace App\Http\Livewire;

use App\Models\CardCategory;
use App\Models\Vcard;
use Illuminate\Database\Eloquent\Builder;
use App\Http\Livewire\LivewireTableComponent;
use Rappasoft\LaravelLivewireTables\Views\Column;

class CardCategoryTable extends LivewireTableComponent
{
    protected $model = Vcard::class;

    protected $listeners = ['refresh' => '$refresh', 'resetPageTable', 'deleteVcard','cardFilter','resetPageTable'];

    protected $category;

    public function configure(): void
    {
        $this->setPrimaryKey('id');
        $this->setPageName('card-category-table');
        $this->setDefaultSort('created_at', 'desc');
        $this->setColumnSelectStatus(false);
        $this->setQueryStringStatus(false);
        $this->setPerPage(10);

        $this->setThAttributes(function(Column $column) {
            if ($column->isField('updated_at')) {
              return [
                'class' => 'justify-content-center',
              ];
            }
            return [];
        });
    }

    public function cardFilter($category)
    {
        $this->category = $category;
        $this->setBuilder($this->builder());
    }

    public function columns(): array
    {
        return [
            Column::make(__('messages.vcard.vcard_name'), 'name')
                ->sortable()->searchable()
                ->view('vcards.add-card.columns.name'),
            Column::make(__('messages.vcard.created_at'), 'created_at')->sortable()->view('vcards.columns.created_at'),
            Column::make(__('messages.common.action'), 'updated_at')
                ->view('vcards.add-card.columns.action'),
        ];
    }

    public function statusFilter($status)
    {
        $this->status = $status;
        $this->setBuilder($this->builder());
    }

    public function builder(): Builder
    {

        return CardCategory::select('card_categories.*');
    }

    public function resetPageTable($pageName = 'card-category-table')
    {
        $rowsPropertyData = $this->getRows()->toArray();
        $prevPageNum = $rowsPropertyData['current_page'] - 1;
        $prevPageNum = $prevPageNum > 0 ? $prevPageNum : 1;
        $pageNum = count($rowsPropertyData['data']) > 0 ? $rowsPropertyData['current_page'] : $prevPageNum;

        $this->setPage($pageNum, $pageName);
    }

    public array $bulkActions = [
        'bulkDelete' => 'Delete',
    ];
    public function bulkDelete()
    {
        if (count($this->getSelected()) > 0) {
            $vcardIds = $this->getSelected();
            $this->dispatchBrowserEvent('bulk-delete-vcard', $vcardIds);
        } else {
            $this->dispatchBrowserEvent('bulk-delete-error');
        }
    }
    public function deleteVcard($vcardIds)
    {
            Vcard::whereIn('id', $vcardIds)->delete();
            $this->setBuilder($this->builder());
            $this->dispatchBrowserEvent('delete-vcard-success');
            $this->clearSelected();
    }


    public function updatedSelected():void
    {
        $this->selectAll = count($this->selected) === Vcard::with(['tenant.user', 'template'])->where('tenant_id', getLogInTenantId())->select('vcards.*')->count();
    }

}
