<?php

use App\Http\Controllers\HistorialTemperaturaController;
use App\Http\Controllers\PruebaController;
use App\Http\Controllers\RegisterController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DatoActualController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
// return $request->user();
// });

Route::post('register', [RegisterController::class, 'register']);
Route::post('login', [RegisterController::class, 'login']);
Route::get('prueba', [PruebaController::class, 'prueba']);


Route::middleware('auth:api')->group( function () {
    Route::get('logout', [RegisterController::class, 'logout']);
    Route::get('obtenerUbicacionLatLon', [DatoActualController::class, 'obtenerUbicacionLatLon']);
    Route::get('obtenerDatosActuales', [DatoActualController::class, 'obtenerDatosActuales']);
    Route::get('obtenerDatosHistorial', [HistorialTemperaturaController::class, 'obtenerDatosHistorial']);
});


Route::post('comprobarToken', function () {
    $authenticated = Auth::guard('api')->check();

    return $authenticated ? response()->json($authenticated) : 0;
});