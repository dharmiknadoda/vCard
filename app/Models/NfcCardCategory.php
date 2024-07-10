<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class NfcCardCategory extends Model
{
    use HasFactory;

    protected $table = 'nfc_card_category';

    protected $fillable  = [
        "name",
        // "card_frount_side","card_back_side"
    ];
}
