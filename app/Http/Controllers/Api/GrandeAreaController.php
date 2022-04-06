<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;

use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Database\Eloquent\RelationNotFoundException;
use Illuminate\Foundation\Mix;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Exception;
use App\Repository\GrandeAreaRepository;

class GrandeAreaController extends Controller
{
    private GrandeAreaRepository $repo;


    private $rules = [
        'id' => 'int|min:1',
        'nome' => 'string|min:1',
    ];

    public function __construct(GrandeAreaRepository $repo)
    {
        $this->repo = $repo;
    }

    /**
     * Mostrar todos.
     *
     * @param null
     *
     */

    public function getAll()
    {
        return $this->repo->all();
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
            return $this->repo->create($data);

        } catch (Exception $exception) {
            return $this->errorResponse('Erro inesperado.'.$exception);
        }
    }

    /**
     * Obter especificado pelo id'
     *
     * @param int $id
     *
     * @return \Illuminate\Database\Eloquent\Model
     */
    public function get($id)
    {
        try {
            return $this->repo->findById($id);
        }catch (Exception $exception) {
            if ($exception instanceof ModelNotFoundException)
                return $this->errorResponse('Not found');
            return $this->errorResponse($exception);
        }
    }

    /**
     * Atualizar especificado pelo id
     *
     * @param int $id
     * @param Request $request
     *
     * @return Mix
     */
    public function update($id, Request $request)
    {

        try {
            $validator = $this->getValidator($request);
            if ($validator->fails()) {
                return $this->errorResponse($validator->errors()->all());
            }
            $data = $this->getData($request);
            return $this->repo->update($id,$data);
        } catch (Exception $exception) {
            if ($exception instanceof ModelNotFoundException)
                return $this->errorResponse('Not found');
            return $this->errorResponse('Erro inesperado.'.$exception->getMessage());
        }
    }

    /**
     * Remover da base de dados especificado pelo id
     *
     * @param int $id
     *
     * @return Mix
     */
    public function destroy($id)
    {
        try {
            return $this->repo->deleteById($id);
        } catch (Exception $exception) {
            if ($exception instanceof ModelNotFoundException)
                return $this->errorResponse('Not found');
            return $this->errorResponse('Erro inesperado'.$exception);
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
