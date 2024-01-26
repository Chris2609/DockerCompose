<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('datosActuales', function (Blueprint $table) {
            $table->string('nombre')->primary();
            $table->integer('temperatura');
            $table->integer('temperaturaReal');
            $table->integer('humedad');
            $table->string('estadoCielo');
            $table->string('sensacionTermica');
            $table->integer('presionAtmosferica(hPa)');
            $table->float('velocidadViento(m/s)');
            $table->string('latitud');
            $table->string('longitud');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('datosActuales');
    }
};
