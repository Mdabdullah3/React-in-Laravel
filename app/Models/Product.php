<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Product extends Model
{
    use HasFactory;
    protected $fillable = ['user_id', 'name', 'description', 'sprice', 'pprice', 'meal_type', 'mealId'];

    public function users(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
    public function pictures(): HasMany
    {
        return $this->hasMany(Picture::class);
    }
}
