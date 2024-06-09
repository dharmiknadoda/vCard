@extends('layouts.app')
@section('title')
    {{__('messages.vcards_templates')}}
@endsection
@section('content')
    <div class="container-fluid">
        <div class="d-flex flex-column table-striped">
            @include('flash::message')
            <livewire:card-category-table/>
        </div>
    </div>
@endsection
