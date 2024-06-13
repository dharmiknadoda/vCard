@extends('layouts.app')
@section('title')
    {{__('messages.vcards_templates')}}
@endsection
@section('content')
    <div class="container-fluid">
        <div class="d-flex flex-column table-striped">
            @include('flash::message')
            <div class="d-flex justify-content-end">
                <a href="{{ route('create.card.category') }}" class="btn btn-primary">+ Add Card category</a>
            </div>
            <livewire:card-category-table/>
        </div>
    </div>
@endsection
