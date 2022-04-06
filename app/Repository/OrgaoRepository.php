<?php

namespace App\Repository;

use App\Models\Api\Orgao;

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
}
