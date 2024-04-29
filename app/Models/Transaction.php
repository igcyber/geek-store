<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use League\CommonMark\Reference\Reference;

use function PHPSTORM_META\map;

class Transaction extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'province_id',
        'city_id',
        'invoice',
        'courier_name',
        'courier_service',
        'courier_cost',
        'weight',
        'address',
        'grand_total',
        'reference',
        'status'
    ];

    //1 data transaksi bisa memiliki > 1 data di transaksi detail
    public function transactionDetails()
    {
        return $this->hasMany(TransactionDetail::class);
    }

    //1 data transaksi dimiliki 1 user
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    //1 data transaksi dimiliki 1 provinsi
    public function province()
    {
        return $this->belongsTo(Province::class);
    }

    //1 data transaksi dimiliki 1 kota
    public function city()
    {
        return $this->belongsTo(City::class);
    }

    protected function createdAt(): Attribute
    {
        return Attribute::make(
            get: fn ($value) => \Carbon\Carbon::parse($value)->translatedFormat('l, d F Y')
        );
    }
}
