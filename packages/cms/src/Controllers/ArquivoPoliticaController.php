<?php

namespace Cms\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use Illuminate\Support\Facades\Log;

class ArquivoPoliticaController extends Controller
{

    private $politicaControllerApi;

    public function __construct(\App\Http\Controllers\Api\PoliticaController $politicaControllerApi)
    {
        $this->politicaControllerApi = $politicaControllerApi;
    }

    function index($politica_id)
    {

        $politica = $this->politicaControllerApi->get($politica_id);

        return view('cms::arquivo-politica.listar', ["politica_id" => $politica_id, "politica" => $politica]);
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
