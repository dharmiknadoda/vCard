<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class NfcTemplate extends Model
{
    use HasFactory;

    protected $table = 'nfc_template';

    protected $fillable  = [
        "ct_front",
        "ct_back",
        "cp_front",
        "cp_back",
        "category_id"
    ];
}
