<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Database\Eloquent\RelationNotFoundException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Exception;
use App\Repository\PoliticaOrgaoRepository;

class PoliticaOrgaoController extends Controller
{
    private PoliticaOrgaoRepository $repo;
    private $rules = [
        'politica_id' => 'int|min:1',
        'orgao_id' => 'int|min:1',
    ];
    public function __construct(PoliticaOrgaoRepository $repo)
    {
        $this->repo = $repo;
    }

    /**
     * Mostrar todos.
     *
     * @return \Illuminate\Database\Eloquent\Collection
     */

    public function getAll()
    {
        return $this->repo->all();
    }
    /**
     * Obter especificado pelo id
     * @param int $politica_id
     *
     * @return Mix
     */
    public function getAllOrgaoPorIdPolitica($politica_id)
    {
        try {
            return  $this->repo->getAllByIdPolitica($politica_id);
        }catch (Exception $exception) {
            if ($exception instanceof ModelNotFoundException)
                return $this->errorResponse('Not found');
            return $this->errorResponse($exception);
        }
    }

    public function getAllNomeOrgaoPorIdPolitica($politica_id)
    {
        try {
            return $this->repo->getAllNomeByIdPolitica($politica_id);
        }catch (Exception $exception) {
            if ($exception instanceof ModelNotFoundException)
                return $this->errorResponse('Not found');
            return $this->errorResponse($exception);
        }
    }

    /**
     * Adicionar um novo
     *
     * @param Request $request
     *
     * @return
     */
    public function storeMany(Request $request)
    {
        try {
            $validator = $this->getValidator($request);

            if ($validator->fails()) {
                return $this->errorResponse($validator->errors()->all());
            }
            $politica_id = $request->get('politica_id');
            $orgaos = $request->get('orgaos');
            $orgaos = json_decode($orgaos);

            return $this->repo->storeMany($politica_id,$orgaos);

        } catch (Exception $exception) {
            if ($exception instanceof ModelNotFoundException)
                return $this->errorResponse('id Not found');
            return $this->errorResponse("erro inesperado ".$exception);
        }
    }

    public function simpleStoreMany(string $politica_id, array $orgaos)
    {
        try {
            return $this->repo->storeMany($politica_id,$orgaos);
        } catch (Exception $exception) {
            if ($exception instanceof ModelNotFoundException)
                return $this->errorResponse('id_diagnostico Not found');
            return $this->errorResponse("erro inesperado ".$exception);
        }
    }

    /**
     * Adicionar um novo
     *
     * @param Request $request
     *
     * @return Mix
     */
    public function store(Request $request)
    {
        try {
            $validator = $this->getValidator($request);

            if ($validator->fails()) {
                return $this->errorResponse($validator->errors()->all());
            }
            $data = $this->getData($request);
            $res = $this->repo->createCompositeId($data);

            return $res;
        } catch (Exception $exception) {
            ;
            if ($exception instanceof ModelNotFoundException)
                return $this->errorResponse('politica_id Not found');
            else
                return $this->errorResponse("erro inesperado ".$exception);
        }
    }


    /**
     * Remover da base de dados especificado pelo id
     *
     * @param int $firstId
     *
     * @param int $secondId
     *
     *
     * @return Mix
     */
    public function destroy($firstId,$secondId)
    {
        try {
            $res = $this->repo->deleteByCompositeId($firstId,$secondId);
            return $res;
        } catch (Exception $exception) {
            if ($exception instanceof ModelNotFoundException)
                return $this->errorResponse('Not found');
            return $this->errorResponse($exception);
        }
    }

    /**
     * Cria uma instancia de validador com as regras definidas
     *
     * @param Request $request
     *
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function getValidator(Request $request): \Illuminate\Contracts\Validation\Validator
    {
        return Validator::make($request->all(), $this->rules);
    }


    /**
     * Pegar e validar os dados da requisição
     *
     * @param Request $request
     * @return array
     */
    protected function getData(Request $request): array
    {
        return $request->validate($this->rules);
    }


}
