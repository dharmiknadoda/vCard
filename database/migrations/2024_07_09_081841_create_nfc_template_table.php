<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('nfc_template', function (Blueprint $table) {
            $table->id();
            $table->string('ct_front');
            $table->string('ct_back');
            $table->string('cp_front');
            $table->string('cp_back');
            $table->unsignedBigInteger('category_id');
            $table->foreign('category_id')->references('id')->on('nfc_card_category')->onDelete('cascade')->onUpdate('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('nfc_template');
    }
};
