<?php

namespace App\Repository;

use App\Models\Area;

class AreaRepository extends BaseRepository
{
    /**
     * @var Area
     */
    protected \Illuminate\Database\Eloquent\Model $model;

    /**
     * CuradorRepository constructor.
     *
     * @param Area $model
     */
    public function __construct(Area $model)
    {
        $this->model = $model;
    }
}
