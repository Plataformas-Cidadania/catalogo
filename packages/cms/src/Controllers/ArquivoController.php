<?php

namespace Cms\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use Illuminate\Support\Facades\Log;

class ArquivoController extends Controller
{

    public function __construct()
    {

    }

    function index()
    {
        return view('cms::arquivo.listar');
    }

    public function detalhar($id)
    {
        $arquivo = new \stdClass();
        $arquivo->id= $id;
        $arquivo->imagem = "";
        $arquivo->arquivo = "";
        return view('cms::arquivo.detalhar', ['arquivo' => $arquivo]);
    }

}
