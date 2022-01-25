<?php

namespace App\Http\Controllers\Front;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Http\Requests;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Route;

class ResultadoController extends Controller{

    public function listar(){

        //$rota = Route::getCurrentRoute()->uri();
        //$modulo = \App\Models\Modulo::first();

        return view('resultado.listar');

    }

    public function print(){
        return view('resultado.print');
    }
}
