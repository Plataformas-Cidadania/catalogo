<?php

namespace App\Http\Controllers\Front;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Http\Requests;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Route;

class TimelineController extends Controller{

    public function timeline(){


        $rota = Route::getCurrentRoute()->uri();
        $destaques = \App\Models\Modulo::where('slug', $rota)->first();

        return view('timeline.index', ['destaques' => $destaques]);
    }

}

