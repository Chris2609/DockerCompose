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
        Schema::create('historial_temperaturas', function (Blueprint $table) {
            $table->string('nombre');
            $table->integer('temperatura');
            $table->dateTime('fecha');
            $table->primary(['nombre', 'fecha']); 
              
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('historial_temperaturas');
    }
};
