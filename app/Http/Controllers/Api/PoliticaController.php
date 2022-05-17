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
use App\Repository\PoliticaRepository;

class PoliticaController extends Controller
{
    private PoliticaRepository $repo;


    private $rules = [
        'id' => 'int|min:1',
        'nome' => 'string|min:1',
        'ano' => 'string',
        'medida_provisoria' => 'string|min:1|nullable',
        'medida_provisoria_inicio_vigencia' => 'string|min:1|nullable',
        'legislacao' => 'string|nullable',
        'vigencia_inicio' => 'date|nullable',
        'vigencia_fim' => 'date|nullable',
        'objetivos' => 'string|nullable',
        'observacao' => 'string|nullable',
        'acao_orcamentaria_assoc' => 'string|nullable',
        'publico_alvo_legislacao' => 'string|nullable',
        'tipo_politica' => 'int|min:1|nullable',
        'grande_area' => 'int|min:1|nullable',
        'area' => 'int|min:1|nullable',
    ];

    public function __construct(PoliticaRepository $repo)
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
        $models =  $this->repo->all(relations: ['politica_orgao']);
        return $models;
    }

    public function getAllTimeline()
    {
        $models =  $this->repo->getAllTimeline();
        return $models;
    }

    public function getTimelineArea($area_id)
    {
        $models =  $this->repo->getTimelineArea($area_id);
        return $models;
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
            $model = $this->repo->findById($id,relations: ['politica_publico_alvo','politica_categoria']);
            
            $orgaoArray = [];
            foreach($model->politica_orgao as $rel)
                array_push($orgaoArray,$rel->orgao);
            $arr = $model->toArray();
            unset($arr['politica_orgao']);
            $arr['orgaos']= $orgaoArray;
            return $arr;
        }catch (Exception $exception) {
            if ($exception instanceof ModelNotFoundException)
                return $this->errorResponse('Not found');
            return $this->errorResponse($exception);
        }
    }


    /**
     * Faz uma busca avançada
     *
     * @param Request $request
     *
     * @return Mix
     */
    public function buscaAvancada(Request $request)
    {
        try {
            $validator = $this->getValidator($request);

            //$data = $this->getData($request);
            $data['politica'] = $request->get('politica');
            $data['ano'] = $request->get('ano');
            $data['grande_area'] = $request->get('grande_area');
            $data['area'] = $request->get('area');
            $data['categoria'] = $request->get('categoria');
            $data['orgao'] = $request->get('orgao');
            $data['tipo_politica'] = $request->get('tipo_politica');
            $data['publico_alvo'] = $request->get('publico_alvo');

            return $this->repo->buscaAvancada($data);

        } catch (Exception $exception) {
            return $this->errorResponse('Erro inesperado.'.$exception);
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
