<?php

namespace App\Repository;

use App\Models\Api\Politica;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Facades\DB;

class PoliticaRepository extends BaseRepository
{
    /**
     * @var Politica
     */
    protected \Illuminate\Database\Eloquent\Model $model;

    /**
     * CuradorRepository constructor.
     *
     * @param Politica $model
     */
    public function __construct(Politica $model)
    {
        $this->model = $model;
    }

    public function getAllTimeline()
    {
        $models = $this->model->with('area')->get();
        $arr = [];
        foreach ($models as $model) {
            $modelArr  = $model->toArray();
            $tmp['id'] = $modelArr['id'];
            $tmp['nome'] = $modelArr['nome'];
            $tmp['ano'] = $modelArr['ano'];
            $tmp['area'] = $modelArr['area']['nome'];
            $tmp['area_id'] = $modelArr['area']['id'];
            array_push($arr, $tmp);
        }
        return $arr;
    }

    public function getFrequenciaPoliticaPorTipo(){
        return DB::select("SELECT COUNT(tipo_politica) AS count_tipo_politica, tipo_politica.nome
        FROM catalogo.politica
        JOIN catalogo.tipo_politica ON tipo_politica = catalogo.tipo_politica.id
        GROUP BY tipo_politica.nome
        ORDER BY count_tipo_politica DESC;");
    }
    public function getSeriePoliticaAno(){
        return DB::select("SELECT
          COUNT(id) AS politicas_totais,
          EXTRACT(year FROM ano) AS year
        FROM catalogo.politica
        GROUP BY EXTRACT(year FROM ano) ORDER BY year;");
    }

    public function getFrequenciaPoliticaPorInstrumento(){
        return DB::select("SELECT COUNT(tipo_politica) AS count_tipo_politica, instrumento_legal,tipo_politica.nome
        FROM catalogo.politica
        JOIN catalogo.tipo_politica ON tipo_politica = catalogo.tipo_politica.id
        GROUP BY instrumento_legal,tipo_politica.nome
        ORDER BY instrumento_legal;");
    }

    public function getFrequenciaPoliticaPorPublicoAlvo(){
        return DB::select("SELECT  COUNT(politica_id) as count_politicas, publico_alvo.nome
        FROM catalogo.politica_publico_alvo
        INNER JOIN catalogo.politica ON politica_id = catalogo.politica.id
        INNER JOIN catalogo.publico_alvo on publico_alvo_id = catalogo.publico_alvo.id
        GROUP BY publico_alvo.nome
        ORDER BY count_politicas DESC;");
    }

    public function getFrequenciaPoliticaPorGrandeArea(){
        return DB::select("SELECT  COUNT(politica.id) as count_politicas, grande_area.nome
        FROM catalogo.politica
        INNER JOIN catalogo.grande_area ON grande_area.id = catalogo.politica.grande_area
        GROUP BY grande_area.nome
        ORDER BY count_politicas DESC;");
    }

    public function getFrequenciaPoliticaPorCategoria(){
        return DB::select("SELECT  COUNT(politica_id) as count_politicas, categoria.nome
        FROM catalogo.politica_categoria
        INNER JOIN catalogo.politica ON politica_id = catalogo.politica.id
        INNER JOIN catalogo.categoria on categoria_id = catalogo.categoria.id
        GROUP BY categoria.nome
        ORDER BY count_politicas DESC;");
    }

    public function buscaAvancada($data, $paginar = true)
    {

        $models = $this->model
            ->with('area')
            ->with('grande_area')
            ->with('politica_orgao')
            ->with('politica_categoria')
            ->with('politica_publico_alvo');

        if($data['politica']){
            $models->where('nome','ILIKE', '%'.$data['politica'].'%');
        }
        if($data['ano']){
                $startDate = Carbon::createFromFormat('Y', $data['ano']['inicio']);
                $endDate = Carbon::createFromFormat('Y', $data['ano']['fim']);
                $models->whereBetween('ano',[$startDate, $endDate]);
            }
        if($data['grande_area'])
            $models->whereIn('grande_area',$data['grande_area']);
        if($data['area'])
            $models->whereIn('area',$data['area'])->get();
        if($data['tipo_politica'])
            $models->whereIn('tipo_politica',$data['tipo_politica'])->get();
        if($data['publico_alvo'])
            $models->whereHas('politica_publico_alvo', function($q) use($data) {
                $q->whereIn('publico_alvo_id', $data['publico_alvo']);
         })->get();
         if($data['orgao'])
         $models->whereHas('politica_orgao', function($q) use($data) {
             $q->whereIn('orgao_id', $data['orgao']);
     })->get();

        if($data['categoria'])
            $models->whereHas('politica_categoria', function($q) use($data) {
                $q->whereIn('categoria_id', $data['categoria']);
        })->get();

        return $paginar ? $models->paginate(30) : $models->get();


        $arr = [];

        return $arr;
    }
    public function getTimelineArea($area_id)
    {
        $models = $this->model->with('area')->where('area','=',$area_id)->get();

        $arr = [];
        foreach ($models as $model) {
            $modelArr  = $model->toArray();
            $tmp['id'] = $modelArr['id'];
            $tmp['nome'] = $modelArr['nome'];
            $tmp['ano'] = $modelArr['ano'];
            array_push($arr, $tmp);
        }
        return $arr;
    }
}
