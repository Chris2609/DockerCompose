<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use App\Models\DatoActual;
use App\Models\HistorialTemperatura;

class DatoActualController extends Controller
{
    public function obtenerDatosReales()
{
    $token = "253682c0bd759acfb4255d4aa08c3dd7";

    $ubicaciones = ["Irun", "Errenteria", "Donostia", "Hondarribia", "Usurbil"];

    try {
        foreach ($ubicaciones as $ubicacion) {
            $response = Http::withHeaders([
                'Accept' => 'application/json',
            ])->get("https://api.openweathermap.org/data/2.5/weather?q=" . $ubicacion . "&appid=" . $token . "&units=metric");

            $datos = json_decode($response->getBody(), true);

            //isset sirve para confirmar que no es null
            $nombre = $ubicacion;
            $temperatura = $datos['main']['temp'];
            $temperaturaReal = $datos['main']['temp'];
            $humedad = $datos['main']['humidity'];
            $estadoCielo = $datos['weather'][0]['main'];
            $sensacionTermica = $datos['main']['feels_like'];
            $presionAtmosferica = $datos['main']['pressure'];
            $velocidadViento = $datos['wind']['speed'];
            $latitud = $datos['coord']['lat'];
            $longitud = $datos['coord']['lon'];

            $registroExistente = DatoActual::where('nombre', $nombre)->exists();

            if (!$registroExistente) {
                // Si no existe, crea un nuevo registro
                DatoActual::create([
                    'nombre' => $nombre,
                    'temperatura' => $temperatura,
                    'temperaturaReal' => $temperaturaReal,
                    'humedad' => $humedad,
                    'estadoCielo' => $estadoCielo,
                    'sensacionTermica' => $sensacionTermica,
                    'presionAtmosferica(hPa)' => 0,
                    'velocidadViento(m/s)' => $velocidadViento,
                    'latitud' => $latitud,
                    'longitud' => $longitud,
                ]);
            } else {
                // Si ya existe, actualiza específicamente varios campos
                DatoActual::where('nombre', $nombre)->update([
                    'temperatura' => $temperatura,
                    'temperaturaReal' => $temperaturaReal,
                    'humedad' => $humedad,
                    'estadoCielo' => $estadoCielo,
                    'sensacionTermica' => $sensacionTermica,
                    'presionAtmosferica(hPa)' => $presionAtmosferica,
                    'velocidadViento(m/s)' => $velocidadViento,
                    'latitud' => $latitud,
                    'longitud' => $longitud,
                ]);
            }

            HistorialTemperatura::create([
                'nombre' => $nombre,
                'temperatura' => $temperaturaReal,
                'fecha' => now(),                
            ]);
        }
    } catch (\Throwable $th) {
        return response()->json(['error' => $th->getMessage()], 500);
    }
}


    public function generacionAleatoriaTemperatura()
    {
        $ubicaciones = ["Irun", "Errenteria", "Donostia", "Hondarribia", "Usurbil"];

        foreach ($ubicaciones as $ubicacion) {
            $temperaturaReal = DatoActual::where('nombre', $ubicacion)->value("temperaturaReal");

            $random = rand(-1, 1);
            $temperatura = $temperaturaReal + $random;

            DatoActual::where('nombre', $ubicacion)->update(['temperatura' => $temperatura]);
        }
    }
}