<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;

use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Database\Eloquent\RelationNotFoundException;
use Illuminate\Foundation\Mix;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
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




    public function getFrequenciaPoliticaPorTipo()
    {
        $result = $this->repo->getFrequenciaPoliticaPorTipo();
        $countPolitica = array_column($result, 'count_tipo_politica');
        $tot = array_sum($countPolitica);

        $frequenciaPolitica = array_map(function ($a) use (&$tot) { return ($a/$tot)*100;},$countPolitica);

        $response = json_decode('{
                "id": 1,
                "tipo": "mix",
                "titulo": "Frequência absoluta e relativa de políticas segundo tipo da política",
                "fonte": "Catálogo de Políticas Públicas (Ipea).",
                "series": [{
                    "name": "Nº",
                    "type": "column",
                    "data": []
                }, {
                    "name": "%",
                    "type": "column",
                    "data": []
                }],
                "labels": [["Programa", "governamental"], ["Política", "nacional"], "Plano", "Projeto", "Estratégia", "Diretrizes"]
            }',true);
        $labels = array_column($result, 'nome');
        $labels = array_map(function ($a){ return preg_split('/\s+/', $a);},$labels);
        $response["series"][0]["data"] = $countPolitica;
        $response["series"][1]["data"] = $frequenciaPolitica;
        $response["labels"] = $labels;

        return  $response;
    }

    public function getSeriePoliticaAno()
    {
        $result = $this->repo->getSeriePoliticaAno();
        $response = json_decode('{
            "id": 2,
            "tipo": "mix",
            "titulo": "Frequência de políticas segundo ano",
            "fonte": "Catálogo de Políticas Públicas (Ipea).",
            "series": [{
                "name": "Ano",
                "type": "line",
                "data": []
            }],
            "labels": []
            }',true);

        $response["labels"] = array_column($result, 'year');
        $response["series"][0]["data"]  = array_column($result, 'politicas_totais');

        return  $response;
    }

    public function getFrequenciaPoliticaPorInstrumento()
    {
        $result = $this->repo->getFrequenciaPoliticaPorInstrumento();
        $response = json_decode('{
                "id": 3,
                "tipo": "stacked",
                "titulo": "Frequência de políticas por instrumento legal, segundo tipo de política",
                "fonte": "Catálogo de Políticas Públicas (Ipea).",
                "series": [{
                    "name": "Decreto",
                    "data": []
                }, {
                    "name": "Lei ordinária",
                    "data": []
                }, {
                    "name": "Portaria",
                    "data": []
                }, {
                    "name": "Decreto-Lei",
                    "data": []
                }, {
                    "name": "Resolução",
                    "data": []
                }, {
                    "name": "Lei Complementar",
                    "data": []
                }, {
                    "name": "Instrução Normativa",
                    "data": []
                }, {
                    "name": "Medida Provisória",
                    "data": []
                }, {
                    "name": "Projeto de Lei",
                    "data": []
                }, {
                    "name": "Norma de execução",
                    "data": []
                }, {
                    "name": "Norma operacional",
                    "data": []
                }, {
                    "name": "Não se aplica",
                    "data": []
                }],
                "labels": ["Diretrizes", "Estratégia", "Plano", ["Política", "nacional"], ["Programa", "governamental"], "Projeto"]
            }',true);
        // associar instrumentos legais
        foreach ($response['series'] as $k=>$v){
            $labels = ["Diretrizes", "Estratégia", "Plano", "Política nacional", "Programa governamental", "Projeto"];
            $mask = [0,0,0,0,0,0];
            foreach ($result as $res){
                // decide em que tipo de politica vai colocar
                if($res->instrumento_legal == $v["name"]){
                    $idx = array_search($res->nome,$labels);
                    if($idx === false)
                        continue;
                    $mask[$idx] = $res->count_tipo_politica;
                }
                $response['series'][$k]["data"] = $mask;
            }

        }
        return  $response;
    }

    function mergeKeysArray($arr){
        Log::info($arr);
        $arr['Minorias sociais (negros, mulheres, comunidade LGBTQIA+, pessoas com deficiência, Crianças e Idosos)'] = $arr['Crianças e Idosos'] + $arr['Minorias sociais (negros, mulheres, comunidade LGBTQIA+ e pessoas com deficiência)'];
        foreach($arr as $k => $v){
            if($v <= 11){
                unset($arr[$k]);
                $arr['Outros'] += $v;
            }
        }
        arsort($arr,0);
        $temp = $arr['Outros'];
        unset($arr['Outros']);
        $arr['Outros'] = $temp;
        return $arr;
    }
    public function getFrequenciaPoliticaPorPublicoAlvo()
    {
        $result = $this->repo->getFrequenciaPoliticaPorPublicoAlvo();
        $response = json_decode(' {
            "id": 4,
            "tipo": "pie",
            "titulo": "Frequência absoluta e relativa de políticas segundo público alvo",
            "fonte": "Catálogo de Políticas Públicas (Ipea)",
            "series": [],
            "labels": []
        }',true);

        $combinedRes = array_combine(array_column($result, 'nome'), array_column($result, 'count_politicas'));
        $combinedRes = $this->mergeKeysArray($combinedRes);
        $response["series"] = array_values($combinedRes);
        $response["labels"]  = array_keys($combinedRes);

        return  $response;
    }

    public function getFrequenciaPoliticaPorGrandeArea()
    {
        $result = $this->repo->getFrequenciaPoliticaPorGrandeArea();
        $response = json_decode(' {
            "id": 5,
            "tipo": "pie",
            "titulo": "Frequência absoluta e relativa de políticas segundo Grande Área",
            "fonte": "Catálogo de Políticas Públicas (Ipea)",
            "series": [],
            "labels": []
        }',true);

        $response["series"] = array_column($result, 'count_politicas');
        $response["labels"]  = array_column($result, 'nome');

        return  $response;
    }

    public function getFrequenciaPoliticaPorCategoria()
    {
        $result = $this->repo->getFrequenciaPoliticaPorCategoria();
        $response = json_decode(' {
            "id": 6,
            "tipo": "pie",
            "titulo": "Frequência absoluta e relativa de políticas segundo a Área",
            "fonte": "Catálogo de Políticas Públicas (Ipea)",
            "series": [],
            "labels": []
        }',true);

        $response["series"] = array_column($result, 'count_politicas');
        $response["labels"]  = array_column($result, 'nome');

        return  $response;
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
    public function buscaAvancada(Request $request, $paginar = true)
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

            return $this->repo->buscaAvancada($data, $paginar);

        } catch (Exception $exception) {
            return $this->errorResponse('Erro inesperado.'.$exception);
        }
    }
    /**
     * Exporta a busca avançada
     *
     * @param Request $request
     *
     * @return Mix
     */
    public function exportarBuscaAvancada(Request $request)
    {
        $politicas = $this->buscaAvancada($request, false);

        $politicas = json_encode($politicas);
        $politicas = json_decode($politicas);

        $separador = ";";

        if ( count($politicas) > 0 ) {
            $fp = fopen('php://output', 'w');
            fputcsv($fp, ["politica","grande_area","area","subareas","ano","vigencia_inicio"], $separador);

            foreach ($politicas as $politica):
                $subareas = "";
                foreach ($politica->politica_categoria as $key => $item) {
                    if($key > 0){
                        $subareas .= " - ";
                    }
                    $subareas .= $item->categoria->nome;
                }
                fputcsv($fp, [
                    $politica->nome,
                    $politica->grande_area->nome,
                    $politica->area->nome,
                    $subareas, substr($politica->ano, 0, 4),
                    $politica->vigencia_inicio
                ], $separador);
            endforeach;

            fclose($fp);
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
