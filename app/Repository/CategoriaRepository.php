<?php

namespace App\Repository;

use App\Models\CategoriaPolitica;

class CategoriaRepository extends BaseRepository
{
    /**
     * @var CategoriaPolitica
     */
    protected \Illuminate\Database\Eloquent\Model $model;

    /**
     * CuradorRepository constructor.
     *
     * @param CategoriaPolitica $model
     */
    public function __construct(CategoriaPolitica $model)
    {
        $this->model = $model;
    }
}
