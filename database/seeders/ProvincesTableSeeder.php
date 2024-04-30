<?php

namespace Database\Seeders;

use App\Models\Province;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Http;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class ProvincesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //Fetch RestAPI
        $response = Http::withHeaders([
            //API rajaongkir
            'key' => config('rajaongkir.api_key'),
        ])->get('https://api.rajaongkir.com/starter/province');


        //Loop Data From RestAPI
        foreach ($response['rajaongkir']['results'] as $province) {

            //Insert to table provinces
            Province::create([
                'id' => $province['province_id'],
                'name' => $province['province']
            ]);
        }
    }
}
