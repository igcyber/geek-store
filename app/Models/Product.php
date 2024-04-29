<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'category_id',
        'title',
        'slug',
        'description',
        'weight',
    ];


    //agar bisa memanggil data category dari produck (one to many)
    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    //1 data product bisa memiliki banyak sizes(one to many)
    public function productSizes()
    {
        return $this->hasMany(ProductSize::class);
    }

    //1 data product bisa memiliki banyak gambar(one to many)
    public function productImages()
    {
        return $this->hasMany(ProductImage::class);
    }
}
