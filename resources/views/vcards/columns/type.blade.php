<?php
$getCardTypeName = \App\Models\CardCategory::where('id', $row->card_category)->pluck('name')->first();
?>
<span class="badge bg-primary me-2">
    {{ $getCardTypeName ?? 'No Category' }}
</span>
