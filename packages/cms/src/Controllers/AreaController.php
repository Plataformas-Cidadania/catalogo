<?php

namespace Cms\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use Illuminate\Support\Facades\Log;

class AreaController extends Controller
{

    public function __construct()
    {

    }

    function index()
    {
        return view('cms::area.listar');
    }

    public function detalhar($id)
    {
        $area = new \stdClass();
        $area->id= $id;
        $area->imagem = "";
        $area->arquivo = "";
        return view('cms::area.detalhar', ['area' => $area]);
    }

}
