<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Color extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'image'
    ];

    //Accessor Image
    //ketika gambar dipanggil maka akan otomatis dengan path folder gambar
    protected function image(): Attribute
    {
        return Attribute::make(
            set: fn ($image) => url('/storage/colors/' . $image)
        );
    }
}
