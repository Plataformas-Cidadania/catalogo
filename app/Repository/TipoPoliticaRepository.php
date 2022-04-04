<?php

namespace App\Repository;

use App\Models\TipoPolitica;

class TipoPoliticaRepository extends BaseRepository
{
    /**
     * @var TipoPolitica
     */
    protected \Illuminate\Database\Eloquent\Model $model;

    /**
     * CuradorRepository constructor.
     *
     * @param TipoPolitica $model
     */
    public function __construct(TipoPolitica $model)
    {
        $this->model = $model;
    }
}
