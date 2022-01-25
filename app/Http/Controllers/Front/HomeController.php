<?php

namespace App\Http\Controllers\Front;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Http\Requests;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\DB;



class HomeController extends Controller
{
    public function index(){

        //return view('home');

        $webdoors = \App\Models\Webdoor::orderBy('posicao')->where('status', 1)->get();
        $text1 = \App\Models\Text::where('slug', 'diagnostico')->first();
        $text2 = \App\Models\Text::where('slug', 'resultado')->first();
        $text3 = \App\Models\Text::where('slug', 'recursos')->first();
        $partners = \App\Models\Parceiro::orderBy('id')->get();


        return view('home', [
            'webdoors' => $webdoors,
            'text1' => $text1,
            'text2' => $text2,
            'text3' => $text3,
            'partners' => $partners,
        ]);



    }

}


