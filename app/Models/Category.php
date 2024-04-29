<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
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

    //Accessor Image
    //ketika gambar dipanggil maka akan otomatis dengan path folder gambar
    protected function image(): Attribute
    {
        return Attribute::make(
            get: fn ($image) => url('/storage/categories/' . $image),
        );
    }
}
