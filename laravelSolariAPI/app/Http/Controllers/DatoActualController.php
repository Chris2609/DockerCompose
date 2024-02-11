<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use App\Models\DatoActual;

class DatoActualController extends Controller
{
    public function obtenerUbicacionLatLon(){
        $ubicaciones = DatoActual::all(['nombre', 'latitud', 'longitud']);

        // Devolver los datos en formato JSON o realizar cualquier otra acción que necesites
        return response()->json($ubicaciones);
    }

    public function obtenerDatosActuales(){
        $datosUbicaciones = DatoActual::all(['nombre', 'temperatura', 'humedad', 'estadoCielo', 'sensacionTermica', 'presionAtmosferica(hPa)', 'velocidadViento(m/s)']);

        return response()->json($datosUbicaciones);
    }
}
