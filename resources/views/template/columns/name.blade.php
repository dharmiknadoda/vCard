<?php
    $category_name = App\Models\NfcCardCategory::where('id',$row->category_id)->pluck('name')->toArray();
    // dd($category_name[0]);
?>

<a class="badge bg-primary text-decoration-none fs-6">
    {{$category_name[0]}}
</a>
