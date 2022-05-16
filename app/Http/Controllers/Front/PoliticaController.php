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


    public function politica($id, \App\Http\Controllers\Api\ArquivoController $arquivos, \App\Http\Controllers\Api\GrandeAreaController $grande_area, \App\Http\Controllers\Api\AreaController $area){
        $politica = $this->politicaController->get($id);
        $politica = (object) $politica;


        $arquivos = $arquivos->getArquivosPorPoliticaId($id);
        $arquivos = (object) $arquivos;

        $grande_area = $grande_area->get($politica->grande_area);
        $grande_area = (object) $grande_area;

        $area = $area->get($politica->area);
        $area = (object) $area;

        //return $area;

        /*print_r($arquivos);*/

        //return count($politica);

        return view('area.politica', ['politica' => $politica, 'arquivos' => $arquivos, 'grande_area' => $grande_area, 'area' => $area]);

    }


}
