{{--@extends('layouts.app')--}}
{{--@section('title')--}}
{{--    {{__('messages.vcard.edit_vcard')}}--}}
{{--@endsection--}}
{{--@section('content')--}}
{{--    <div class="container-fluid">--}}
{{--        <div class="d-flex justify-content-between align-items-end mb-5">--}}
{{--            <h1>{{__('messages.vcard.edit_vcard')}}</h1>--}}
{{--            <a class="btn btn-outline-primary float-end"--}}
{{--               href="{{ route('vcards.index') }}">{{ __('messages.common.back') }}</a>--}}
{{--        </div>--}}
{{--        <div class="col-12">--}}
{{--            @if(Session::has('success'))--}}
{{--                <p class="alert alert-success">{{ getSuccessMessage(Request::query('part')).Session::get('success') }}</p>--}}
{{--            @endif--}}
{{--            @if(Session::has('error'))--}}
{{--                <p class="alert alert-danger">{{ getSuccessMessage(Request::query('part')).Session::get('error') }}</p>--}}
{{--            @endif--}}
{{--            @include('layouts.errors')--}}
{{--            @include('flash::message')--}}
{{--        </div>--}}
{{--        <div class="card">--}}
{{--        <div class="card-body d-sm-flex position-relative px-2">--}}
{{--        <div class="">--}}
{{--            <div class="">--}}
{{--        @include('vcards.sub_menu')--}}
{{--            </div>--}}
{{--         </div>--}}
{{--         <div class="ps-sm-3 pt-lg-auto pt-0 w-100 overflow-auto px-1" id="main">--}}
{{--            <button type="button" class="btn px-0 aside-menu-container__aside-menubar d-block d-xl-none d-lg-none d-block" onclick="openNav()">--}}
{{--                <i class="fa-solid fa-bars fs-1"></i>--}}
{{--            </button>--}}
{{--        @if($partName !== 'services'&& $partName !=='products'&& $partName !=='testimonials' && $partName !=='galleries' && $partName !=='blogs' && $partName !=='instagram-embed' && $partName !=='banners' && $partName != 'iframes')--}}
{{--                    @endif--}}
{{--                    {{ Form::hidden('is_true', Request::query('part') == 'business_hours',['id' => 'vcardCreateEditIsTrue']) }}--}}
{{--                    @if($partName != 'services' && $partName != 'blogs' && $partName != 'testimonials' && $partName != 'products' && $partName != 'galleries' && $partName !='instagram-embed'  && $partName != 'banners' && $partName != 'iframes')--}}
{{--                    {!! Form::open(['route' => ['vcards.update', $vcard->id], 'id' => 'editForm', 'method' => 'put', 'files' => 'true']) !!}--}}
{{--                    @include('vcards.fields')--}}
{{--                    {{ Form::close() }}--}}
{{--                @else--}}
{{--                    @if($partName === 'blogs')--}}
{{--                        @include('vcards.blogs.index')--}}
{{--                    @elseif($partName === 'services')--}}
{{--                        @include('vcards.services.index')--}}
{{--                    @elseif($partName === 'products')--}}
{{--                        @include('vcards.products.index')--}}
{{--                    @elseif($partName === 'banners')--}}
{{--                        @include('vcards.banner.index')--}}
{{--                    @elseif($partName === 'galleries')--}}
{{--                        @include('vcards.gallery.index')--}}
{{--                    @elseif($partName === 'instagram-embed')--}}
{{--                        @include('vcards.instagram-embed.index')--}}
{{--                    @elseif($partName === 'iframes')--}}
{{--                        @include('vcards.iframes.index')--}}
{{--                    @else--}}
{{--                        @include('vcards.testimonials.index')--}}

{{--                    @endif--}}
{{--                @endif--}}
{{--                @if($partName !== 'services'&& $partName !=='products'&& $partName !=='testimonials' && $partName !=='galleries' && $partName !=='blogs'  && $partName !=='iframes')--}}
{{--            </div>--}}
{{--        </div>--}}
{{--    </div>--}}
{{--        @endif--}}
{{--    </div>--}}

{{--@endsection--}}
{{--<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>--}}
{{--@section('script')--}}

{{--@endsection--}}
@extends('layouts.app')

@section('title')
    {{ __('messages.vcard.edit_vcard') }}
@endsection

