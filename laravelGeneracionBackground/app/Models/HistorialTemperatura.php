<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class HistorialTemperatura extends Model
{

    protected $table = "historial_temperaturas";
    public $timestamps = false;
    protected $fillable = ['nombre', 'temperatura', 'fecha'];

    use HasFactory;

    
}
