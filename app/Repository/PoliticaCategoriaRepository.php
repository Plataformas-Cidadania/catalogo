<?php

namespace App\Repository;

use App\Models\Api\PoliticaCategoria;
use App\Models\Api\Politica;
use App\Models\Api\Categoria;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Log;

class PoliticaCategoriaRepository extends BaseRepository
{
    /**
     * @var PoliticaCategoria
     */
    protected \Illuminate\Database\Eloquent\Model $model;

    /**
     * IndicadorRepository constructor.
     *
     * @param PoliticaCategoria $model
     */
    public function __construct(PoliticaCategoria $model)
    {
        $this->model = $model;
    }


    public function storeMany(int $politica_id, array $categorias)
    {
        $diagId = Politica::where('id', $politica_id)->get();
        if ($diagId->isEmpty()) throw new \Illuminate\Database\Eloquent\ModelNotFoundException;

        foreach ($categorias as $categoria)
        {
            $data = [];
            $data['politica_id'] = $politica_id;
            $data['categoria_id'] = $categoria;
            $this->createCompositeId($data);
        }
        return $categorias;
    }

    public function getAllByIdPolitica($politica_id)
    {
        $res = PoliticaCategoria::where('politica_id', '=', $politica_id)->select('categoria_id')
            ->get();
        if (!$res) throw new \Illuminate\Database\Eloquent\ModelNotFoundException;
        else return $res;
    }

    public function getAllNomeByIdPolitica($politica_id)
    {
        $categPoliticas = PoliticaCategoria::with('categoria')->where('politica_id', '=', $politica_id)->select('categoria_id')
            ->get();
        if (!$categPoliticas) throw new \Illuminate\Database\Eloquent\ModelNotFoundException;
        $nomeCategorias = [];
        foreach($categPoliticas as $categPolitica)

            array_push($nomeCategorias,$categPolitica->categoria->nome);

        return $nomeCategorias;
    }

    /**
     * Remove um modelo por um ID composto.
     *
     * @param int $firstId
     * @param int $secondId
     * @return Model
     */
    public function deleteByCompositeId(int $firstId,int $secondId): Model
    {
        $res = PoliticaCategoria::where('politica_id', '=', $firstId)
            ->where('categoria_id', '=', $secondId)
            ->first();
        if (!$res) throw new \Illuminate\Database\Eloquent\ModelNotFoundException;
        else {
            PoliticaCategoria::where('politica_id', '=', $firstId)->where('categoria_id', '=', $secondId)->delete();
            return $res;
        }
    }

    /**
     * Create a model with composite Id.
     *
     * @param array $payload
     * @return Model
     */
    public function createCompositeId(array $payload): Model
    {
        return $this->model->create($payload);
    }
}
