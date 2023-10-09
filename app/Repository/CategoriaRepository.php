<?php

namespace App\Repository;

use App\Models\Api\Categoria;

class CategoriaRepository extends BaseRepository
{
    /**
     * @var Categoria
     */
    protected \Illuminate\Database\Eloquent\Model $model;

    /**
     * CuradorRepository constructor.
     *
     * @param Categoria $model
     */
    public function __construct(Categoria $model)
    {
        $this->model = $model;
    }

    public function searchPaginate($search){
        return $this->model->where('nome', 'ilike', '%'.$search.'%')->orderBy("nome")->paginate(30);
    }

}
