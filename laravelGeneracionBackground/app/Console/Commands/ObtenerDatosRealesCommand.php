<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Http\Controllers\DatoActualController;

class ObtenerDatosRealesCommand extends Command
{
    protected $signature = 'obtener:datos-reales';

    protected $description = 'Ejecuta la función obtenerDatosReales del DatoActualController';

    protected $datoActualController;

    public function __construct(DatoActualController $datoActualController)
    {
        parent::__construct();

        $this->datoActualController = $datoActualController;
    }

    public function handle()
    {
        $this->datoActualController->obtenerDatosReales();
    }
}