<?php

namespace Cms\Controllers;

use Cms\Models\ImagemCms;
use Illuminate\Http\Request;

use App\Http\Requests;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Intervention\Image\Facades\Image;

class UrlController extends Controller
{



    public function __construct()
    {
        $this->url = new \App\Models\Url;
        $this->campos = [
            'imagem', 'titulo', 'descricao', 'arquivo', 'url', 'posicao', 'cmsuser_id',
        ];
        $this->pathImagem = public_path().'/imagens/urls';
        $this->sizesImagem = [
            'xs' => ['width' => 140, 'height' => 79],
            'sm' => ['width' => 480, 'height' => 270],
            'md' => ['width' => 580, 'height' => 326],
            'lg' => ['width' => 1170, 'height' => 658]
        ];
        $this->widthOriginal = true;

        $this->pathArquivo = public_path().'/arquivos/urls';
    }

    function index()
    {

        $urls = \App\Models\Url::all();
        //$idiomas = \App\Idioma::lists('titulo', 'id')->all();


        return view('cms::url.listar', ['urls' => $urls]);
        //return view('cms::url.listar', ['urls' => $urls, 'idiomas' => $idiomas]);
    }

    public function listar(Request $request)
    {

        //Log::info('CAMPOS: '.$request->campos);

        //Auth::loginUsingId(2);

        $campos = explode(", ", $request->campos);

        $urls = DB::table('cms.urls')
            ->select($campos)
            ->where([
                [$request->campoPesquisa, 'ilike', "%$request->dadoPesquisa%"],
            ])
            ->orderBy($request->ordem, $request->sentido)
            ->paginate($request->itensPorPagina);
        return $urls;
    }


    public function inserir(Request $request)
    {

        $data = $request->all();

        $data['url'] += ['cmsuser_id' => auth()->guard('cms')->user()->id];//adiciona id do usuario

        //verifica se o index do campo existe no array e caso não exista inserir o campo com valor vazio.
        foreach($this->campos as $campo){
            if(!array_key_exists($campo, $data)){
                $data['url'] += [$campo => ''];
            }
        }

        $file = $request->file('file');
        $arquivo = $request->file('arquivo');

	Log::info($request);

        $successFile = true;
        if($file!=null){
            $filename = rand(1000,9999)."-".clean($file->getClientOriginalName());
            $imagemCms = new ImagemCms();
            $successFile = $imagemCms->inserir($file, $this->pathImagem, $filename, $this->sizesImagem, $this->widthOriginal);
            if($successFile){
                $data['url']['imagem'] = $filename;
            }
        }

        $successArquivo = true;
        if($arquivo!=null){
            $filenameArquivo = rand(1000,9999)."-".clean($arquivo->getClientOriginalName());
            $successArquivo = $arquivo->move($this->pathArquivo, $filenameArquivo);
            if($successArquivo){
                $data['url']['arquivo'] = $filenameArquivo;
            }
        }


        if($successFile && $successArquivo){
            return $this->url->create($data['url']);
        }else{
            return "erro";
        }


        return $this->url->create($data['url']);

    }

    public function detalhar($id)
    {
        $url = $this->url->where([
            ['id', '=', $id],
        ])->firstOrFail();
        //$idiomas = \App\Idioma::lists('titulo', 'id')->all();

        return view('cms::url.detalhar', ['url' => $url]);
        //return view('cms::url.detalhar', ['url' => $url, 'idiomas' => $idiomas]);
    }

    /*public function alterar(Request $request, $id)
    {
        $data = $request->all();
        $data['url'] += ['cmsuser_id' => auth()->guard('cms')->user()->id];//adiciona id do usuario

        //verifica se o index do campo existe no array e caso não exista inserir o campo com valor vazio.
        foreach($this->campos as $campo){
            if(!array_key_exists($campo, $data)){
                if($campo!='imagem'){
                    $data['url'] += [$campo => ''];
                }
            }
        }
        $url = $this->url->where([
            ['id', '=', $id],
        ])->firstOrFail();

        $file = $request->file('file');

        if($file!=null){
            $filename = rand(1000,9999)."-".clean($file->getClientOriginalName());
            $imagemCms = new ImagemCms();
            $success = $imagemCms->alterar($file, $this->pathImagem, $filename, $this->sizesImagem, $this->widthOriginal, $url);
            if($success){
                $data['url']['imagem'] = $filename;
                $url->update($data['url']);
                return $url->imagem;
            }else{
                return "erro";
            }
        }

        //remover imagem
        if($data['removerImagem']){
            $data['url']['imagem'] = '';
            if(file_exists($this->pathImagem."/".$url->imagem)) {
                unurl($this->pathImagem . "/" . $url->imagem);
            }
        }

        $url->update($data['url']);
        return "Gravado com sucesso";
    }*/

