<?php

namespace App\Repository;

use App\Models\GrandeArea;

class GrandeAreaRepository extends BaseRepository
{
    /**
     * @var GrandeArea
     */
    protected $model;

    /**
     * CuradorRepository constructor.
     *
     * @param GrandeArea $model
     */
    public function __construct(GrandeArea $model)
    {
        $this->model = $model;
    }
}