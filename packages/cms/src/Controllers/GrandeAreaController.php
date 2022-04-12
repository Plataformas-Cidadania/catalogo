<?php

namespace Cms\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use Illuminate\Support\Facades\Log;

class GrandeAreaController extends Controller
{

    public function __construct()
    {

    }

    function index()
    {
        return view('cms::grande-area.listar');
    }

    public function detalhar($id)
    {
        $grandeArea = new \stdClass();
        $grandeArea->id= $id;
        $grandeArea->imagem = "";
        $grandeArea->arquivo = "";
        return view('cms::grande-area.detalhar', ['grandeArea' => $grandeArea]);
    }

}
