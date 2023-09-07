<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;

use App\Repository\CategoriaRepository;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Database\Eloquent\RelationNotFoundException;
use Illuminate\Foundation\Mix;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Validator;
use Exception;
use App\Repository\AreaRepository;

class AreaController extends Controller
{
    private AreaRepository $repo;

    private $rules = [
        'id' => 'int|min:1',
        'nome' => 'string|min:1',
        'icone'=> 'mimes:png,gif,jpg|max:2048',
        'resumo'=> 'string|min:1',
        'descricao'=> 'string|min:1',
        'imagem' => 'mimes:png,gif,jpg|max:2048',
        'caminho_arquivo' => 'mimes:pdf,xlx,csv,jpg,png|max:4048', // maximo para php é 5mb
    ];


    public function __construct(AreaRepository $repo)
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
     * Mostrar pesquisados e paginado.
     *
     * @param null
     *
     */

    public function getSearchPaginate(Request $request)
    {
        return $this->repo->searchPaginate($request->search);
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
            if(isset($data['icone']))  $arr['area_icone'] = $data['icone'];
            if(isset($data['imagem'])) $arr['area_imagem'] = $data['imagem'];
            if(isset($data['caminho_arquivo'])) $arr['area_arquivo'] = $data['caminho_arquivo'];

            $res = createFiles($arr,true);
            // mudando para o nome para o nome correto da tabela

            if(isset($res['area_icone'])) $res['icone'] = $res['area_icone'];
            if(isset($res['area_imagem'])) $res['imagem'] = $res['area_imagem'];
            if(isset($res['area_arquivo'])) $res['caminho_arquivo'] = $res['area_arquivo'];

            unset($res['area_icone'],$res['area_imagem'],$res['area_arquivo']);

            $data = array_merge($data,$res);

            return $id = $this->repo->create($data);

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
            return $this->repo->findById($id,relations: ['politicas']);
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

            $data = $this->get($id);
            $reqData = $this->getData($request);

            // deletando arquivos antigos
            if( $data  instanceof \Illuminate\Database\Eloquent\Model){
                if(isset($request->icone))
                    deleteFiles($data->icone);
                if(isset($request->imagem))
                    deleteFiles($data->imagem);
                if(isset($request->caminho_arquivo))
                    deleteFiles($data->caminho_arquivo);
            }

            // Criando novos
            $arr = [];

            if(isset($request->icone))  $arr['area_icone'] = $request->icone;
            if(isset($request->imagem)) $arr['area_imagem'] = $request->imagem;
            if(isset($request->caminho_arquivo)) $arr['area_arquivo'] = $request->caminho_arquivo;

            $res = createFiles($arr,true);

            // mudando para o nome para o nome correto da tabela
            if(isset($res['area_icone'])) $res['icone'] = $res['area_icone'];
            if(isset($res['area_imagem'])) $res['imagem'] = $res['area_imagem'];
            if(isset($res['area_arquivo'])) $res['caminho_arquivo'] = $res['area_arquivo'];
            unset($res['area_icone'],$res['area_imagem'],$res['area_arquivo']);

            $reqData = array_merge($reqData,$res);

            return $this->repo->update($id,$reqData);
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
                if(isset($data->icone))
                    deleteFiles($data->icone);
                if(isset($data->imagem))
                    deleteFiles($data->imagem);
                if(isset($data->caminho_arquivo))
                    deleteFiles($data->caminho_arquivo);
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
