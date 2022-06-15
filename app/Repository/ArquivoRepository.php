<?php

namespace App\Repository;

use App\Models\Api\Arquivo;
use App\Models\Api\Politica;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Facades\Storage;

class ArquivoRepository extends BaseRepository
{
    /**
     * @var Arquivo
     */
    protected \Illuminate\Database\Eloquent\Model $model;

    /**
     * CuradorRepository constructor.
     *
     * @param Arquivo $model
     */
    public function __construct(Arquivo $model)
    {
        $this->model = $model;
    }

    public function getArquivosPorPoliticaId($politica_id)
    {
        $models = $this->model->where('politica_id','=', $politica_id)->get();
        return $models;
    }

}
