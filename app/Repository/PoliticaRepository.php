<?php

namespace App\Repository;

use App\Models\Api\Politica;
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
