<?php

namespace App\Repository;

use App\Models\Api\PublicoAlvo;

class PublicoAlvoRepository extends BaseRepository
{
    /**
     * @var Orgao
     */
    protected \Illuminate\Database\Eloquent\Model $model;

    /**
     * CuradorRepository constructor.
     *
     * @param PublicoAlvo $model
     */
    public function __construct(PublicoAlvo $model)
    {
        $this->model = $model;
    }

    public function searchPaginate($search){
        return $this->model->where('nome', 'ilike', '%'.$search.'%')->orderBy("nome")->paginate(30);
    }

}
