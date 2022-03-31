<?php

namespace App\Repository;

use App\Models\Politica;

class PoliticaRepository extends BaseRepository
{
    /**
     * @var Politica
     */
    protected $model;

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