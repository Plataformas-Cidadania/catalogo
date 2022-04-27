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


    public function politica($id){
        $politica = $this->politicaController->get($id);
        $politica = (object) $politica;

        //return $politica;
        //return count($politica);

        return view('prints.politica', ['politica' => $politica]);

    }



    public function timeline($area_id){
        $timeline = $this->politicaController->getTimelineArea($area_id);
        $area = $this->areaController->get($area_id);
        ///$timeline = (object) $timeline;

        //return $timeline;
        //return count($timeline);

        return view('prints.timeline', ['timeline' => $timeline, 'area' => $area]);

    }


}
