@extends('layouts.app')
@section('title')
    {{__('messages.nfc.add_templates')}}
@endsection
@section('content')
    <div class="container-fluid">
        <div class="d-flex flex-column table-striped">
            @include('flash::message')
            <div class="d-flex justify-content-end m-4 me-0">
                <a href="{{ route('template.create') }}" class="btn btn-primary">+ Add Template</a>
            </div>
            <livewire:nfc-template-table/>
        </div>
    </div>
@endsection