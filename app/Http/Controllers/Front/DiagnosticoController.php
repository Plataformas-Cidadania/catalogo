<?php

namespace App\Http\Controllers\Front;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Http\Requests;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Route;

class DiagnosticoController extends Controller{

    public function completo(){

        $rota = Route::getCurrentRoute()->uri();

        $modulo = \App\Models\Modulo::first();

        return view('diagnostico.completo', [
            'page' => $modulo,
        ]);

    }

    public function completoReact(){

        $rota = Route::getCurrentRoute()->uri();

        $modulo = \App\Models\Modulo::first();

        return view('diagnostico.completo-react', [
            'page' => $modulo,
        ]);

    }

    public function testeDimensoes(){
        /*$rows = DB::table('dimensao')->orderBy('id_dimensao')->get();
        $dimensoes = [];
        foreach ($rows as $row) {
            array_push($dimensoes, [
                "teaser" => [
                    "titulo" => $row->nome,
                    "descricao" => 'Chama atenção para o conjunto de relações institucionais envolvidas
                                                    no processo de implementação, envolvendo tanto articulações entre órgãos
                                                    governamentais e organizações do setor privado e da sociedade civil. O foco se volta
                                                    para identificação das implicações de falhas de articulação e conflitos
                                                    interinstitucionais sobre os segmentos específicos do público atendido e para a
                                                    existência e operação de compromissos institucionais e instrumentos de gestão
                                                    pró-equidade. É composta por dois indicadores.',
                    "dimensao" =>  $row->id_dimensao,
                ],
                "indicadores" => []
            ]);
        }
        return $dimensoes;*/
    }
}
