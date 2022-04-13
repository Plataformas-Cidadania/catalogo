<?php

namespace Cms\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use Illuminate\Support\Facades\Log;

class PublicoAlvoController extends Controller
{

    public function __construct()
    {

    }

    function index()
    {
        return view('cms::publico-alvo.listar');
    }

    public function detalhar($id)
    {
        $publicoAlvo = new \stdClass();
        $publicoAlvo->id= $id;
        $publicoAlvo->imagem = "";
        $publicoAlvo->arquivo = "";
        return view('cms::publico-alvo.detalhar', ['publicoAlvo' => $publicoAlvo]);
    }

}
