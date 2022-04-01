<?php

namespace App\Repository;

use App\Models\Categoria;

class CategoriaRepository extends BaseRepository
{
    /**
     * @var Categoria
     */
    protected $model;

    /**
     * CuradorRepository constructor.
     *
     * @param Categoria $model
     */
    public function __construct(Categoria $model)
    {
        $this->model = $model;
    }
}