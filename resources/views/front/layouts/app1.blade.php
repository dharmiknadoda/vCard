<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8" />
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="{{ getFaviconUrl() }}" type="image/png">
    @if (!empty($metas))
        @if ($metas['meta_description'])
            <meta name="description" content="{{ $metas['meta_description'] }}">
        @endif
        @if ($metas['meta_keyword'])
            <meta name="keywords" content="{{ $metas['meta_keyword'] }}">
        @endif
        @if ($metas['home_title'] && $metas['site_title'])
            <title>{{ $metas['home_title'] }} | {{ $metas['site_title'] }}</title>
        @else
            <title>@yield('title') | {{ getAppName() }}</title>
        @endif
    @else
        <title>@yield('title') | {{ getAppName() }}</title>
        <meta name="description" content="">
        <meta name="keywords" content="">
    @endif

    @if (!empty(getAppLogo()))
        <meta property="og:image" content="{{ getAppLogo() }}" />
    @endif
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
        integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="icon" type="image/png" href="/images/vcard-logo.png" />

    <style>
        .product-card {
            position: relative;
            width: 300px;
            height: 400px;
            overflow: hidden;
            border: 1px solid #ccc;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s;
        }

        .product-card img {
            width: 100%;
            height: auto;
            display: block;
        }

        .overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.55);
            color: white;
            display: flex;
            justify-content: center;
            align-items: center;
            opacity: 0;
            transition: opacity 0.3s;
        }

        .product-card:hover .overlay {
            opacity: 1;
            animation: fadeIn 0.3s ease-in-out forwards;
        }

        @keyframes fadeIn {
            0% {
                opacity: 0;
                transform: scale(0.95);
            }
            100% {
                opacity: 1;
                transform: scale(1);
            }
        }

        .overlay-content {
            text-align: center;
            opacity: 0;
            transition: opacity 0.3s, transform 0.3s;
        }

        .product-card:hover .overlay-content {
            opacity: 1;
            animation: slideUp 0.5s ease-in-out forwards 0.3s;
        }

        @keyframes slideUp {
            0% {
                opacity: 0;
                transform: translateY(20px);
            }
            100% {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .overlay-content h2, .overlay-content p {
            margin: 0;
        }

        .overlay-content button {
            margin-top: 15px;
            padding: 10px 20px;
            border: none;
            color: white;
            cursor: pointer;
            border-radius: 5px;
            transition: background-color 0.3s, transform 0.3s;
            opacity: 0;
        }

        .product-card:hover .overlay-content button {
            opacity: 1;
            animation: buttonPop 0.3s ease-in-out forwards 0.6s;
        }

        @keyframes buttonPop {
            0% {
                transform: scale(0.95);
            }
            100% {
                transform: scale(1);
            }
        }

        .overlay-content button:hover {
            transform: scale(1.05);
        }
        @font-face {
            font-family: 'Seasons';
            src: url('path/to/Seasons-Regular.woff2') format('woff2'),
            url('path/to/Seasons-Regular.woff') format('woff');
        }

        body {
            font-family: 'Seasons', serif !important;
        }

        .sub-div img {
            max-height: 100px;
            max-width: 100px;
        }
    </style>
    {{-- bootstrap --}}
    <link rel="stylesheet" href="{{ asset('assets/css/new_home/bootstrap.min.css') }}">
    {{-- css links --}}
    <link rel="stylesheet" href="{{ asset('assets/css/slider/css/slick.css') }}">
    <link rel="stylesheet" href="{{ asset('assets/css/slider/css/slick-theme.min.css') }}">
    <link rel="stylesheet" href="{{ asset('assets/css/new_home/slick.css') }}">
    <link rel="stylesheet" href="{{ asset('assets/css/new_home/slick-theme.css') }}">
    <link rel="stylesheet" href="{{ asset('assets/css/new_home/layout.css') }}">
    <link rel="stylesheet" href="{{ asset('assets/css/new_home/custom.css') }}">
    <link rel="stylesheet" href="{{ asset('assets/css/new_home/index.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('assets/css/third-party.css') }}">
    <script src="{{ asset('messages.js') }}"></script>
    <script src="{{ mix('assets/js/front-third-party.js') }}"></script>
    <script type="text/javascript" src="{{ asset('assets/js/third-party.js') }}" defer></script>
    <script type="text/javascript" src="{{ asset('front/js/bootstrap.bundle.min.js') }}" defer></script>
    <script type="text/javascript" src="{{ asset('assets/js/slider/js/slick.min.js') }}"></script>
    <script src="{{ mix('assets/js/custom/helpers.js') }}" defer></script>
    <script src="{{ mix('assets/js/custom/custom.js') }}" defer></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>

    @php
        $langSession = Session::get('languageName');
        $frontLanguage = !isset($langSession) ? getSuperAdminSettingValue('default_language') : $langSession;
    @endphp

    <script>
        let frontLanguage = "{{ $frontLanguage }}"
        Lang.setLocale(frontLanguage)
    </script>
    <script src="{{ mix('assets/js/front-pages.js') }}" defer></script>

   {!! getSuperAdminSettingValue('extra_js_front') !!}

    @if (!empty($metas['google_analytics']))
        <!--google analytics code-->
        <script>{!! $metas['google_analytics'] !!}</script>
    @endif

    @routes

    <script>
        $(document).ready(function() {
            $('html, body').animate({
                scrollTop: $('html').offset().top,
            });
        });
    </script>
</head>

<body>

    @include('front.layouts.header1')
    @yield('content')
    @include('front.layouts.footer1')


    <script>
        $("#toogler-icon").click(function() {
            $(this).toggleClass("open");
        });
        $('.nav-btn').on('click', function(e) {
            e.preventDefault();
            if ($(this).hasClass('open')) {
                $('.new-home-nav').removeClass('d-none')
            } else {
                $('.new-home-nav').addClass('d-none')
            }
        })
    </script>

    <script>
        $(".pricing-slider").slick({
            dots: true,
            slidesToShow: 3,
            centerMode: true,
            slidesToScroll: 1,
            arrows: false,
            responsive: [{
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 1.7,
                        centerMode: true,
                    },
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1.65,
                        centerMode: true,
                    },
                },
                {
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 1,
                        centerMode: true,
                    },
                },
            ],
        });
    </script>
    <script>

      $('.center-slider').slick({
        autoplay: true,
        autoplaySpeed: 1000,
        slidesToShow: 5,
        slidesToScroll: 1,
        centerMode: true,
        arrows: true,
        dots: false,
        speed: 300,
        centerPadding: '20px',
        infinite: true,
        autoplaySpeed: 5000,
        prevArrow: '<button class="slide-arrow prev-arrow" aria-label="prev-btn"><i class="fa-solid fa-arrow-left"></i></button>',
            nextArrow: '<button class="slide-arrow next-arrow" aria-label="next-btn"><i class="fa-solid fa-arrow-right"></i></button>',
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3,
                    },
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                    },
                },

            ],
        // autoplay: true
      });
    </script>
    <script>
        $(".feature-slider").slick({
            autoplay: true,
            autoplaySpeed: 1000,
            speed: 600,
            draggable: true,
            infinite: true,
            dots: false,
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: true,
            prevArrow: '<button class="slide-arrow prev-arrow" aria-label="prev-btn"><i class="fa-solid fa-chevron-left"></i></button>',
            nextArrow: '<button class="slide-arrow next-arrow" aria-label="next-btn"><i class="fa-solid fa-chevron-right"></i></button>',
            responsive: [{
                    breakpoint: 1199,
                    settings: {
                        slidesToShow: 3,
                    },
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                    },
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                    },
                },

            ],

        });
    </script>
    <script>
        $(".testimonial-slider").slick({
            autoplay: true,
            autoplaySpeed: 1000,
            speed: 600,
            draggable: true,
            infinite: true,
            dots: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            prevArrow: '<button class="slide-arrow prev-arrow" aria-label="prev-btn"><i class="fa-solid fa-chevron-left"></i></button>',
            nextArrow: '<button class="slide-arrow next-arrow" aria-label="prev-btn"><i class="fa-solid fa-chevron-right"></i></button>',
        });
    </script>
</body>

</html>
