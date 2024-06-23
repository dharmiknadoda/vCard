<?php
$subMenu = ($cardCategories['sub_menu'] != null) ? json_decode($cardCategories['sub_menu']) : [];
?>
<a href="javascript:void(0)" class="closebtn d-lg-none d-block pt-3" onclick="closeNav()">×</a>
<ul class="nav nav-tabs-1 mb-sm-7 mb-5 pb-1 flex-nowrap text-nowrap flex-sm-column d-sm-flex d-block">
    <div class="d-sm-flex flex-sm-column overflow-auto">
        @if(in_array(\App\Models\CardCategory::BASICS,$subMenu))
            <li class="nav-item nav-item-1 position-relative">
                <a class="nav-link-1 nav-link p-3  {{(isset($partName) && $partName == 'basics') ? 'active' : ''}}"
                   href="{{route('vcards.edit',$vcard->id).'?part=basics'}}">
                    <i class="fa-solid fa-circle-question p-1"></i> {{ __('messages.vcard.basic_details') }}
                </a>
            </li>
        @endif
        @if(in_array(\App\Models\CardCategory::TEMPLATES,$subMenu))
            <li class="nav-item nav-item-1 position-relative">
                <a class="nav-link-1 nav-link p-3 {{(isset($partName) && $partName == 'templates') ? 'active' : ''}}"
                   href="{{route('vcards.edit',$vcard->id).'?part=templates'}}">
                    <i class="fa-solid fa-note-sticky p-1"></i> {{ __('messages.vcards_templates') }}
                </a>
            </li>
        @endif
        @if(in_array(\App\Models\CardCategory::DYNAMIC_VCARD,$subMenu))
            @if(checkFeature('dynamic_vcard'))
                <li class="nav-item nav-item-1 position-relative">
                    <a class="nav-link-1 nav-link p-3 {{(isset($partName) && $partName == 'dynamic_vcard') ? 'active' : ''}}"
                       href="{{route('vcards.edit',$vcard->id).'?part=dynamic_vcard'}}" data-turbo="false">
                        <i class="fa-solid fa-swatchbook p-1"></i>{{ __('messages.vcard.dynamic_vcard') }}
                    </a>
                </li>
            @endif
        @endif
        @if(in_array(\App\Models\CardCategory::BUSINESS_HOURS,$subMenu))
            <li class="nav-item nav-item-1 position-relative">
                <a class="nav-link-1 nav-link p-3 {{(isset($partName) && $partName == 'business-hours') ? 'active' : ''}}"
                   href="{{route('vcards.edit',$vcard->id).'?part=business-hours'}}">
                    <i class="fa-solid fa-clock p-1"></i> {{ __('messages.business.business_hours') }}
                </a>
            </li>
        @endif
        @if(in_array(\App\Models\CardCategory::QRCODE_CUSTOMIZE,$subMenu))
            @if(checkFeature('qrcode-customize'))
                <li class="nav-item nav-item-1 position-relative">
                    <a class="nav-link-1 nav-link p-3 {{(isset($partName) && $partName == 'qrcode-customize') ? 'active' : ''}}"
                       href="{{route('vcards.edit',$vcard->id).'?part=qrcode-customize'}}">
                        <i class="fa-solid fa-qrcode p-1"></i> {{ __('messages.vcard.qrcode_customize') }}
                    </a>
                </li>
            @endif
        @endif
        @if(checkFeature('services') && in_array(\App\Models\CardCategory::SERVICES,$subMenu))
            <li class="nav-item nav-item-1 position-relative" {{--onclick="alert()"--}}>
                <a class="nav-link-1 nav-link p-3 {{(isset($partName) && $partName == 'services') ? 'active' : ''}}"
                   href="{{route('vcards.edit',$vcard->id).'?part=services'}}">
                    <i class="fa-solid fa-wrench p-1"></i> {{ __('messages.vcard.services') }}
                </a>
            </li>
        @endif
        {{-- @if(checkFeature('services')) --}}
        @if(in_array(\App\Models\CardCategory::BANNER,$subMenu))
            <li class="nav-item nav-item-1 position-relative">
                <a class="nav-link-1 nav-link p-3 {{(isset($partName) && $partName == 'banners') ? 'active' : ''}}"
                   href="{{route('vcards.edit',$vcard->id).'?part=banners'}}">
                    <i class="fa-regular fa-hard-drive p-1"></i> {{ __('messages.front_cms.banner_title') }}
                </a>
            </li>
        @endif
        {{-- @endif --}}
        @if(in_array(\App\Models\CardCategory::PRODUCTS,$subMenu))
            @if(checkFeature('products'))
                <li class="nav-item nav-item-1 position-relative">
                    <a class="nav-link-1 nav-link p-3 {{(isset($partName) && $partName == 'products') ? 'active' : ''}}"
                       href="{{route('vcards.edit',$vcard->id).'?part=products'}}">
                        <i class="fa-brands fa-product-hunt p-1"></i> {{ __('messages.vcard.products') }}
                    </a>
                </li>
            @endif
        @endif
        @if(in_array(\App\Models\CardCategory::INSTAGRAM_EMBED,$subMenu))
            @if(checkFeature('insta_embed'))
                <li class="nav-item nav-item-1 position-relative">
                    <a class="nav-link-1 nav-link p-3  {{(isset($partName) && $partName == 'instagram-embed') ? 'active' : ''}}"
                       href="{{route('vcards.edit',$vcard->id).'?part=instagram-embed'}}" style="font-size: 15px">
                        <i class="fa-solid fa-clipboard-list p-1"></i> {{ __('messages.vcard.instagramembed') }}
                    </a>
                </li>
            @endif
        @endif
        @if(checkFeature('testimonials') && in_array(\App\Models\CardCategory::TESTIMONIALS,$subMenu))
            <li class="nav-item nav-item-1 position-relative">
                <a class="nav-link-1 nav-link p-3 {{(isset($partName) && $partName == 'testimonials') ? 'active' : ''}}"
                   href="{{route('vcards.edit',$vcard->id).'?part=testimonials'}}">
                    <i class="fa-solid fa-comment p-1"></i> {{ __('messages.vcard.testimonials') }}
                </a>
            </li>
        @endif
        @if(in_array(\App\Models\CardCategory::IFRAMES,$subMenu))
            @if(checkFeature('iframes'))
                <li class="nav-item nav-item-1 position-relative">
                    <a class="nav-link-1 nav-link p-3 {{(isset($partName) && $partName == 'iframes') ? 'active' : ''}}"
                       href="{{route('vcards.edit',$vcard->id).'?part=iframes'}}">
                        <i class="fa-solid fa-crop-simple p-1"></i> {{ __('messages.vcard.iframe') }}
                    </a>
                </li>
            @endif
        @endif
        @if(in_array(\App\Models\CardCategory::APPOINTMENTS,$subMenu))
            @if(checkFeature('appointments'))
                <li class="nav-item nav-item-1 position-relative">
                    <a class="nav-link-1 nav-link p-3 {{(isset($partName) && $partName == 'appointments') ? 'active' : ''}}"
                       href="{{route('vcards.edit',$vcard->id).'?part=appointments'}}">
                        <i class="fa-solid fa-calendar-check p-1"></i> {{ __('messages.vcard.appointments') }}
                    </a>
                </li>
            @endif
        @endif
        @if(checkFeature('social_links') && in_array(\App\Models\CardCategory::SOCIAL_LINKS,$subMenu))
            <li class="nav-item nav-item-1 position-relative">
                <a class="nav-link-1 nav-link p-3 {{(isset($partName) && $partName == 'social-links') ? 'active' : ''}}"
                   href="{{route('vcards.edit',$vcard->id).'?part=social-links'}}">
                    <i class="fa-solid fa-globe p-1"></i> {{ __('messages.social.social_links') }}
                </a>
            </li>
        @endif
        @if(in_array(\App\Models\CardCategory::ADVANCED,$subMenu))
            @if(checkFeature('advanced'))
                <li class="nav-item nav-item-1 position-relative">
                    <a class="nav-link-1 nav-link p-3  {{(isset($partName) && $partName == 'advanced') ? 'active' : ''}}"
                       href="{{route('vcards.edit',$vcard->id).'?part=advanced'}}" style="font-size: 15px">
                        <i class="fa-solid fa-gears p-1"></i> {{ __('messages.vcard.advanced') }}
                    </a>
                </li>
            @endif
        @endif
        @if(checkFeature('custom-fonts') && in_array(\App\Models\CardCategory::FONTS,$subMenu))
            <li class="nav-item nav-item-1 position-relative">
                <a class="nav-link-1 nav-link p-3  {{(isset($partName) && $partName == 'custom-fonts') ? 'active' : ''}}"
                   href="{{route('vcards.edit',$vcard->id).'?part=custom-fonts'}}" style="font-size: 15px">
                    <i class="fa-solid fa-font p-1"></i> {{ __('messages.font.fonts') }}
                </a>
            </li>
        @endif
        @if(in_array(\App\Models\CardCategory::GALLERIES,$subMenu))
            @if(checkFeature('gallery'))
                <li class="nav-item nav-item-1 position-relative">
                    <a class="nav-link-1 nav-link p-3  {{(isset($partName) && $partName == 'galleries') ? 'active' : ''}}"
                       href="{{route('vcards.edit',$vcard->id).'?part=galleries'}}" style="font-size: 15px">
                        <i class="fa-solid fa-images p-1"></i> {{ __('messages.gallery.gallery_name') }}
                    </a>
                </li>
            @endif
        @endif
        @if(in_array(\App\Models\CardCategory::SEO,$subMenu))
            @if(checkFeature('seo'))
                <li class="nav-item nav-item-1 position-relative">
                    <a class="nav-link-1 nav-link p-3  {{(isset($partName) && $partName == 'seo') ? 'active' : ''}}"
                       href="{{route('vcards.edit',$vcard->id).'?part=seo'}}" style="font-size: 15px">
                        <i class="fa-solid fa-magnifying-glass p-1"></i> {{ __('messages.plan.seo') }}
                    </a>
                </li>
            @endif
        @endif
        @if(in_array(\App\Models\CardCategory::BLOGS,$subMenu))
            @if(checkFeature('blog'))
                <li class="nav-item nav-item-1 position-relative">
                    <a class="nav-link-1 nav-link p-3  {{(isset($partName) && $partName == 'blogs') ? 'active' : ''}}"
                       href="{{route('vcards.edit',$vcard->id).'?part=blogs'}}" style="font-size: 15px">
                        <i class="fa-solid fa-blog p-1"></i> {{ __('messages.plan.blog') }}
                    </a>
                </li>
            @endif
        @endif
        @if(in_array(\App\Models\CardCategory::PRIVACY_POLICY,$subMenu))
            <li class="nav-item nav-item-1 position-relative">
                <a class="nav-link-1 nav-link p-3  {{(isset($partName) && $partName == 'privacy-policy') ? 'active' : ''}}"
                   href="{{route('vcards.edit',$vcard->id).'?part=privacy-policy'}}" style="font-size: 15px">
                    <i class="fa-solid fa-lock p-1"></i> {{ __('messages.vcard.privacy_policy') }}
                </a>
            </li>
        @endif
        {{--        @if(in_array(\App\Models\CardCategory::,$subMenu))--}}
        @if(in_array(\App\Models\CardCategory::TERM_CONDITION,$subMenu))
            <li class="nav-item nav-item-1 position-relative">
                <a class="nav-link-1 nav-link p-3  {{(isset($partName) && $partName == 'term-condition') ? 'active' : ''}}"
                   href="{{route('vcards.edit',$vcard->id).'?part=term-condition'}}" style="font-size: 15px">
                    <i class="fa-solid fa-clipboard-list p-1"></i> {!! __('messages.vcard.term-condition') !!}
                </a>
            </li>
        @endif
        {{--        @endif--}}
        @if(in_array(\App\Models\CardCategory::MANAGE_SECTION,$subMenu))

            <li class="nav-item nav-item-1 position-relative mb-3">
                <a class="nav-link-1 nav-link p-3  {{(isset($partName) && $partName == 'manage-section') ? 'active' : ''}}"
                   href="{{route('vcards.edit',$vcard->id).'?part=manage-section'}}">
                    <i class="fa-solid fa-list-check p-1"></i> {!! __('messages.vcard.manage-section') !!}
                </a>
            </li>
        @endif
    </div>
    @if(planfeaturecount() >= 7)


    @elseif(planfeaturecount() >=6)
        <li class="nav-item nav-item-1 position-relative mb-3">
            <div class="dropdown d-flex align-items-center">
                <a class="btn ps-2 pt-0 pe-0" id="dropdownMenuButton1" data-bs-toggle="dropdown"
                   aria-expanded="false">
                    <i class="fas fa-ellipsis-v fs-3"></i>
                </a>
                <div class="dropdown-menu pb-4 my-2" aria-labelledby="dropdownMenuButton1">
                    <ul>
                        @if(in_array(\App\Models\CardCategory::ADVANCED,$subMenu))
                            <li>
                                @if(checkFeature('advanced'))
                                    <a class="dropdown-item text-gray-900 {{(isset($partName) && $partName == 'advanced') ? 'active' : ''}}"
                                       href="{{route('vcards.edit',$vcard->id).'?part=advanced'}}"
                                       style="font-size: 15px">
                                        {{ __('messages.vcard.advanced') }}
                                    </a>
                                @endif
                            </li>
                        @endif
                        @if(in_array(\App\Models\CardCategory::CUSTOM_FONTS,$subMenu))
                            <li>
                                @if(checkFeature('custom-fonts'))
                                    <a class="dropdown-item text-gray-900 {{(isset($partName) && $partName == 'custom-fonts') ? 'active' : ''}}"
                                       href="{{route('vcards.edit',$vcard->id).'?part=custom-fonts'}}"
                                       style="font-size: 15px">
                                        {{ __('messages.font.fonts') }}
                                    </a>
                                @endif
                            </li>
                        @endif
                        @if(in_array(\App\Models\CardCategory::GALLERIES,$subMenu))
                            <li>
                                @if(checkFeature('gallery'))
                                    <a class="dropdown-item text-gray-900 {{(isset($partName) && $partName == 'galleries') ? 'active' : ''}}"
                                       href="{{route('vcards.edit',$vcard->id).'?part=galleries'}}"
                                       style="font-size: 15px">
                                        {{ __('messages.gallery.gallery_name') }}
                                    </a>
                                @endif
                            </li>
                        @endif
                        @if(in_array(\App\Models\CardCategory::SEO,$subMenu))
                            <li>
                                @if(checkFeature('seo'))
                                    <a class="dropdown-item text-gray-900  {{(isset($partName) && $partName == 'seo') ? 'active' : ''}}"
                                       href="{{route('vcards.edit',$vcard->id).'?part=seo'}}" style="font-size: 15px">
                                        {{ __('messages.plan.seo') }}
                                    </a>
                                @endif
                            </li>
                        @endif
                        @if(in_array(\App\Models\CardCategory::BLOGS,$subMenu))
                            <li>
                                @if(checkFeature('blog'))
                                    <a class="dropdown-item text-gray-900  {{(isset($partName) && $partName == 'blogs') ? 'active' : ''}}"
                                       href="{{route('vcards.edit',$vcard->id).'?part=blogs'}}" style="font-size: 15px">
                                        {{ __('messages.plan.blog') }}
                                    </a>
                                @endif
                            </li>
                        @endif
                        @if(in_array(\App\Models\CardCategory::PRIVACY_POLICY,$subMenu))
                            <li>
                                <a class="dropdown-item text-gray-900  {{(isset($partName) && $partName == 'privacy-policy') ? 'active' : ''}}"
                                   href="{{route('vcards.edit',$vcard->id).'?part=privacy-policy'}}"
                                   style="font-size: 15px">
                                    {{ __('messages.vcard.privacy_policy') }}
                                </a>
                            </li>
                        @endif
                        @if(in_array(\App\Models\CardCategory::TERM_CONDITION,$subMenu))
                            <li>
                                <a class="dropdown-item text-gray-900  {{(isset($partName) && $partName == 'term-condition') ? 'active' : ''}}"
                                   href="{{route('vcards.edit',$vcard->id).'?part=term-condition'}}"
                                   style="font-size: 15px">
                                    {!! __('messages.vcard.term_condition') !!}
                                </a>
                            </li>
                        @endif
                        @if(in_array(\App\Models\CardCategory::MANAGE_SECTION,$subMenu))
                            <li>
                                <a class="dropdown-item text-gray-900 {{(isset($partName) && $partName == 'manage-section') ? 'active' : ''}}"
                                   href="{{route('vcards.edit',$vcard->id).'?part=manage-section'}}"
                                   style="font-size: 15px">
                                    {!! __('messages.vcard.manage-section') !!}
                                </a>
                            </li>
                        @endif
                    </ul>
                </div>
            </div>
        </li>
    @endif
</ul>
