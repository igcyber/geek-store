<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'slug',
        'image'
    ];

    //1 data category memiliki banyak produk (One To Many)
    public function products()
    {
        return $this->hasMany(Product::class);
    }
}
