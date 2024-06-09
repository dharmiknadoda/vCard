@extends('layouts.app')
@section('title')
    {{__('messages.vcard.edit_vcard')}}
@endsection
@section('content')
    <div class="container-fluid">
        <div class="d-flex justify-content-between align-items-end mb-5">
            <h1>{{__('messages.vcard.add_card_category')}}</h1>
            <a class="btn btn-outline-primary float-end"
               href="{{ route('vcards.index') }}">{{ __('messages.common.back') }}</a>
        </div>
        <div class="col-12">
            @if(Session::has('success'))
                <p class="alert alert-success">{{ getSuccessMessage(Request::query('part')).Session::get('success') }}</p>
            @endif
            @if(Session::has('error'))
                <p class="alert alert-danger">{{ getSuccessMessage(Request::query('part')).Session::get('error') }}</p>
            @endif
            @include('layouts.errors')
            @include('flash::message')
        </div>
        <div class="card">
            <div class="card-body d-sm-flex position-relative px-2">
                <div class="col-lg-12">
                    <form method="post" action="{{ route('sadmin.vcards.add.category') }}">
                        @csrf
{{--                        @method('PUT')--}}
                        <div class="mb-5 ps-5 pt-5">
                            <label for="title" class="form-label required">Name:</label>
                            <span data-bs-toggle="tooltip" data-placement="top"
                                  data-bs-original-title="Maximum 34 character allowed">
                                <svg class="svg-inline--fa fa-circle-question ml-1 mt-1 general-question-mark"
                                     aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle-question"
                                     role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                                     data-fa-i2svg=""><path fill="currentColor"
                                                            d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 400c-18 0-32-14-32-32s13.1-32 32-32c17.1 0 32 14 32 32S273.1 400 256 400zM325.1 258L280 286V288c0 13-11 24-24 24S232 301 232 288V272c0-8 4-16 12-21l57-34C308 213 312 206 312 198C312 186 301.1 176 289.1 176h-51.1C225.1 176 216 186 216 198c0 13-11 24-24 24s-24-11-24-24C168 159 199 128 237.1 128h51.1C329 128 360 159 360 198C360 222 347 245 325.1 258z"></path></svg>
                                <!-- <i class="fas fa-question-circle ml-1 mt-1 general-question-mark"></i> Font Awesome fontawesome.com -->
                        </span>
                            <input class="form-control" placeholder="Category name" required="" maxlength="34"
                                   name="name" type="text">
                            <button class="btn btn-primary mt-5" type="submit">Submit</button>
                        </div>
                    </form>
                </div>
                <div class="ps-sm-3 pt-lg-auto pt-0 w-100 overflow-auto px-1" id="main">
                    <button type="button"
                            class="btn px-0 aside-menu-container__aside-menubar d-block d-xl-none d-lg-none d-block"
                            onclick="openNav()">
                        <i class="fa-solid fa-bars fs-1"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>

@endsection
