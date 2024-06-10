@extends('layouts.app')
@section('title')
    {{__('messages.vcards')}}
@endsection
<style>
    @media screen and (max-width: 500px) {
        tr, td, th {
            display: block !important;
            padding: 5px;
            width: 480px;
        }
    }
</style>
@section('content')
    <div class="container-fluid">
        <div class="d-flex flex-column table-striped">
            @include('flash::message')
            <livewire:user-vcard-table/>
        </div>
    </div>
    @include('layouts.templates.actions')
    @include('vcards.templates.templates')
    @include('vcards.templates.analytics')
@endsection
