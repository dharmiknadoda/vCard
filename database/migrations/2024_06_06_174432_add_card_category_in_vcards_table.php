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
        Schema::table('vcards', function (Blueprint $table) {
            $table->unsignedBigInteger('card_category')->after('url_alias')->nullable();
            $table->foreign('card_category')
                ->references('id')
                ->on('card_categories')
                ->onDelete('cascade')
                ->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('vcards', function (Blueprint $table) {
            $table->dropForeign(['card_category']); // Drop the foreign key constraint
            $table->dropColumn('card_category'); // Remove the card_category column
        });
    }
};
