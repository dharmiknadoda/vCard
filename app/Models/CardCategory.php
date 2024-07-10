<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CardCategory extends Model
{
    use HasFactory;

    const BUSINESS_HOURS = 1;
    const SERVICES = 2;
    const BANNER = 3;
    const TESTIMONIALS = 4;
    const SOCIAL_LINKS = 5;
    const FONTS = 6;
    const PRIVACY_POLICY = 7;
    const MANAGE_SECTION = 8;
    const TEMPLATES = 9;
    const BASICS = 10;
    const DYNAMIC_VCARD = 11;
    const QRCODE_CUSTOMIZE = 12;
    const PRODUCTS = 13;
    const INSTAGRAM_EMBED = 14;
    const IFRAMES = 15;
    const APPOINTMENTS = 16;
    const ADVANCED = 17;
    const GALLERIES = 18;
    const SEO = 19;
    const BLOGS = 20;
    const TERM_CONDITION = 21;
    const CUSTOM_FONTS = 22;

    protected $fillable = [
        'name',
        'template_id',
        'default_image',
        'name_field',
        'sub_menu',
    ];
}
