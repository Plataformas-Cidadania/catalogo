<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;

use App\Repository\AreaRepository;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Database\Eloquent\RelationNotFoundException;
use Illuminate\Foundation\Mix;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Validator;
use Exception;
use App\Repository\ArquivoRepository;
use Imagick;

class ArquivoController extends Controller
{
    private ArquivoRepository $repo;

    private $rules =[
        'titulo' => 'string|min:1',
        'imagem' => 'nullable|mimes:png,gif,jpg|max:2048',
        'caminho_arquivo' => 'required|mimes:pdf,xlx,csv,jpg,png|max:10240',
        'politica_id' => 'required|int',
    ];

    public function __construct(ArquivoRepository $repo)
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
        return $this->repo->all(relations: ['politica']);
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
            return $this->repo->findById($id,relations: ['politica']);
        }catch (Exception $exception) {
            if ($exception instanceof ModelNotFoundException)
                return $this->errorResponse('Not found');
            return $this->errorResponse($exception);
        }
    }

    public function getArquivosPorPoliticaId($politica_id)
    {
        return $this->repo->getArquivosPorPoliticaId($politica_id);
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

            $arr = [];
            if(isset($data['imagem'])) $arr['pol_imagem'] = $data['imagem'];
            if(isset($data['caminho_arquivo'])) $arr['pol_arquivo'] = $data['caminho_arquivo'];

            $res = createFiles($arr,true);
            // mudando para o nome para o nome correto da tabela
            if(isset($data['caminho_arquivo'])) $res['caminho_arquivo'] = $res['pol_arquivo'];
            if(isset($data['imagem'])) $res['imagem'] = $res['pol_imagem'];

            unset($res['pol_arquivo'],$res['pol_imagem']);

            $data = array_merge($data,$res);


            return $this->repo->create($data);

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
            $updateRules =[
                'imagem' => 'required|mimes:png,gif,jpg|max:2048',
                'caminho_arquivo' => 'required|mimes:pdf,xlx,csv,jpg,png|max:4048',
                'politica_id' => 'int',
            ];
            $request->validate($updateRules);
            $data = $this->get($id);
            if( $data  instanceof \Illuminate\Database\Eloquent\Model){
                if(isset($request->imagem))
                    deleteFiles($data->imagem);
                if(isset($request->caminho_arquivo))
                    deleteFiles($data->caminho_arquivo);
            }

            // Criando novos
            $arr = [];

            if(isset($request->imagem)) $arr['pol_imagem'] = $request->imagem;
            if(isset($request->caminho_arquivo)) $arr['pol_arquivo'] = $request->caminho_arquivo;

            $res = createFiles($arr,true);

            // mudando para o nome para o nome correto da tabela
            if(isset($res['pol_imagem'])) $res['imagem'] = $res['pol_imagem'];
            if(isset($res['pol_arquivo'])) $res['caminho_arquivo'] = $res['pol_arquivo'];

            unset($res['pol_imagem'],$res['pol_arquivo']);

            return $this->repo->update($id,$res);
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
            $data = $this->get($id);

            if( $data  instanceof \Illuminate\Database\Eloquent\Model){
                deleteFiles($data->imagem,$data->caminho_arquivo);
            }
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
