<?php

namespace App\Http\Controllers\Front;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Http\Requests;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Route;

class PoliticaController extends Controller{

    private $politicaController;

    public function __construct(\App\Http\Controllers\Api\PoliticaController $politicaController){
        $this->politicaController = $politicaController;
    }


    public function politica($id, \App\Http\Controllers\Api\ArquivoController $arquivos){
        $politica = $this->politicaController->get($id);
        $politica = (object) $politica;


        //$arquivos = getArquivosPorPoliticaId-

        /*print_r($arquivos);*/

        //return count($politica);

        return view('area.politica', ['politica' => $politica, 'arquivos' => $arquivos]);

    }


}
