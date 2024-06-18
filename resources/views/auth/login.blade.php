@extends('layouts.auth')
@section('title')
    {{ __('messages.common.login') }}
@endsection
<?php $TwoFaAuth = \App\Models\Setting::where('key', '2fa_auth')->pluck('value')->toArray(); ?>
<style>
    @keyframes shake {
        0% {
            margin-left: 0rem;
        }
        25% {
            margin-left: 0.5rem;
        }
        75% {
            margin-left: -0.5rem;
        }
        100% {
            margin-left: 0rem;
        }
    }

    @keyframes swipe-left {
        0% {
            transform: translateX(0);
        }
        100% {
            transform: translateX(-100%);
        }
    }

    @keyframes slide-in {
        0% {
            transform: translateX(100%);
        }
        100% {
            transform: translateX(0);
        }
    }

    .swipe-left {
        animation: swipe-left 0.7s forwards;
    }

    .slide-in {
        animation: slide-in 0.7s forwards;
    }

</style>
@section('content')
    <div class="login-section bg-white overflow-hidden position-relative h-100">
        <div class="top-vector">
            <img src="{{ asset('assets/images/top-vector.png') }}">
        </div>
        <div class="bottom-vector">
            <img src="{{ asset('assets/images/bottom-vector.png') }}">
        </div>
        <div class="row">
            <div class="col-md-6 col-12 p-0">
                <div class="login-img">
                    <img src="{{ asset($registerImage) }}" alt="Register Image" class="w-100 h-100">
                </div>
            </div>
            <div class="col-md-6 col-12 p-0 d-flex flex-column justify-content-center ">
                <div class="login-form">
                    <div class="px-sm-10 px-6 mb-5 h-100 w-100 ">
                        <div class="text-center">
                            <div class="me-3 mb-0 mt-10">
                                <a href="{{ route('home') }}" class="image">
                                    <img alt="Logo" src="{{ getLogoUrl() }}" class="img-fluid logo-fix-size" style="max-height: 166px !important;
            max-width: 166px !important;
            width: 100% !important;
            object-fit: cover !important;">
                                </a>
                            </div>
                            <span class="text-gray-900 fs-1 fw-bold">{{ getAppName() }}</span>
                        </div>
                        <div class="row element">
                            <div class="col-md-12 width-540 mt-5">
                                @include('flash::message')
                                @include('layouts.errors')
                                <?php if(session()->has('login_error')): ?>
                                <div class="alert alert-danger">
                                    <div>
                                        <div class="d-flex">
                                            <i class="fa-solid fa-face-frown me-5"></i>
                                            <span
                                                class="mt-1">Email already exists. Please login using your password</span>
                                        </div>
                                    </div>
                                </div>
                                <?php session()->forget('login_error'); ?>
                                <?php endif; ?>
                            </div>
                            <h1 class="text-center mb-7 mt-5 fs-2 fw-bold">{{ __('auth.sign_in') }}</h1>
                            <form method="POST" class="overflow-hidden" action="{{ route('login') }}">
                                @csrf
                                <div class="email-pass-div">
                                    <div class="mb-sm-7 mb-4 element">
                                        <label for="email" class="form-label">
                                            {{ __('messages.user.email') . ':' }}<span class="required"></span>
                                        </label>
                                        <input name="email" type="email" class="form-control" id="email"
                                               aria-describedby="emailHelp" required
                                               placeholder=" {{ __('messages.user.email') }}">
                                    </div>
                                    <div class="mb-sm-7 mb-4 element">
                                        <div class="d-flex justify-content-between">
                                            <label for="password"
                                                   class="form-label">{{ __('messages.user.password') . ':' }}<span
                                                    class="required"></span></label>
                                            @if (Route::has('password.request'))
                                                <a href="{{ route('password.request') }}"
                                                   class="link-info fs-6 text-decoration-none">
                                                    {{ __('messages.common.forgot_your_password') . '?' }}
                                                </a>
                                            @endif
                                        </div>
                                        <div class="mb-3 position-relative ">
                                            <input name="password" type="password" class="form-control" id="password"
                                                   required
                                                   placeholder="{{ __('messages.user.password') }}"
                                                   aria-label="Password"
                                                   data-toggle="password">
                                            <span
                                                class="position-absolute d-flex align-items-center top-0 bottom-0 end-0 me-4 input-icon input-password-hide cursor-pointer text-gray-600">
                                            <i class="bi bi-eye-slash-fill"></i>
                                        </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="d-none verify-otp-div">
                                    <div class="mb-sm-7 mb-5 element">
                                        <label for="email" class="form-label">
                                            OTP<span class="required"></span>
                                        </label>
                                        <input name="otp_verify" type="text" class="form-control" id="Otp"  {{ ($TwoFaAuth[0] == 1) ? 'required' : '' }}
                                               placeholder="Enter otp">
                                    </div>
                                </div>

                                <div class="mb-sm-7 mb-4 form-check element ms-5">
                                    <input type="checkbox" class="form-check-input" id="remember_me">
                                    <label class="form-check-label"
                                           for="remember_me">{{ __('messages.common.remember_me') }}</label>
                                </div>
                                @if($TwoFaAuth[0] == 1)
                                    <div class="d-grid element">
                                        <button type="button"
                                                class="btn btn-send-otp login-btn">{{ __('messages.common.login') }}</button>
                                    </div>
                                @endif
                                <div class="d-grid element">
                                    <button type="submit"
                                            class="btn {{ ($TwoFaAuth[0] == 1) ? 'd-none' : '' }} login-btn final-login-btn">{{ __('messages.common.login') }}</button>
                                </div>
                                <div class="d-grid mt-4">
                                    @if (config('app.google_client_id') && config('app.google_client_secret') && config('app.google_redirect'))
                                        <a href="{{ route('google.auth') }}"
                                           class="btn btn-danger d-flex align-items-center justify-content-center mb-sm-5 mb-4">
                                            <i
                                                class="fa-brands fa-google fs-2 me-3"></i>{{ __('messages.placeholder.login_via_google') }}
                                        </a>
                                    @endif
                                    @if (config('app.facebook_app_id') && config('app.facebook_app_secret') && config('app.facebook_redirect'))
                                        <a href="{{ route('social.login', 'facebook') }}"
                                           class="btn btn-info d-flex align-items-center justify-content-center">
                                            <i
                                                class="fa-brands fa-facebook-f fs-2 me-3"></i>{{ __('messages.placeholder.login_via_facebook') }}
                                        </a>
                                    @endif
                                </div>
                                @if (getSuperAdminSettingValue('register_enable'))
                                    <div class="d-flex align-items-center mb-10 mt-4 element">
                                        <span
                                            class="text-gray-700 me-2">{{ __('messages.common.new_here') . '?' }}</span>
                                        <a href="{{ route('register') }}" class="link-info fs-6 text-decoration-none">
                                            {{ __('messages.common.create_an_account') }}
                                        </a>
                                    </div>
                                @endif
                            </form>
                        </div>
                    </div>
                </div>
                <footer>
                    <div class="container-fluid padding-0 mb-5 copy-right">
                        <div class="row align-items-center justify-content-center">
                            <div class="col-xl-6 w-100">
                                <div class="copyright text-center text-muted">
                                    {{ __('messages.placeholder.all_rights_reserve') }} &copy; {{ date('Y') }} <a
                                        href="{{ route('home') }}" class="font-weight-bold ml-1"
                                        target="_blank">{{ getAppName() }}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    </div>
    <script src="{{ asset('assets/js/vcard11/jquery.min.js') }}"></script>
    <script>
        @if($TwoFaAuth[0] == 1)
        $(".btn-send-otp").click(function () {
            // Check validation
            var email = $("#email");
            var password = $("#password");
            var valid = true;

            if (isEmpty(email.val())) {
                email.css('animation', 'shake 0.2s ease-in-out 0s 2');
                email.addClass('border-danger');
                valid = false;
            } else {
                email.removeClass('border-danger');
            }

            if (isEmpty(password.val())) {
                password.css('animation', 'shake 0.2s ease-in-out 0s 2');
                password.addClass('border-danger');
                valid = false;
            } else {
                password.removeClass('border-danger');
            }

            if (valid) {
                $(this).html('<i class="fa-solid fa-circle-notch fa-spin fa-spin-reverse"></i>')
                $(this).attr('disabled', 'disabled');
                $.ajax({
                    url: '{{ route('send.otp') }}',
                    method: 'POST',
                    data: {
                        email: email.val()
                    },
                    success: function () {
                        var emailPassDiv = $('.email-pass-div');
                        var verifyOtpDiv = $('.verify-otp-div');
                        emailPassDiv.addClass('swipe-left');
                        emailPassDiv.on('animationend', function () {
                            emailPassDiv.addClass('d-none');
                            verifyOtpDiv.removeClass('d-none');
                            verifyOtpDiv.addClass('slide-in');
                        });
                        $(".btn-send-otp").addClass('d-none');
                        $(".final-login-btn").removeClass('d-none');
                    }
                })
            }
        });

        // Utility function to check if a value is empty
        function isEmpty(value) {
            return value.trim() === '';
        }
        @endif
    </script>
@endsection
