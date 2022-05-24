<?php

namespace App\Http\Controllers\Front;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Http\Requests;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Route;

class PrintController extends Controller{

    private $politicaController;
    private $areaController;

    public function __construct(
        \App\Http\Controllers\Api\PoliticaController $politicaController,
        \App\Http\Controllers\Api\AreaController $areaController
    ){
        $this->politicaController = $politicaController;
        $this->areaController = $areaController;
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

        return view('prints.politica', ['politica' => $politica, 'arquivos' => $arquivos, 'grande_area' => $grande_area, 'area' => $area]);

    }



    public function timeline($area_id){
        $timeline = $this->politicaController->getTimelineArea($area_id);
        $area = $this->areaController->get($area_id);

        //Ordena as policias por ano-----------------------------
        $anos = array();
        foreach ($timeline as $key => $item)
        {
            $item['ano'] = substr($item['ano'], 0, 4);
            $anos[$key] = $item['ano'];
        }
        array_multisort($anos, SORT_ASC, $timeline);
        //--------------------------------------------------------

        //reorganiza a timeline agrupada por anos
        $newTimeline = [];
        foreach($timeline as $item){
            //cria a key ano dentro do objeto de area com um array vazio
            $item['ano'] = substr($item['ano'], 0, 4);
            if(!array_key_exists(substr($item['ano'], 0, 4), $newTimeline)){
                $newTimeline[$item['ano']] = [];
            }
            //adiciona um array de politica no array do ano
            $newTimeline[$item['ano']][] = [
                "nome" => $item['nome']
            ];
        }

        $timeline = $newTimeline;

        //return $timeline;

        return view('prints.timeline', ['timeline' => $timeline, 'area' => $area]);

    }


}
