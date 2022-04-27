<?php

namespace App\Repository;

use App\Models\Api\Politica;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Collection;

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

    public function buscaAvancada($data)
    {

        $models = $this->model
            ->with('area')
            ->with('grande_area')
            ->with('politica_orgao')
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
        return $models->paginate(30);


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
