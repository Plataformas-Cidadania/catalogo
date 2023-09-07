<?php

namespace App\Repository;

use App\Models\Api\TipoPolitica;

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
    public function searchPaginate($search){
        return $this->model->where('nome', 'ilike', '%'.$search.'%')->orderBy("nome")->paginate(30);
    }

}
