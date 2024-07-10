<?php

namespace App\Http\Livewire;

use App\Models\Vcard;
use Illuminate\Database\Eloquent\Builder;
use Stancl\Tenancy\Database\Models\Tenant;
use App\Http\Livewire\LivewireTableComponent;
use Rappasoft\LaravelLivewireTables\Views\Column;



class VcardTable extends LivewireTableComponent
{
    protected $model = Vcard::class;

    protected $verified;
    protected $status;
    protected $category;

    public bool $showButtonOnHeader = true;

    protected $listeners = ['verifiedFilter', 'statusFilter','categoryFilter'];


    public string $buttonComponent = 'sadmin.vcards.columns.add-button';

    public function configure(): void
    {
        $this->setPrimaryKey('id');
        $this->setPageName('Vcard-table');
        $this->setDefaultSort('created_at', 'desc');
        $this->setColumnSelectStatus(false);
        $this->setPerPage(10);
    }
    public function columns(): array
    {
        return [
            Column::make(__('messages.vcard.vcard_name'), 'name')->sortable()->searchable()
                ->view('sadmin.vcards.columns.name'),
            Column::make(__('messages.vcard.user_name'), 'tenant.tenant_username')->sortable(function (
                Builder $query,
                $direction
            ) {
                return $query->orderBy(
                    Tenant::select('tenant_username')->whereColumn('tenants.id', 'vcards.tenant_id'),
                    $direction
                );
            })
                ->searchable(),
            Column::make(__('messages.vcard.preview_url'), 'url_alias')
                ->hideIf('url_alias')
                ->searchable(),
            Column::make(__('card_type'), 'card_category')
                ->sortable()->searchable()
                ->view('vcards.columns.type'),
            Column::make(__('messages.vcard.preview_url'), 'url_alias')->sortable()->view('sadmin.vcards.columns.preview'),
            Column::make(__('messages.vcard.verified'), 'is_verified')->view('sadmin.vcards.columns.verified'),
            Column::make(__('messages.vcard.stats'), 'id')
                ->view('sadmin.vcards.columns.stats'),
            Column::make(__('messages.vcard.created_at'), 'created_at')->sortable()
                ->view('sadmin.vcards.columns.created_at'),
            Column::make(__('messages.vcard.status'), 'status')->sortable()
                ->view('sadmin.vcards.columns.status'),

        ];
    }

    public function verifiedFilter($verified)
    {
        $this->verified = $verified;
        $this->setBuilder($this->builder());
    }

    public function categoryFilter($category)
    {
        $this->verified = $category;
        $this->setBuilder($this->builder());
    }

    public function statusFilter($status)
    {
        $this->status = $status;
        $this->setBuilder($this->builder());
    }

    public function builder(): Builder
    {
        $verified = $this->verified;
        $status = $this->status;
        $category = $this->category;
        $query =  Vcard::query();

        $query->when($verified != "", function ($q) use ($verified) {
            if ($verified == Vcard::VERIFIED) {
                $q->where('is_verified', Vcard::VERIFIED);
            }
            if ($verified == Vcard::NOTVERIFIED) {
                $q->where('is_verified', Vcard::NOTVERIFIED);
            }
        });

        $query->when($status != "", function ($q) use ($status) {
            if ($status == Vcard::ACTIVE) {
                $q->where('status', Vcard::ACTIVE);
            }
            if ($status == Vcard::INACTIVE) {
                $q->where('status', Vcard::INACTIVE);
            }
        });

        $query->when($category != "", function ($q) use ($category) {
           $q->where('card_category',$category);
        });

        return $query->select('vcards.*');
    }
}
