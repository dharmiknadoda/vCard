@extends('layouts.app')
@section('title')
    {{__('messages.nfc_card_category')}}
@endsection
@section('content')
    <div class="container-fluid">
        <div class="d-flex flex-column table-striped">
            @include('flash::message')
            <div class="d-flex justify-content-end m-4 me-0">
                <a href="{{ route('sadmin.nfc.category.create') }}" class="btn btn-primary">+ Add Card category</a>
            </div>
            <livewire:nfc-category-table/>
        </div>
    </div>
@endsection
