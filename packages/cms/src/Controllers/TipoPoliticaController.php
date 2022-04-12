<?php

namespace Cms\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use Illuminate\Support\Facades\Log;

class TipoPoliticaController extends Controller
{

    public function __construct()
    {

    }

    function index()
    {
        return view('cms::tipo-politica.listar');
    }

    public function detalhar($id)
    {
        $tipoPolitica = new \stdClass();
        $tipoPolitica->id= $id;
        $tipoPolitica->imagem = "";
        $tipoPolitica->arquivo = "";
        return view('cms::tipo-politica.detalhar', ['tipoPolitica' => $tipoPolitica]);
    }

}
