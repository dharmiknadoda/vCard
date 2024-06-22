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
        Schema::table('card_categories', function (Blueprint $table) {
            $table->string('sub_menu')->nullable()->after('template_id');
            $table->string('name_field')->nullable()->after('template_id');
            $table->string('default_image')->nullable()->after('template_id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('card_categories', function (Blueprint $table) {
            //
        });
    }
};
