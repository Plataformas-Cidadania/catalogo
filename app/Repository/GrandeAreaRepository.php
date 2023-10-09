<?php

namespace App\Repository;

use App\Models\Api\GrandeArea;

class GrandeAreaRepository extends BaseRepository
{
    /**
     * @var GrandeArea
     */
    protected \Illuminate\Database\Eloquent\Model $model;

    /**
     * CuradorRepository constructor.
     *
     * @param GrandeArea $model
     */
    public function __construct(GrandeArea $model)
    {
        $this->model = $model;
    }

    public function searchPaginate($search){
        return $this->model->where('nome', 'ilike', '%'.$search.'%')->orderBy("nome")->paginate(30);
    }
}
