<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
// database/seeders/HistorialTemperaturaSeeder.php
use App\Models\HistorialTemperatura;
use Carbon\Carbon;


class HistorialTemperaturaSeeder extends Seeder
{
    public function run()
    {
        $start_date = Carbon::create(2023, 1, 1);
        $end_date = Carbon::create(2023, 12, 31);

        $nombres = ["Irun", "Errenteria", "Donostia", "Hondarribia", "Usurbil"];

        for ($date = $start_date; $date->lte($end_date); $date->addDay()) {
            foreach ($nombres as $nombre) {
                HistorialTemperatura::factory()->create([
                    'fecha' => $date->format('Y-m-d H:i:s'),
                    'nombre' => $nombre,
                ]);
            }
        }
    }
}

