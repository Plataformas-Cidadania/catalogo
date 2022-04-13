<?php

namespace Cms\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use Illuminate\Support\Facades\Log;

class CategoriaPoliticaController extends Controller
{

    public function __construct()
    {

    }

    function index()
    {
        return view('cms::categoria-politica.listar');
    }

    public function detalhar($id)
    {
        $categoriaPolitica = new \stdClass();
        $categoriaPolitica->id= $id;
        $categoriaPolitica->imagem = "";
        $categoriaPolitica->arquivo = "";
        return view('cms::categoria-politica.detalhar', ['categoriaPolitica' => $categoriaPolitica]);
    }

}
