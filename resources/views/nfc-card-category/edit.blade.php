@extends('layouts.app')
@section('title')
    {{__('messages.vcard.edit_vcard')}}
@endsection
@section('content')
    <?php $templates = \App\Models\Template::all(); ?>
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
                    <form method="post" action="{{ route('sadmin.nfc.category.update') }}"
                          enctype="multipart/form-data">
                        @csrf
                        {{--                        @method('PUT')--}}
                        <div class="mb-5 ps-5 pt-5">
                            <label for="title" class="form-label required">Name:</label>
                            <span data-bs-toggle="tooltip" data-placement="top"
                                  data-bs-original-title="Maximum 34 character allowed">
                                <i class="fas fa-question-circle ml-1 mt-1 general-question-mark"></i>
                            </span>

                            
                            <input type="hidden" name="id" value="{{ $data->id }}">
                            <input class="form-control" placeholder="Category name" required="" maxlength="30"
                            name="name" type="text" value="{{ $data->name }}">
                            
                            <div class="input-group mt-3 mb-3">
                                <input type="file" name="card_frount_side" class="form-control" id="inputGroupFile01">
                                <label class="input-group-text" for="inputGroupFile01">Card Frount Side</label>
                            </div>
                            
                            <div class="input-group mb-3">
                                <input type="file" name="card_back_side" class="form-control" id="inputGroupFile01">
                                <label class="input-group-text" for="inputGroupFile01">Card Back Side</label>
                            </div>
                            <button class="btn btn-primary mt-4" type="submit">Submit</button>
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