@section('content')
    <div class="container-fluid">
        <div class="d-flex justify-content-between align-items-end mb-5">
            <h1>{{ __('messages.vcard.edit_vcard') }}</h1>
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
                <div class="">
                    <div class="">
                        @include('vcards.sub_menu')
                    </div>
                </div>
                <div class="ps-sm-3 pt-lg-auto pt-0 w-100 overflow-auto px-1" id="main">
                    <button type="button"
                            class="btn px-0 aside-menu-container__aside-menubar d-block d-xl-none d-lg-none d-block"
                            onclick="openNav()">
                        <i class="fa-solid fa-bars fs-1"></i>
                    </button>
                    @if($partName !== 'services' && $partName !== 'products' && $partName !== 'testimonials' && $partName !== 'galleries' && $partName !== 'blogs' && $partName !== 'instagram-embed' && $partName !== 'banners' && $partName != 'iframes')
                    @endif
                    {{ Form::hidden('is_true', Request::query('part') == 'business_hours',['id' => 'vcardCreateEditIsTrue']) }}
                    @if($partName != 'services' && $partName != 'blogs' && $partName != 'testimonials' && $partName != 'products' && $partName != 'galleries' && $partName != 'instagram-embed' && $partName != 'banners' && $partName != 'iframes')
                        {!! Form::open(['route' => ['vcards.update', $vcard->id], 'id' => 'editForm', 'method' => 'put', 'files' => 'true']) !!}
                        @include('vcards.fields')
                        {{ Form::close() }}
                    @else
                        @if($partName === 'blogs')
                            @include('vcards.blogs.index')
                        @elseif($partName === 'services')
                            @include('vcards.services.index')
                        @elseif($partName === 'products')
                            @include('vcards.products.index')
                        @elseif($partName === 'banners')
                            @include('vcards.banner.index')
                        @elseif($partName === 'galleries')
                            @include('vcards.gallery.index')
                        @elseif($partName === 'instagram-embed')
                            @include('vcards.instagram-embed.index')
                        @elseif($partName === 'iframes')
                            @include('vcards.iframes.index')
                        @else
                            @include('vcards.testimonials.index')
                        @endif
                    @endif
                    @if($partName !== 'services' && $partName !== 'products' && $partName !== 'testimonials' && $partName !== 'galleries' && $partName !== 'blogs' && $partName !== 'iframes')
                </div>
            </div>
        </div>
        @endif
    </div>
    <!-- Modal -->
    <div class="modal fade" id="unsavedChangesModal" tabindex="-1" role="dialog"
         aria-labelledby="unsavedChangesModalTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="unsavedChangesModalTitle">Unsaved Changes</h5>
                    <button type="button" class="close abourtAction" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    You have unsaved changes. Are you sure you want to leave?
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary abourtAction" data-bdismiss="modal">Cancel</button>
                    <button type="button" class="btn btn-primary" id="confirmLeaveButton">Leave</button>
                </div>
            </div>
        </div>
    </div>
    <script>
        $(document).ready(function () {
            let formChanged = false;
            const originalFormData = $('#editForm').serialize();
            let linkToNavigate = null;

            // Function to check if form data has changed
            function hasFormChanged() {
                const currentFormData = $('#editForm').serialize();
                return originalFormData !== currentFormData;
            }

            // Detect changes in the form fields
            $('#editForm').on('change input', 'input, textarea, select', function () {
                formChanged = hasFormChanged();
            });

            // Function to display custom modal
            function displayCustomMessage(message, callback) {
                $('#unsavedChangesModal .modal-body').text(message);
                $('#unsavedChangesModal').modal('show');

                $('#confirmLeaveButton').off('click').on('click', function () {
                    $('#unsavedChangesModal').modal('hide');
                    formChanged = false; // Reset form change state
                    callback();
                });
            }

            // Warn before leaving the page if there are unsaved changes
            $(window).on('beforeunload', function () {
                if (hasFormChanged()) {
                    displayCustomMessage("You have unsaved changes. Are you sure you want to leave?", function () {
                        window.onbeforeunload = null; // Allow navigation
                        window.location.href = linkToNavigate;
                    });
                    return "You have unsaved changes. Are you sure you want to leave?";
                }
            });

            // Warn when clicking on a link or navigation
            $('a').on('click', function (e) {
                if (hasFormChanged()) {
                    e.preventDefault();
                    linkToNavigate = $(this).attr('href');
                    displayCustomMessage("You have unsaved changes. Are you sure you want to leave?", function () {
                        window.location.href = linkToNavigate;
                    });
                }
            });
        });
        $(".abourtAction").click(function (){
            $("#unsavedChangesModal").modal('hide')
        })
    </script>
@endsection
