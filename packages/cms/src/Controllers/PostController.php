<?php

namespace Cms\Controllers;

use Cms\Models\ImagemCms;
use Illuminate\Http\Request;

use App\Http\Requests;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Intervention\Image\Facades\Image;

class PostController extends Controller
{



    public function __construct()
    {
        $this->post = new \App\Models\Post;
        $this->campos = [
            'imagem', 'titulo', 'resumida', 'descricao', 'arquivo', 'data', 'cmsuser_id', 'video', 'image_detail'
        ];
        $this->pathImagem = public_path().'/imagens/posts';
        $this->sizesImagem = [
            'xs' => ['width' => 140, 'height' => 140],
            'sm' => ['width' => 480, 'height' => 480],
            'md' => ['width' => 580, 'height' => 580],
            'lg' => ['width' => 1170, 'height' => 1170]
        ];
        $this->widthOriginal = true;

        $this->pathArquivo = public_path().'/arquivos/posts';
    }

    function index($midia_id)
    {

        $posts = \App\Models\Post::all();
        $authors = \App\Models\Integrante::where('conteudo', 1)->pluck('titulo', 'id')->all();
        //$categorias = \App\Models\Categoria::pluck('titulo', 'id')->all();
        //$idiomas = \App\Models\Idioma::lists('titulo', 'id')->all();

        $categorias = \App\Models\Categoria::select('cms.categorias.id', 'cms.categorias.titulo')
            ->where('cms.categorias.midia_id', $midia_id)
            ->pluck('cms.categorias.titulo', 'cms.categorias.id')
            ->all();


        return view('cms::post.listar', ['posts' => $posts, 'authors' => $authors, 'categorias' => $categorias, 'midia_id' => $midia_id]);
        //return view('cms::post.listar', ['posts' => $posts, 'idiomas' => $idiomas]);
    }

    public function listar(Request $request)
    {

        $campos = explode(", ", $request->campos);
        $prefix = 'cms.posts';
        $newCampos = array();

        // Percorre o array $campos e concatena com a string desejada
        foreach ($campos as $campo) {
            $newCampos[] = $prefix . '.' . $campo;
        }

        /*$posts = DB::table('cms.posts')
            ->join('cms.categorias_posts', 'cms.categorias_posts.post_id', '=', 'cms.posts.id')
            ->join('cms.categorias', 'cms.categorias.id', '=', 'cms.categorias_posts.categoria_id')
            ->join('cms.midias', 'cms.midias.id', '=', 'cms.categorias.midia_id')
            ->where('cms.categorias.midia_id', '=', $request->midia_id)
            ->select($newCampos)
            ->where([
                ['cms.posts.'.$request->campoPesquisa, 'ilike', "%$request->dadoPesquisa%"]
            ])
            ->orderBy($request->ordem, $request->sentido)
            ->paginate($request->itensPorPagina);*/

        $posts = DB::table('cms.posts')
            ->join('cms.categorias_posts', 'cms.categorias_posts.post_id', '=', 'cms.posts.id')
            ->join('cms.categorias', 'cms.categorias.id', '=', 'cms.categorias_posts.categoria_id')
            ->join('cms.midias', 'cms.midias.id', '=', 'cms.categorias.midia_id')
            ->where('cms.categorias.midia_id', '=', $request->midia_id)
            ->select($newCampos)
            ->where([
                ['cms.posts.'.$request->campoPesquisa, 'ilike', "%$request->dadoPesquisa%"]
            ])
            ->orderBy($request->ordem, $request->sentido)
            ->groupBy('cms.posts.id') // Agrupa pelos IDs dos posts
            ->paginate($request->itensPorPagina);


        return $posts;
    }


