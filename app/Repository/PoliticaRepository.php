<?php

namespace App\Repository;

use App\Models\Politica;

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
}
