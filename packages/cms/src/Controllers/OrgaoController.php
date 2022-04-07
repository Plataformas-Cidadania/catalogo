<?php

namespace Cms\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use Illuminate\Support\Facades\Log;

class OrgaoController extends Controller
{

    public function __construct()
    {

    }

    function index()
    {
        return view('cms::orgao.listar');
    }

    public function detalhar($id)
    {
        $orgao = new \stdClass();
        $orgao->id= $id;
        $orgao->imagem = "";
        $orgao->arquivo = "";
        return view('cms::orgao.detalhar', ['orgao' => $orgao]);
    }

}
