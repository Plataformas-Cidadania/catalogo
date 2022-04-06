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
    public function listar(\App\Http\Controllers\Api\AreaController $areaController){
        //$notices = DB::table('notices')->orderBy('id', 'desc')->paginate(12);
        //return view('notice.listar', ['notices' => $notices]);

        $areas = $areaController->getAll();

        return view('area.listar', ['areas' => $areas]);
    }

    public function detalhar($id){

        /*$notice = new \App\Area;
        $notice = $notice->find($id);

        return view('notice.detalhar', ['notice' => $notice]);*/
        return view('area.detalhar');

    }

    public function politica($id){

        /*$notice = new \App\Area;
        $notice = $notice->find($id);

        return view('notice.detalhar', ['notice' => $notice]);*/
        return view('area.politica');

    }


}