    public function inserir(Request $request)
    {

        $data = $request->all();

        $data['post'] += ['cmsuser_id' => auth()->guard('cms')->user()->id];//adiciona id do usuario

        //verifica se o index do campo existe no array e caso não exista inserir o campo com valor vazio.
        foreach($this->campos as $campo){
            if(!array_key_exists($campo, $data)){
                $data['post'] += [$campo => ''];
            }
        }

        $file = $request->file('file');
        $arquivo = $request->file('arquivo');

	//Log::info($request);

        $successFile = true;
        if($file!=null){
            $filename = rand(1000,9999)."-".clean($file->getClientOriginalName());
            $imagemCms = new ImagemCms();
            $successFile = $imagemCms->inserir($file, $this->pathImagem, $filename, $this->sizesImagem, $this->widthOriginal);
            if($successFile){
                $data['post']['imagem'] = $filename;
            }
        }

        $successArquivo = true;
        if($arquivo!=null){
            $filenameArquivo = rand(1000,9999)."-".clean($arquivo->getClientOriginalName());
            $successArquivo = $arquivo->move($this->pathArquivo, $filenameArquivo);
            if($successArquivo){
                $data['post']['arquivo'] = $filenameArquivo;
            }
        }


        if($successFile && $successArquivo){
            $insert =  $this->post->create($data['post']);

            $authorArtigo = new \App\Models\IntegrantePost;
            $dadosAuthorArtigo = Array();
            $dadosAuthorArtigo['post_id'] = $insert->id;



            foreach($data["integrante_post"] as $autor => $marcado){
                if($marcado=='true'){
                    $array_autor = explode('_', $autor);
                    $dadosAuthorArtigo['integrante_id'] = $array_autor[1];
                    $authorArtigo->create($dadosAuthorArtigo);
                }
            }

            $catArtigo = new \App\Models\CategoriaPost;
            $dadosCatArtigo = Array();
            $dadosCatArtigo['post_id'] = $insert->id;

            foreach($data["categoria_post"] as $cat => $marcado){
                if($marcado=='true'){
                    $array_cat = explode('_', $cat);
                    $dadosCatArtigo['categoria_id'] = $array_cat[1];
                    $catArtigo->create($dadosCatArtigo);
                }
            }

        }else{
            return "erro";
        }

        //$insert = $this->post->create($data['post']);
        return $insert;

    }

    public function detalhar($id)
    {
        $categoria = \App\Models\Categoria::pluck('titulo', 'id')->all();
        $authors = \App\Models\Integrante::where('conteudo', 1)->pluck('titulo', 'id')->all();

        $cat = \App\Models\Categoria::select('cms.categorias.midia_id')
            ->leftJoin('cms.categorias_posts', 'cms.categorias.id', '=', 'cms.categorias_posts.categoria_id')
            ->where('cms.categorias_posts.post_id', $id)
            ->first();

        $categorias = \App\Models\Categoria::select('cms.categorias.id', 'cms.categorias.titulo')
            ->where('cms.categorias.midia_id', $cat->midia_id)
            ->pluck('cms.categorias.titulo', 'cms.categorias.id')
            ->all();

        $post = $this->post->where([
            ['id', '=', $id],
        ])->firstOrFail();
        //$idiomas = \App\Idioma::lists('titulo', 'id')->all();

        $autors_post = \App\Models\IntegrantePost::where('post_id', $id)->get();

        foreach($autors_post as $row){
            $post->{"integrante".$row->integrante_id} = true; //Ex.: $artigo->autor1
        }

        $cat_post = \App\Models\CategoriaPost::where('post_id', $id)->get();

        foreach($cat_post as $row){
            $post->{"categoria".$row->categoria_id} = true; //Ex.: $artigo->autor1
        }

        return view('cms::post.detalhar', [
            'post' => $post,
            'categoria' => $categoria,
            'authors' => $authors,
            'categorias' => $categorias
        ]);
        //return view('cms::post.detalhar', ['post' => $post, 'idiomas' => $idiomas]);
    }


