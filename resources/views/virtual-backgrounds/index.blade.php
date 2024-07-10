@extends('layouts.app')
@section('title')
{{ __('Virtual Backgrounds') }}
@endsection
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>

@section('content')
<div class="container-fluid">
    <div class="row justify-content-around">
        <p class="text-primary">{{__('messages.common.virtual_note') }}</p>

        {{-- @foreach ($data as $categoryId => $items)
        <h3 class="fw-bolder">{{ $categories[$categoryId] ?? 'Unknown Category' }}</h3>
        @foreach ($items as $item)
        <div class="flip-box-h col-lg-3 m-4">
            <div class="flip-box-inner">
                <div class="flip-box-front">
                    <a href="{{ route('virtual-backgrounds.create', $item->id) }}">
                        <img src="{{ asset('assets/images/' . $item->ct_front) }}" alt="" data-id="{{ $item->id }}"
                            class="downlod-ecards-{{ $item->id }} ecard-image">
                    </a>
                </div>
                <div class="flip-box-back">
                    <a href="{{ route('virtual-backgrounds.create', $item->id) }}">
                        <img src="{{ asset('assets/images/' . $item->ct_back) }}" alt="" data-id="{{ $item->id }}"
                            class="downlod-ecards-{{ $item->id }} ecard-image">
                    </a>
                </div>
            </div>
        </div>
        @endforeach
        @endforeach --}}
        <div>
        <ul class="nav nav-tabs p-3 border-0 ms-5">
            <a data-toggle="tab" class="active tab-nav btn btn-primary text-decoration-none" href="#all">All</a>
            @foreach ($categories as $categoryId => $categoryName)
                <a data-toggle="tab" class="ms-4 tab-nav btn btn-primary text-decoration-none" href="#category-{{ $categoryId }}">{{ $categoryName }}</a>
                {{-- @dd($categoryName); --}}
            @endforeach
        </ul>
        
        <div class="tab-content">
            <div id="all" class="tab-pane in active">
                <div class="row justify-content-around">
                    @foreach ($data as $categoryId => $items)
                        @foreach ($items as $item)
                            <div class="flip-box-h col-lg-3 m-4">
                                <div class="flip-box-inner">
                                    <div class="flip-box-front">
                                        <a href="{{ route('virtual-backgrounds.create', $item->id) }}">
                                            <img src="{{ asset('assets/images/' . $item->ct_front) }}" alt="" data-id="{{ $item->id }}"
                                                 class="downlod-ecards-{{ $item->id }} ecard-image">
                                        </a>
                                    </div>
                                    <div class="flip-box-back">
                                        <a href="{{ route('virtual-backgrounds.create', $item->id) }}">
                                            <img src="{{ asset('assets/images/' . $item->ct_back) }}" alt="" data-id="{{ $item->id }}"
                                                 class="downlod-ecards-{{ $item->id }} ecard-image">
                                        </a>
                                    </div>
                                </div>
                            </div>
                        @endforeach
                    @endforeach
                </div>
            </div>
        
            @foreach ($categories as $categoryId => $categoryName)
                <div id="category-{{ $categoryId }}" class="tab-pane">
                    <div class="row justify-content-around">
                        @if (isset($data[$categoryId]))
                            @foreach ($data[$categoryId] as $item)
                                <div class="flip-box-h col-lg-3 m-4">
                                    <div class="flip-box-inner">
                                        <div class="flip-box-front">
                                            <a href="{{ route('virtual-backgrounds.create', $item->id) }}">
                                                <img src="{{ asset('assets/images/' . $item->ct_front) }}" alt="" data-id="{{ $item->id }}"
                                                     class="downlod-ecards-{{ $item->id }} ecard-image">
                                            </a>
                                        </div>
                                        <div class="flip-box-back">
                                            <a href="{{ route('virtual-backgrounds.create', $item->id) }}">
                                                <img src="{{ asset('assets/images/' . $item->ct_back) }}" alt="" data-id="{{ $item->id }}"
                                                     class="downlod-ecards-{{ $item->id }} ecard-image">
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            @endforeach
                        @endif
                    </div>
                </div>
            @endforeach
        </div>
    </div>
        
        
    </div>
</div>
@endsection