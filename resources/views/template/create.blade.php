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
                    <form method="post" action="{{ route('template.store') }}"
                          enctype="multipart/form-data">
                        @csrf
                        <div class="mb-5 ps-5 pt-5">
                            <label for="title" class="form-label required">Select Crad Category:</label>

                            <span data-bs-toggle="tooltip" data-placement="top"
                                  data-bs-original-title="Maximum 34 character allowed">
                                <i class="fas fa-question-circle ml-1 mt-1 general-question-mark"></i>
                            </span>
                            {{-- <input class="form-control" placeholder="Category name" required="" maxlength="30"
                            name="name" type="text"> --}}
                            <select name="category_id" id="" data-control="select2" class="form-control form-select">
                        
                                @foreach ($data as $item)
                                    <option value="{{$item->id}}">{{$item->name}}</option>
                                    @endforeach
                                </select>

                            <label for="title" class="mt-4 form-label required">Card Template Front :</label>
                            <div class="input-group mb-3">
                                <input type="file" name="ct_front" class="form-control" id="inputGroupFile01">
                            </div>
                            
                            <label for="title" class="mt-4 form-label required">Card Template Back :</label>
                            <div class="input-group mb-3">
                                <input type="file" name="ct_back" class="form-control" id="inputGroupFile01">
                            </div>

                            {{-- preview  --}}

                            <label for="title" class="mt-4 form-label required">Card Preview Front :</label>
                            <div class="input-group mb-3">
                                <input type="file" name="cp_front" class="form-control" id="inputGroupFile01">
                            </div>
                            
                            <label for="title" class="mt-4 form-label required">Card Preview Back :</label>
                            <div class="input-group mb-3">
                                <input type="file" name="cp_back" class="form-control" id="inputGroupFile01">
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
