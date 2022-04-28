<?php

namespace App\Http\Controllers\Front;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Http\Requests;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\DB;



class HomeController extends Controller{

    private $areaController;

    public function __construct(\App\Http\Controllers\Api\AreaController $areaController){
        $this->areaController = $areaController;
    }

    public function index(){

        $areas = $this->areaController->getAll();

        //return $areas;

        $webdoors = \App\Models\Webdoor::orderBy('posicao')->where('status', 1)->get();
        $text1 = \App\Models\Text::where('slug', 'diagnostico')->first();
        $text2 = \App\Models\Text::where('slug', 'resultado')->first();
        $text3 = \App\Models\Text::where('slug', 'recursos')->first();
        $destaques = \App\Models\Modulo::where('tipo_id', 3)->get();
        $partners = \App\Models\Parceiro::orderBy('id')->get();


        return view('home', [
            'webdoors' => $webdoors,
            'text1' => $text1,
            'text2' => $text2,
            'text3' => $text3,
            'partners' => $partners,
            'areas' => $areas,
            'destaques' => $destaques,
        ]);



    }

}


