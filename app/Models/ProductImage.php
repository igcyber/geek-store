<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductImage extends Model
{
    use HasFactory;

    protected $fillable = [
        'product_id',
        'color_id',
        'image'
    ];

    //1 data gambar dimiliki 1 color
    public function color()
    {
        return $this->belongsTo(Color::class);
    }

    //Accessor Image
    //ketika gambar dipanggil maka akan otomatis dengan path folder gambar
    protected function image(): Attribute
    {
        return Attribute::make(
            get: fn ($image) => url('/storage/products/' . $image)
        );
    }
}
