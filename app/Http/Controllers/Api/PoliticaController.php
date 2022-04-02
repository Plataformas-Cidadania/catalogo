<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Api\Controller;

use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Database\Eloquent\RelationNotFoundException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Exception;
use App\Models\Politica;
use App\Repository\PoliticaRepository;

class PoliticaController extends Controller
{
    private PoliticaRepository $repo;

;
    private $rules = [
        'id' => 'int|min:1',
        'nome' => 'string|min:1',
        'ano' => 'int|min:1',
        'medida_provisoria' => 'string|min:1|nullable',
        'medida_provisoria_inicio_vigencia' => 'string|min:1|nullable',
        'legislacao' => 'string|nullable',
        'vigencia_inicio' => 'date|nullable',
        'vigencia_fim' => 'date|nullable',
        'objetivos' => 'string|nullable',
        'observacao' => 'string|nullable',
        'acao_orcamentaria_assoc' => 'string|nullable',
        'publico_alvo_categ' => 'string|nullable',
        'tipo_politica' => 'int|min:1|nullable',
        'grande_area' => 'int|min:1|nullable',
        'area' => 'int|min:1|nullable',
    ];

    public function __construct(PoliticaController $repo)
    {
        $this->repo = $repo;
    }

    /**
     * Mostrar todos.
     *
     * @param null
     *
     * @return JsonResponse
     */

    public function getAll(): JsonResponse
    {
        $res = $this->repo->all();
        return $this->successResponse(
            'Politicas retornadas com sucesso',
            $res
        );
    }

    /**
     * Adicionar um novo
     *
     * @param Request $request
     *
     * @return JsonResponse
     */
    public function store(Request $request): JsonResponse
    {
        try {
            $validator = $this->getValidator($request);

            if ($validator->fails()) {
                return $this->errorResponse($validator->errors()->all());
            }

            $data = $this->getData($request);
            $res = $this->repo->create($data);
            return $this->successResponse(
			    'Politica '.$res->id.' foi adicionado',
			    $this->transform($res)
			);
        } catch (Exception $exception) {
            return $this->errorResponse('Erro inesperado.'.$exception);
        }
    }

    /**
     * Obter especificado pelo id
     *
     * @param int $id
     *
     * @return JsonResponse
     */
    public function get($id): JsonResponse
    {
        try {
            $res = $this->repo->findById($id);
            return $this->successResponse(
                'Retornado com sucesso',
                $res
            );
        }catch (Exception $exception) {
            if ($exception instanceof ModelNotFoundException)
                return $this->errorResponse('Not found');
            return $this->errorResponse('Erro inesperado.'.$exception);
        }
    }

    /**
     * Atualizar especificado pelo id
     *
     * @param int $id
     * @param Request $request
     *
     * @return JsonResponse
     */
    public function update($id, Request $request): JsonResponse
    {

        try {
            $validator = $this->getValidator($request);

            if ($validator->fails()) {
                return $this->errorResponse($validator->errors()->all());
            }

            $data = $this->getData($request);

            $res = $this->repo->update($id,$data);

            return $this->successResponse(
			    'Atualizado com sucesso.',
			    $this->transform($res)
			);
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
     * @return JsonResponse
     */
    public function destroy($id): JsonResponse
    {
        try {
            $res = $this->repo->deleteById($id);

            return $this->successResponse(
			    ''.$id.' deletado com sucesso',
			    $this->transform($res)
			);
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

    /**
     * Transformar em um array
     *
     * @param Politica $model
     *
     * @return array
     */

    protected function transform(Politica $model): array
    {
        return [
            'id' => $model->id,
            'nome' => $model->nome,
            'ano' => $model->ano,
            'medida_provisoria' => $model->medida_provisoria,
            'medida_provisoria_inicio_vigencia' => $model->medida_provisoria_inicio_vigencia,
            'legislacao' => $model->legislacao,
            'vigencia_inicio' => $model->vigencia_inicio,
            'vigencia_fim' => $model->vigencia_fim,
            'objetivos' => $model->objetivos,
            'observacao' => $model->observacao,
            'acao_orcamentaria_assoc' => $model->acao_orcamentaria_assoc,
            'publico_alvo_categ' => $model->publico_alvo_categ,
            'tipo_politica' => $model->tipo_politica,
            'grande_area' => $model->grande_area,
            'area' => $model->area,
        ];
    }


}
