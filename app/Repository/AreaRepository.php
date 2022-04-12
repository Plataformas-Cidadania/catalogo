<?php

namespace App\Repository;

use App\Models\Api\Area;
use Illuminate\Database\Eloquent\Collection;

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
    public function all(array $columns = ['*'], array $relations = []): Collection
    {
        return $this->model->with($relations)->get($columns);
    }

}
