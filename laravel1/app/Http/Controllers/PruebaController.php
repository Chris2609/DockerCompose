<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\Models\User;

class PruebaController extends Controller
{
    function prueba(){
        $users = User::All();
        return response()->json([
            'users' => $users,
        ]);
    }
}
