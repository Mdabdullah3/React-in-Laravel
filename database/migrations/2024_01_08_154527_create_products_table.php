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
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->nullable()->constrained('users')->onDelete('restrict');
            $table->string('name');
            $table->text('description');
            $table->decimal('sprice', 8, 2);
            $table->decimal('pprice', 8, 0);
            $table->enum('meal_type', ['breakfast', 'lunch', 'dinner']);
            $table->string('mealId');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
