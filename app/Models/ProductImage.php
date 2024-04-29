<?php

namespace App\Models;

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
}
