<?php

namespace App\Http\Controllers\Front;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Http\Requests;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Route;

class PostController extends Controller{


    public function post($midia_id=0){
        return view('post.list', ['midia_id' => $midia_id]);
    }

    public function details($id, $titulo = null){
        $detail = \App\Models\Post::find($id);

        $lasts = \App\Models\Post::
        where('id', '!=', $detail->id)
            ->orderBy('id', 'desc')
            ->take(4)
            ->get();

        $members = \App\Models\Integrante::where('conteudo', 1)
            ->select('cms.integrantes.titulo', 'cms.integrantes.imagem')
            ->join('cms.integrantes_posts', 'cms.integrantes_posts.integrante_id', 'cms.integrantes.id')
            ->join('cms.posts', 'cms.integrantes_posts.post_id', 'cms.posts.id')
            ->where('cms.posts.id', $id)
            ->get();

        return view('post.detail', [
            'detail' => $detail,
            'lasts' => $lasts,
            'members' => $members
        ]);
    }

    public function listing($parameters = null){

        if($parameters!=null){
            $array = explode('=', $parameters);
            return view('ad.list', ['filtros' => $array[1]]);
        }

        return view('ad.list', ['filtros' => null]);
    }

    public function categories(Request $request){

        /*$categories = \App\Models\Categoria::select(
            DB::Raw("
                cms.categorias.id,
                cms.categorias.titulo,
                count(cms.categorias.id) as qtd
            "))
            ->join('cms.midias', 'cms.midias.id', '=', 'cms.categorias.midia_id')
            ->join('cms.posts', 'cms.categorias.id', '=', 'cms.posts.categoria_id')
            ->where('cms.posts.titulo', 'ilike', $request->search.'%')
            ->where('cms.midias.id', $request->midia_id)
            ->groupBy('cms.categorias.id', 'cms.categorias.titulo')
            ->distinct()
            ->get();*/

        $categories = \App\Models\Categoria::select(
            DB::Raw("
            cms.categorias.id,
            cms.categorias.titulo,
            count(cms.categorias.id) as qtd
        "))
            ->join('cms.midias', 'cms.midias.id', '=', 'cms.categorias.midia_id')
            ->join('cms.categorias_posts', 'cms.categorias.id', '=', 'cms.categorias_posts.categoria_id')
            ->join('cms.posts', 'cms.categorias_posts.post_id', '=', 'cms.posts.id')
            ->where('cms.posts.titulo', 'ilike', $request->search.'%')
            ->where('cms.midias.id', $request->midia_id)
            ->groupBy('cms.categorias.id', 'cms.categorias.titulo')
            ->distinct()
            ->get();

        return $categories;
    }

    public function members(Request $request){

        $members = \App\Models\Integrante::
            select(
            DB::Raw("
                cms.integrantes.id,
                cms.integrantes.titulo,
                count(cms.integrantes.id) as qtd,
                max(cms.integrantes.imagem) as imagem
            ")
        )
            ->join('cms.integrantes_posts', 'cms.integrantes_posts.integrante_id', 'cms.integrantes.id')
            ->join('cms.posts', 'cms.integrantes_posts.post_id', 'cms.posts.id')
            ->join('cms.categorias', 'cms.posts.categoria_id', 'cms.categorias.id')
            ->join('cms.midias', 'cms.categorias.midia_id', 'cms.midias.id')
            ->where([
                ['cms.integrantes.titulo', 'ilike', $request->search.'%'],
                ['cms.integrantes.conteudo', 1]
            ])
            ->where('cms.midias.id', $request->midia_id)
            ->groupBy('cms.integrantes.id', 'cms.integrantes.titulo', 'cms.midias.id', 'cms.categorias.id')
            ->get();


        return $members;
    }

    public function archives(Request $request){

        $archives = \App\Models\Post::
            select(
                DB::Raw("
                to_char(posts.data, 'YYYY-MM') as date_menu,
                count(posts.data) as qtd,
                to_char(posts.data, 'TMMonth') as month,
                to_char(posts.data, 'YYYY') as year
                "))
            ->join('cms.categorias', 'cms.posts.categoria_id', 'cms.categorias.id')
            ->where('cms.categorias.midia_id', $request->midia_id)
            ->groupBy('date_menu', 'month', 'year')
            ->orderby('date_menu', 'desc')
            ->distinct('date_menu')
            ->get();

        return $archives;
    }

    public function getList(Request $request){

        /*Log::info('///////////////////////////');
        Log::info('cms.posts.'.$request->order);
        Log::info($request->order);
        Log::info($request->directionOrder);
        Log::info('///////////////////////////');*/


        $columnsOby = 'cms.posts.'.$request->order;

        $search = '';
        if (is_array($request->filters) && array_key_exists('search', $request->filters)) {
            $search = $request->filters['search'];
        }

        $categories = [];
        if (is_array($request->filters) && array_key_exists('categories', $request->filters)) {
            $categories = $request->filters['categories'];
        }

        $members = [];
        if (is_array($request->filters) && array_key_exists('members', $request->filters)) {
            $members = $request->filters['members'];
        }

        $archives = [];
        if (is_array($request->filters) && array_key_exists('archives', $request->filters)) {
            $archives = $request->filters['archives'];
        }

        $total = \App\Models\Post::select('*')
            ->when(count($categories) > 0, function($query) use ($categories){
                return $query->whereIn('categoria_id', $categories);
            })
            ->get();

        $total = count($total);

        $result = \App\Models\Post::select(
            DB::Raw("
            cms.posts.*,
            to_char(cms.posts.data, 'HH12:MI:SS') as hour,
            to_char(cms.posts.data, 'DD') as date,
            to_char(cms.posts.data, 'TMMonth') as month,
            to_char(cms.posts.data, 'YYYY') as year,
            cms.posts.titulo,
            cms.posts.resumida,
            cms.posts.descricao
        "))
            ->join('cms.categorias_posts', 'cms.categorias_posts.post_id', '=', 'cms.posts.id')
            ->join('cms.categorias', 'cms.categorias.id', '=', 'cms.categorias_posts.categoria_id')
            ->join('cms.midias', 'cms.midias.id', '=', 'cms.categorias.midia_id')
            ->when(count($categories) > 0, function($query) use ($categories){
                return $query->whereIn('cms.categorias_posts.categoria_id', $categories);
            })
            ->when(count($members) > 0, function($query) use ($members){
                return $query->whereIn('cms.posts.member_id', $members);
            })
            ->when(count($archives) > 0, function($query) use ($archives){
                return $query->whereIn(DB::Raw("to_char(cms.posts.data, 'YYYY-MM')"), $archives);
            })
            ->where('cms.posts.titulo', 'ilike', '%'.$search.'%')
            ->where('cms.midias.id', $request->midia_id)
            ->orderBy($columnsOby, $request->directionOrder)
            ->distinct('cms.posts.id')
            ->take($request->qtdItemsLoad)
            ->get();

        /*$result = \App\Models\Post::select(
                DB::Raw("
                cms.posts.*,
                to_char(cms.posts.data, 'HH12:MI:SS') as hour,
                to_char(cms.posts.data, 'DD') as date,
                to_char(cms.posts.data, 'TMMonth') as month,
                to_char(cms.posts.data, 'YYYY') as year,
                cms.posts.titulo,
                cms.posts.resumida,
                cms.posts.descricao
                ")
            )
            ->join('cms.categorias', 'cms.categorias.id', 'cms.posts.categoria_id')
            ->join('cms.midias', 'cms.midias.id', 'cms.categorias.midia_id')
            ->when(count($categories) > 0, function($query) use ($categories){
                return $query->whereIn('categoria_id', $categories);
            })
            ->when(count($members) > 0, function($query) use ($members){
                return $query->whereIn('member_id', $members);
            })
            ->when(count($archives) > 0, function($query) use ($archives){
                return $query->whereIn(DB::Raw("to_char(cms.posts.date, 'YYYY-MM')"), $archives);
            })
            ->where('cms.posts.titulo', 'ilike', '%'.$search.'%')
            ->where('cms.midias.id', $request->midia_id)
            ->orderby($columnsOby, $request->directionOrder)
            ->distinct('cms.posts.id')
            ->take($request->qtdItemsLoad)
            ->get();*/


        $ads['total'] = $total;
        $ads['data'] = $result;


        foreach($ads['data'] as $index => $ad){
            $categories = DB::table('cms.categorias')
                ->select('cms.categorias.*')
                ->join('cms.midias', 'cms.midias.id', 'cms.categorias.midia_id')
                ->where('cms.categorias.id', $ad->id)
                ->get();
            $ads['data'][$index]->categories = $categories;
        }

        //Log::info($ads);

        return $ads;
    }




}
