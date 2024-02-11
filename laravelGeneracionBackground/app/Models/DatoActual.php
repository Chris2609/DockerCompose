<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DatoActual extends Model
{
    protected $table = "datosActuales";
    public $timestamps = false;
    protected $fillable = ['nombre', 'temperatura', 'temperaturaReal', 'humedad', 'estadoCielo', 'sensacionTermica', 'presionAtmosferica(hPa)', 'velocidadViento(m/s)', 'latitud', 'longitud'];

    use HasFactory;
}
