<?php

namespace App\Repository;

use App\Models\Api\PoliticaOrgao;
use App\Models\Api\Politica;
use App\Models\Api\Orgao;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Log;

class PoliticaOrgaoRepository extends BaseRepository
{
    /**
     * @var PoliticaOrgao
     */
    protected \Illuminate\Database\Eloquent\Model $model;

    /**
     * IndicadorRepository constructor.
     *
     * @param PoliticaOrgao $model
     */
    public function __construct(PoliticaOrgao $model)
    {
        $this->model = $model;
    }

    public function storeMany(int $politica_id, array $orgaos)
    {
        $id = Politica::where('id', $politica_id)->get();
        if ($id->isEmpty()) throw new \Illuminate\Database\Eloquent\ModelNotFoundException;

        foreach ($orgaos as $orgao)
        {
            $data = [];
            $data['politica_id'] = $politica_id;
            $data['orgao_id'] = $orgao;
            $this->createCompositeId($data);
        }
        return $orgaos;
    }

    public function getAllByIdPolitica($politica_id)
    {
        $res = PoliticaOrgao::where('politica_id', '=', $politica_id)->select('orgao_id')
            ->get();
        if (!$res) throw new \Illuminate\Database\Eloquent\ModelNotFoundException;
        else return $res;
    }

    public function getAllNomeByIdPolitica($politica_id)
    {
        $orgaoPoliticas = PoliticaOrgao::with('orgao')->where('politica_id', '=', $politica_id)->select('orgao_id')
            ->get();
        if (!$orgaoPoliticas) throw new \Illuminate\Database\Eloquent\ModelNotFoundException;
        $nomeOrgaos = [];
        foreach($orgaoPoliticas as $orgaoPolitica)

            array_push($nomeOrgaos,$orgaoPolitica->orgao->nome);

        return $nomeOrgaos;
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
        $res = PoliticaOrgao::where('politica_id', '=', $firstId)
            ->where('orgao_id', '=', $secondId)
            ->first();
        if (!$res) throw new \Illuminate\Database\Eloquent\ModelNotFoundException;
        else {
            PoliticaOrgao::where('politica_id', '=', $firstId)->where('orgao_id', '=', $secondId)->delete();
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
