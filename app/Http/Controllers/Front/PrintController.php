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

    public function __construct(\App\Http\Controllers\Api\PoliticaController $politicaController){
        $this->politicaController = $politicaController;
    }


    public function politica($id){
        $politica = $this->politicaController->get($id);
        $politica = (object) $politica;

        //return $politica;
        //return count($politica);

        return view('prints.politica', ['politica' => $politica]);

    }



    public function timeline($id){
        $timeline = $this->politicaController->get($id);
        $timeline = (object) $timeline;

        //return $timeline;
        //return count($timeline);

        return view('prints.timeline', ['timeline' => $timeline]);

    }


}
