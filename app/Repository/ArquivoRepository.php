<?php

namespace App\Repository;

use App\Models\Api\Arquivo;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Facades\Storage;

class ArquivoRepository extends BaseRepository
{
    /**
     * @var Arquivo
     */
    protected \Illuminate\Database\Eloquent\Model $model;

    /**
     * CuradorRepository constructor.
     *
     * @param Arquivo $model
     */
    public function __construct(Arquivo $model)
    {
        $this->model = $model;
    }

}
