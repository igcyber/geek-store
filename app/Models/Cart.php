<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cart extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'product_id',
        'product_image',
        'color',
        'color_image',
        'size',
        'price',
        'qty',
        'weight',
    ];

    //1 data cart dimiliki 1 produk
    public function product()
    {
        return $this->belongsTo(Product::class);
    }

    //Accessor Image
    //Memmanggil gambar beserta dengan full-path
    protected function productImage(): Attribute
    {
        return Attribute::make(
            get: fn ($image) => url('/storage/products/' . $image)
        );
    }

    //Accessor Image
    //Memmanggil gambar beserta dengan full-path
    protected function colorImage(): Attribute
    {
        return Attribute::make(
            get: fn ($image) => url('/storage/colors/' . $image)
        );
    }
}
