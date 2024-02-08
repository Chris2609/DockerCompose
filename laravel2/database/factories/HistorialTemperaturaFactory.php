<?php

namespace Database\Factories;
use App\Models\HistorialTemperatura;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\HistorialTemperatura>
 */
class HistorialTemperaturaFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */

    protected $model = HistorialTemperatura::class;

    public function definition(): array
    {
        return [
            'fecha' => $this->faker->dateTimeBetween('2023-01-01', '2023-12-31'),
            'temperatura' => $this->faker->numberBetween(5, 35),
        ];
    }
}
