<?php

namespace App\Repository;

use App\Models\Api\Orgao;
use Illuminate\Database\Eloquent\Collection;

class OrgaoRepository extends BaseRepository
{
    /**
     * @var Orgao
     */
    protected \Illuminate\Database\Eloquent\Model $model;

    /**
     * CuradorRepository constructor.
     *
     * @param Orgao $model
     */
    public function __construct(Orgao $model)
    {
        $this->model = $model;
    }

    public function allPaginate($search){
        return $this->model->where('nome', 'ilike', '%'.$search.'%')->orderBy("nome")->paginate(30);
    }

}
