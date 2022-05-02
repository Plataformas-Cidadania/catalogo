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

    public function __construct(ArquivoRepository $repo)
    {
        $this->repo = $repo;
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

            $request->validate([
                'imagem' => 'required|mimes:png,gif,jpg|max:2048',
                'arquivo' => 'required|mimes:pdf,xlx,csv,jpg,png|max:4048',
            ]);

            $fileNameArq = time().'_file.'.$request->arquivo->extension();
            $request->arquivo->move(public_path('uploads'), $fileNameArq);

            $fileNameImg = time().'_img.'.$request->imagem->extension();
            $request->imagem->move(public_path('uploads'), $fileNameImg);

            $data = [];
            $data["imagem"] = $fileNameImg;
            $data["caminho_arquivo"] = $fileNameArq;

            return $this->repo->create($data);

        } catch (Exception $exception) {
            return $this->errorResponse('Erro inesperado.'.$exception);
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
            $imgPath = public_path('uploads').'/'.$data->imagem;
            $filePath = public_path('uploads').'/'.$data->caminho_arquivo;
            File::delete( [$imgPath, $filePath]);
            return $this->repo->deleteById($id);
        } catch (Exception $exception) {
            if ($exception instanceof ModelNotFoundException)
                return $this->errorResponse('Not found');
            return $this->errorResponse('Erro inesperado'.$exception);
        }
    }






}
