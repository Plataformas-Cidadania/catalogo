<?php

namespace Cms\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use Illuminate\Support\Facades\Log;

class PoliticaController extends Controller
{

    public function __construct()
    {

    }

    function index()
    {
        return view('cms::politica.listar');
    }

    public function detalhar($id)
    {
        $politica = new \stdClass();
        $politica->id= $id;
        $politica->imagem = "";
        $politica->arquivo = "";
        return view('cms::politica.detalhar', ['politica' => $politica]);
    }

}
