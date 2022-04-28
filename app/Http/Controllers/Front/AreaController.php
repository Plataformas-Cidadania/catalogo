<?php

namespace App\Http\Controllers\Front;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Http\Requests;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Route;

class AreaController extends Controller{

    private $areaController;

    public function __construct(\App\Http\Controllers\Api\AreaController $areaController){
        $this->areaController = $areaController;
    }

    public function listar(){
        //$notices = DB::table('notices')->orderBy('id', 'desc')->paginate(12);
        //return view('notice.listar', ['notices' => $notices]);

        $rota = Route::getCurrentRoute()->uri();

        $areas = $this->areaController->getAll();
        $destaques = \App\Models\Modulo::where('slug', $rota)->first();



        return view('area.listar', ['areas' => $areas, 'destaques' => $destaques]);
    }

    public function detalhar($id){

        /*$notice = new \App\Area;
        $notice = $notice->find($id);
        return view('notice.detalhar', ['notice' => $notice]);*/

        //$teste = \App\Http\Controllers\Api\PoliticaController::get($id);

        //return $teste;

        $area = $this->areaController->get($id);
        //return $area;
        /*foreach($area['politicas'] as $politica){
            return $politica->nome;
        }*/


        //return $area;

        return view('area.detalhar', ['area' => $area]);

    }

   /* public function politica($id){
        $area = $this->areaController->get($id);

        return view('area.politica', ['politica' => $politica]);

    }*/


}

