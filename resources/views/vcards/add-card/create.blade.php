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
                    <form method="post" action="{{ route('sadmin.vcards.add.category') }}" enctype="multipart/form-data">
                        @csrf
                        {{--                        @method('PUT')--}}
                        <div class="mb-5 ps-5 pt-5">
                            <label for="title" class="form-label required">Name:</label>
                            <span data-bs-toggle="tooltip" data-placement="top"
                                  data-bs-original-title="Maximum 34 character allowed">
                                <i class="fas fa-question-circle ml-1 mt-1 general-question-mark"></i>
                        </span>
                            <input class="form-control" placeholder="Category name" required="" maxlength="30"
                                   name="name" type="text">


                            <label for="title" class="form-label mt-3 required">Title:</label>
                            <span data-bs-toggle="tooltip" data-placement="top"
                                  data-bs-original-title="Maximum 34 character allowed">
                                <i class="fas fa-question-circle ml-1 mt-1 general-question-mark"></i>
                        </span>
                            <input class="form-control" placeholder="Enter title name" required="" maxlength="20"
                                   name="title" type="text">

                            <label for="title" class="form-label mt-3 required">Default image:</label>
                            <span data-bs-toggle="tooltip" data-placement="top"
                                  data-bs-original-title="jpg,png,jpeg">
                                <i class="fas fa-question-circle ml-1 mt-1 general-question-mark"></i>
                        </span>
                            <input class="form-control" required=""
                                   name="default_image" type="file">

                            <div class="col-lg-12 mb-3 mt-4">
                                <label class="form-label required">Select Sub Menu:</label>
                                <div class="d-flex row">
                                    <div class="d-flex col-3 mt-3">
                                        <input type="checkbox" name="sub_menu[]" class="form-check-input"
                                               value="{{ \App\Models\CardCategory::BUSINESS_HOURS }}">
                                        <label class="ms-2">Business Hours</label>
                                    </div>
                                    <div class="d-flex col-3 mt-3">
                                        <input type="checkbox" name="sub_menu[]" class="form-check-input"
                                               value="{{ \App\Models\CardCategory::SERVICES }}"
                                        >
                                        <label class="ms-2">Services</label>
                                    </div>
                                    <div class="d-flex col-3 mt-3">
                                        <input type="checkbox" name="sub_menu[]" class="form-check-input"
                                               value="{{ \App\Models\CardCategory::BANNER }}"
                                        >
                                        <label class="ms-2">Banner</label>
                                    </div>
                                    <div class="d-flex col-3 mt-3">
                                        <input type="checkbox" name="sub_menu[]" class="form-check-input"
                                               value="{{ \App\Models\CardCategory::TESTIMONIALS }}"
                                        >
                                        <label class="ms-2">Testimonials</label>
                                    </div>
                                    <div class="d-flex col-3 mt-3">
                                        <input type="checkbox" name="sub_menu[]" class="form-check-input"
                                               value="{{ \App\Models\CardCategory::SOCIAL_LINKS }}"
                                        >
                                        <label class="ms-2">Social links - Website</label>
                                    </div>
                                    <div class="d-flex col-3 mt-3">
                                        <input type="checkbox" name="sub_menu[]" class="form-check-input"
                                               value="{{ \App\Models\CardCategory::FONTS }}"
                                        >
                                        <label class="ms-2">Fonts</label>
                                    </div>
                                    <div class="d-flex col-3 mt-3">
                                        <input type="checkbox" name="sub_menu[]" class="form-check-input"
                                               value="{{ \App\Models\CardCategory::PRIVACY_POLICY }}"
                                        >
                                        <label class="ms-2"> Privacy Policy</label>
                                    </div>
                                    <div class="d-flex col-3 mt-3">
                                        <input type="checkbox" name="sub_menu[]" class="form-check-input"
                                               value="{{ \App\Models\CardCategory::MANAGE_SECTION }}">
                                        <label class="ms-2">Manage Section</label>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-12 mb-3 mt-4">
                                <label class="form-label required">{{ __('messages.vcard.select_template') }}:</label>
                            </div>
                            <div class="form-group mb-7 vcard-template">
                                <div class="row">
                                    <input type="hidden" name="card_template_id" class="card-template-id">
                                    @foreach ($templates as $id => $template)
                                        <div class="col-xl-3 col-lg-4 col-md-4 col-sm-6 mb-3 templatecard"
                                             data-id='{{ $template->id }}'>
                                            <div class="img-radio-multiple img-thumbnail"
                                                 data-id="{{ $template->id }}" data-key='{{ $id }}'>
                                                <img src="{{ asset($template->path)}}" alt="Template">
                                                @if ($id == 22)
                                                    <div class="ribbon-wrapper">
                                                        <div
                                                            class="ribbon fw-bold">{{ __('messages.feature.dynamic_vcard') }}</div>
                                                    </div>
                                                @endif
                                            </div>
                                        </div>
                                    @endforeach
                                </div>
                            </div>
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
    <script>
        var templateIds = [];
        $(".img-radio-multiple").click(function () {
            var id = $(this).attr('data-id');
            var key = $(this).attr('data-key');
            if ($(this).hasClass("img-border")) {
                $(this).removeClass("img-border");
                var index = templateIds.indexOf(id);
                if (index !== -1) {
                    templateIds.splice(index, 1);
                }
            } else {
                $(this).addClass("img-border");
                $("#templateId").val(id);
                templateIds.push(id);
            }
            var templateId = JSON.stringify(templateIds);
            if (templateId) {
                $(".card-template-id").val(templateId)
            }
        });
    </script>
@endsection
