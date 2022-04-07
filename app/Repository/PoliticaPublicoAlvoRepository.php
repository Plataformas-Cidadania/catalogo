<?php

namespace App\Repository;

use App\Models\Api\PoliticaPublicoAlvo;
use App\Models\Api\Politica;
use App\Models\Api\PublicoAlvo;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Log;

class PoliticaPublicoAlvoRepository extends BaseRepository
{
    /**
     * @var PoliticaPublicoAlvo
     */
    protected \Illuminate\Database\Eloquent\Model $model;

    /**
     * IndicadorRepository constructor.
     *
     * @param PoliticaPublicoAlvo $model
     */
    public function __construct(PoliticaPublicoAlvo $model)
    {
        $this->model = $model;
    }


    public function storeMany(int $politica_id, array $publicos_alvo)
    {
        $id = Politica::where('id', $politica_id)->get();
        if ($id->isEmpty()) throw new \Illuminate\Database\Eloquent\ModelNotFoundException;

        foreach ($publicos_alvo as $publico_alvo)
        {
            $data = [];
            $data['politica_id'] = $politica_id;
            $data['publico_alvo_id'] = $publico_alvo;
            $this->createCompositeId($data);
        }
        return $publicos_alvo;
    }

    public function getAllByIdPolitica($politica_id)
    {
        $res = PoliticaPublicoAlvo::where('politica_id', '=', $politica_id)->select('publico_alvo_id')
            ->get();
        if (!$res) throw new \Illuminate\Database\Eloquent\ModelNotFoundException;
        else return $res;
    }

    public function getAllNomeByIdPolitica($politica_id)
    {
        $publico_alvoPoliticas = PoliticaPublicoAlvo::with('publico_alvo')->where('politica_id', '=', $politica_id)->select('publico_alvo_id')
            ->get();
        if (!$publico_alvoPoliticas) throw new \Illuminate\Database\Eloquent\ModelNotFoundException;
        $nomePublicos_alvo = [];
        foreach($publico_alvoPoliticas as $publico_alvoPolitica)

            array_push($nomePublicos_alvo,$publico_alvoPolitica->publico_alvo->nome);

        return $nomePublicos_alvo;
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
        $res = PoliticaPublicoAlvo::where('politica_id', '=', $firstId)
            ->where('publico_alvo_id', '=', $secondId)
            ->first();
        if (!$res) throw new \Illuminate\Database\Eloquent\ModelNotFoundException;
        else {
            PoliticaPublicoAlvo::where('politica_id', '=', $firstId)->where('publico_alvo_id', '=', $secondId)->delete();
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