    public function alterar(Request $request, $id)
    {
        $data = $request->all();

        //return $data;

        $data['post'] += ['cmsuser_id' => auth()->guard('cms')->user()->id];//adiciona id do usuario

        //verifica se o index do campo existe no array e caso não exista inserir o campo com valor vazio.
        foreach($this->campos as $campo){
            if(!array_key_exists($campo, $data)){
                if($campo!='imagem' && $campo!='arquivo'){
                    $data['post'] += [$campo => ''];
                }
            }
        }
        $post = $this->post->where([
            ['id', '=', $id],
        ])->firstOrFail();


        $file = $request->file('file');
        $arquivo = $request->file('arquivo');



        //remover imagem
        if($data['removerImagem']){
            $data['post']['imagem'] = '';
            if(file_exists($this->pathImagem."/".$post->imagem)) {
                unlink($this->pathImagem . "/" . $post->imagem);
            }
        }


        if($data['removerArquivo']){
            $data['post']['arquivo'] = '';
            if(file_exists($this->pathArquivo."/".$post->arquivo)) {
                unlink($this->pathArquivo . "/" . $post->arquivo);
            }
        }


        $successFile = true;
        if($file!=null){
            $filename = rand(1000,9999)."-".clean($file->getClientOriginalName());
            $imagemCms = new ImagemCms();
            $successFile = $imagemCms->alterar($file, $this->pathImagem, $filename, $this->sizesImagem, $this->widthOriginal, $post);
            if($successFile){
                $data['post']['imagem'] = $filename;
            }
        }

        $successArquivo = true;
        if($arquivo!=null){
            $filenameArquivo = rand(1000,9999)."-".clean($arquivo->getClientOriginalName());
            $successArquivo = $arquivo->move($this->pathArquivo, $filenameArquivo);
            if($successArquivo){
                $data['post']['arquivo'] = $filenameArquivo;
            }
        }

        //////////////////////
        $authorArtigo = new \App\Models\IntegrantePost();
        DB::table('cms.integrantes_posts')->where('post_id', $id)->delete();
        $dadosAuthorArtigo = Array();
        $dadosAuthorArtigo['post_id'] = $id;

        //Log::info(in_array("true", $data["integrante_post"]));
        //if($data['artigo']['publicacao_atlas']!=1) {
            foreach ($data["integrante_post"] as $autor => $marcado) {
                if ($marcado == 'true') {
                    $array_autor = explode('_', $autor);
                    $dadosAuthorArtigo['integrante_id'] = $array_autor[1];
                    $authorArtigo->create($dadosAuthorArtigo);
                }
            }
        //}
        //////////////////////

        //////////////////////
        $catArtigo = new \App\Models\CategoriaPost();
        DB::table('cms.categorias_posts')->where('post_id', $id)->delete();
        $dadosCatArtigo = Array();
        $dadosCatArtigo['post_id'] = $id;


        foreach ($data["categoria_post"] as $cat => $marcado) {
            /*Log::info('---------------');
            Log::info($data["categoria_post"]);
            Log::info('---------------');*/
            if ($marcado == 'true') {
                $array_cat = explode('_', $cat);
                $dadosCatArtigo['categoria_id'] = $array_cat[1];
                $catArtigo->create($dadosCatArtigo);
            }

        }

        //////////////////////

        if($successFile && $successArquivo){

            $post->update($data['post']);
            return $post->imagem;
        }else{
            return "erro";
        }

        //$post->update($data['post']);
        //return "Gravado com sucesso";
    }

    public function excluir($id)
    {
        //Auth::loginUsingId(2);

        $post = $this->post->where([
            ['id', '=', $id],
        ])->firstOrFail();

        //remover imagens
        if(!empty($post->imagem)){
            //remover imagens
            $imagemCms = new ImagemCms();
            $imagemCms->excluir($this->pathImagem, $this->sizesImagem, $post);
        }


        if(!empty($post->arquivo)) {
            if (file_exists($this->pathArquivo . "/" . $post->arquivo)) {
                unlink($this->pathArquivo . "/" . $post->arquivo);
            }
        }

        $post->delete();

    }

    public function status($id)
    {
        $tipo_atual = DB::table('cms.posts')->where('id', $id)->first();
        $status = $tipo_atual->status == 0 ? 1 : 0;
        DB::table('cms.posts')->where('id', $id)->update(['status' => $status]);

    }

    public function destaque($id)
    {
        $tipo_atual = DB::table('cms.posts')->where('id', $id)->first();
        $destaque = $tipo_atual->destaque == 0 ? 1 : 0;
        DB::table('cms.posts')->where('id', $id)->update(['destaque' => $destaque]);

    }


}
