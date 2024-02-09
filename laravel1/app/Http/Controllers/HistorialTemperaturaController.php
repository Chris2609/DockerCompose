<?php

namespace App\Http\Controllers;

use App\Models\HistorialTemperatura;
use Illuminate\Http\Request;

class HistorialTemperaturaController extends Controller
{
    public function obtenerDatosHistorial(Request $request)
    {
        $nombre = $request->input('nombre');
        $fechaInicio = $request->input('fechaInicio');
        $fechaFin = $request->input('fechaFin');

        $datos = [];

        while ($fechaInicio <= $fechaFin) {
            $promedio = HistorialTemperatura::where('nombre', $nombre)
                ->whereRaw("DATE(fecha) = ?", [$fechaInicio])
                ->avg('temperatura');

            if ($promedio !== null) {
                $datos[] = [
                    'fecha' => $fechaInicio,
                    'temperaturaPromedio' => $promedio
                ];
            }

            $fechaInicio = date('Y-m-d', strtotime($fechaInicio . ' +1 day'));
        }

        return response()->json($datos);
    }       
}