    public function alterar(Request $request, $id)
    {
        $data = $request->all();

        //return $data;

        $data['url'] += ['cmsuser_id' => auth()->guard('cms')->user()->id];//adiciona id do usuario

        //verifica se o index do campo existe no array e caso não exista inserir o campo com valor vazio.
        foreach($this->campos as $campo){
            if(!array_key_exists($campo, $data)){
                if($campo!='imagem' && $campo!='arquivo'){
                    $data['url'] += [$campo => ''];
                }
            }
        }
        $url = $this->url->where([
            ['id', '=', $id],
        ])->firstOrFail();


        $file = $request->file('file');
        $arquivo = $request->file('arquivo');

	Log::info($request);

        //remover imagem
        if($data['removerImagem']){
            $data['url']['imagem'] = '';
            if(file_exists($this->pathImagem."/".$url->imagem)) {
                unurl($this->pathImagem . "/" . $url->imagem);
            }
        }


        if($data['removerArquivo']){
            $data['url']['arquivo'] = '';
            if(file_exists($this->pathArquivo."/".$url->arquivo)) {
                unurl($this->pathArquivo . "/" . $url->arquivo);
            }
        }


        $successFile = true;
        if($file!=null){
            $filename = rand(1000,9999)."-".clean($file->getClientOriginalName());
            $imagemCms = new ImagemCms();
            $successFile = $imagemCms->alterar($file, $this->pathImagem, $filename, $this->sizesImagem, $this->widthOriginal, $url);
            if($successFile){
                $data['url']['imagem'] = $filename;
            }
        }

        $successArquivo = true;
        if($arquivo!=null){
            $filenameArquivo = rand(1000,9999)."-".clean($arquivo->getClientOriginalName());
            $successArquivo = $arquivo->move($this->pathArquivo, $filenameArquivo);
            if($successArquivo){
                $data['url']['arquivo'] = $filenameArquivo;
            }
        }

        if($successFile && $successArquivo){

            $url->update($data['url']);
            return $url->imagem;
        }else{
            return "erro";
        }

        //$url->update($data['url']);
        //return "Gravado com sucesso";
    }

    public function excluir($id)
    {
        //Auth::loginUsingId(2);

        $url = $this->url->where([
            ['id', '=', $id],
        ])->firstOrFail();

        //remover imagens
        if(!empty($url->imagem)){
            //remover imagens
            $imagemCms = new ImagemCms();
            $imagemCms->excluir($this->pathImagem, $this->sizesImagem, $url);
        }


        if(!empty($url->arquivo)) {
            if (file_exists($this->pathArquivo . "/" . $url->arquivo)) {
                unurl($this->pathArquivo . "/" . $url->arquivo);
            }
        }

        $url->delete();

    }

    public function status($id)
    {
        $tipo_atual = DB::table('cms.urls')->where('id', $id)->first();
        $status = $tipo_atual->status == 0 ? 1 : 0;
        DB::table('cms.urls')->where('id', $id)->update(['status' => $status]);

    }

    public function positionUp($id)
    {

        $posicao_atual = DB::table('cms.urls')->where('id', $id)->first();
        $upPosicao = $posicao_atual->posicao-1;
        $posicao = $posicao_atual->posicao;

        //Coloca com a posicao do anterior
        DB::table('cms.urls')->where('posicao', $upPosicao)->update(['posicao' => $posicao]);

        //atualiza a posicao para o anterior
        DB::table('cms.urls')->where('id', $id)->update(['posicao' => $upPosicao]);


    }

    public function positionDown($id)
    {

        $posicao_atual = DB::table('cms.urls')->where('id', $id)->first();
        $upPosicao = $posicao_atual->posicao+1;
        $posicao = $posicao_atual->posicao;

        //Coloca com a posicao do anterior
        DB::table('cms.urls')->where('posicao', $upPosicao)->update(['posicao' => $posicao]);

        //atualiza a posicao para o anterior
        DB::table('cms.urls')->where('id', $id)->update(['posicao' => $upPosicao]);

    }


}
