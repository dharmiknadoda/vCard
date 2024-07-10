<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TwoFactor extends Model
{
    use HasFactory;

    protected $table = '2fa_otp';

    protected $fillable = [
        'otp',
        "email",
    ];
}
