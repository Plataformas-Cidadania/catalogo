<?php

use App\Http\Controllers\Api\CategoriaController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group([
     'prefix' => 'categoria',
 ], function () {

     Route::get('/', [App\Http\Controllers\Api\CategoriaController::class, 'getAll'])
          ->name('api.categoria.getAll');

     Route::get('/{categoria}',[App\Http\Controllers\Api\CategoriaController::class, 'get'])
          ->name('api.categoria.get');

     Route::post('/', [App\Http\Controllers\Api\CategoriaController::class, 'store'])
          ->name('api.categoria.store');

     Route::put('/{categoria}', [App\Http\Controllers\Api\CategoriaController::class, 'update'])
          ->name('api.categoria.update');

     Route::delete('/{categoria}',[App\Http\Controllers\Api\CategoriaController::class, 'destroy'])
          ->name('api.categoria.destroy');

 });

Route::group([
     'prefix' => 'orgao',
 ], function () {

     Route::get('/', [App\Http\Controllers\Api\OrgaoController::class, 'getAll'])
          ->name('api.orgao.getAll');

     Route::get('/{orgao}',[App\Http\Controllers\Api\OrgaoController::class, 'get'])
          ->name('api.orgao.get');

     Route::post('/', [App\Http\Controllers\Api\OrgaoController::class, 'store'])
          ->name('api.orgao.store');

     Route::put('/{orgao}', [App\Http\Controllers\Api\OrgaoController::class, 'update'])
          ->name('api.orgao.update');

     Route::delete('/{orgao}',[App\Http\Controllers\Api\OrgaoController::class, 'destroy'])
          ->name('api.orgao.destroy');

 });


Route::group([
     'prefix' => 'area',
 ], function () {

     Route::get('/', [App\Http\Controllers\Api\AreaController::class, 'getAll'])
          ->name('api.area.getAll');

     Route::get('/{area}',[App\Http\Controllers\Api\AreaController::class, 'get'])
          ->name('api.area.get');

     Route::post('/', [App\Http\Controllers\Api\AreaController::class, 'store'])
          ->name('api.area.store');

     Route::put('/{area}', [App\Http\Controllers\Api\AreaController::class, 'update'])
          ->name('api.area.update');

     Route::delete('/{area}',[App\Http\Controllers\Api\AreaController::class, 'destroy'])
          ->name('api.area.destroy');

 });

 Route::group([
     'prefix' => 'grande_area',
 ], function () {

     Route::get('/', [App\Http\Controllers\Api\GrandeAreaController::class, 'getAll'])
          ->name('api.grande_area.getAll');

     Route::get('/{grande_area}',[App\Http\Controllers\Api\GrandeAreaController::class, 'get'])
          ->name('api.grande_area.get');

     Route::post('/', [App\Http\Controllers\Api\GrandeAreaController::class, 'store'])
          ->name('api.grande_area.store');

     Route::put('/{grande_area}', [App\Http\Controllers\Api\GrandeAreaController::class, 'update'])
          ->name('api.grande_area.update');

     Route::delete('/{grande_area}',[App\Http\Controllers\Api\GrandeAreaController::class, 'destroy'])
          ->name('api.grande_area.destroy');

 });

 Route::group([
     'prefix' => 'tipo_politica',
 ], function () {

     Route::get('/', [App\Http\Controllers\Api\TipoPoliticaController::class, 'getAll'])
          ->name('api.tipo_politica.getAll');

     Route::get('/{tipo_politica}',[App\Http\Controllers\Api\TipoPoliticaController::class, 'get'])
          ->name('api.tipo_politica.get');

     Route::post('/', [App\Http\Controllers\Api\TipoPoliticaController::class, 'store'])
          ->name('api.tipo_politica.store');

     Route::put('/{tipo_politica}', [App\Http\Controllers\Api\TipoPoliticaController::class, 'update'])
          ->name('api.tipo_politica.update');

     Route::delete('/{tipo_politica}',[App\Http\Controllers\Api\TipoPoliticaController::class, 'destroy'])
          ->name('api.tipo_politica.destroy');

 });

 Route::group([
     'prefix' => 'politica',
 ], function () {

     Route::get('/', [App\Http\Controllers\Api\PoliticaController::class, 'getAll'])
          ->name('api.politica.getAll');

     Route::get('/timeline', [App\Http\Controllers\Api\PoliticaController::class, 'getAllTimeline'])
         ->name('api.politica.getAllTimeline');

     Route::get('/timeline/{area_id}', [App\Http\Controllers\Api\PoliticaController::class, 'getTimelineArea'])
         ->name('api.politica.getTimelineArea');

     Route::get('/{politica}',[App\Http\Controllers\Api\PoliticaController::class, 'get'])
          ->name('api.politica.get');

     Route::post('/', [App\Http\Controllers\Api\PoliticaController::class, 'store'])
          ->name('api.politica.store');

     Route::put('/{politica}', [App\Http\Controllers\Api\PoliticaController::class, 'update'])
          ->name('api.politica.update');

     Route::delete('/{politica}',[App\Http\Controllers\Api\PoliticaController::class, 'destroy'])
          ->name('api.politica.destroy');

     Route::get('area/{id_area}',[App\Http\Controllers\Api\PoliticaController::class, 'get'])
         ->name('api.politica.get');

     Route::post('/buscaAvancada', [App\Http\Controllers\Api\PoliticaController::class, 'buscaAvancada'])
         ->name('api.politica.buscaAvancada');

     Route::post('/exportarBuscaAvancada', [App\Http\Controllers\Api\PoliticaController::class, 'exportarBuscaAvancada'])
         ->name('api.politica.exportarBuscaAvancada');


 });


Route::group([
    'prefix' => 'metricas',
], function () {

    Route::get('/politicas_por_ano', [App\Http\Controllers\Api\PoliticaController::class, 'getSeriePoliticaAno'])
        ->name('api.politica.getSeriePoliticaAno');

    Route::get('/frequencia_politica_por_instrumento', [App\Http\Controllers\Api\PoliticaController::class, 'getFrequenciaPoliticaPorInstrumento'])
        ->name('api.politica.getFrequenciaPoliticaPorInstrumento');

    Route::get('/frequencia_politica_por_tipo', [App\Http\Controllers\Api\PoliticaController::class, 'getFrequenciaPoliticaPorTipo'])
        ->name('api.politica.getFrequenciaPoliticaPorTipo');
    Route::get('/frequencia_politica_por_publico_alvo', [App\Http\Controllers\Api\PoliticaController::class, 'getFrequenciaPoliticaPorPublicoAlvo'])
        ->name('api.politica.getFrequenciaPoliticaPorPublicoAlvo');
    Route::get('/frequencia_politica_por_grande_area', [App\Http\Controllers\Api\PoliticaController::class, 'getFrequenciaPoliticaPorGrandeArea'])
        ->name('api.politica.getFrequenciaPoliticaPorGrandeArea');
    Route::get('/frequencia_politica_por_area', [App\Http\Controllers\Api\PoliticaController::class, 'getFrequenciaPoliticaPorCategoria'])
        ->name('api.politica.getFrequenciaPoliticaPorCategoria');


});



Route::group([
    'prefix' => 'publico_alvo',
], function () {

    Route::get('/', [App\Http\Controllers\Api\PublicoAlvoController::class, 'getAll'])
        ->name('api.publico_alvo.getAll');

    Route::get('/{public_alvo}',[App\Http\Controllers\Api\PublicoAlvoController::class, 'get'])
        ->name('api.publico_alvo.get');

    Route::post('/', [App\Http\Controllers\Api\PublicoAlvoController::class, 'store'])
        ->name('api.publico_alvo.store');

    Route::put('/{publico_alvo}', [App\Http\Controllers\Api\PublicoAlvoController::class, 'update'])
        ->name('api.publico_alvo.update');

    Route::delete('/{publico_alvo}',[App\Http\Controllers\Api\PublicoAlvoController::class, 'destroy'])
        ->name('api.publico_alvo.destroy');

});



Route::group([
    'prefix' => 'politica_categoria',
], function () {
    Route::get('/',[App\Http\Controllers\Api\PoliticaCategoriaController::class, 'getAll'])
        ->name('api.politica_categoria.getAll');

    Route::get('/{id_politica}',[App\Http\Controllers\Api\PoliticaCategoriaController::class, 'getAllCategoriaPorIdPolitica'])
        ->name('api.politica_categoria.getAllCategoriaPorIdPolitica');

    Route::get('nomes/{politica_categoria}',[App\Http\Controllers\Api\PoliticaCategoriaController::class, 'getAllNomeCategoriaPorIdPolitica'])
        ->name('api.politica_categoria.getAllNomeCategoriaPorIdPolitica');

    Route::post('/', [App\Http\Controllers\Api\PoliticaCategoriaController::class, 'store'])
        ->name('api.politica_categoria.store');

    Route::post('/storeMany/', [App\Http\Controllers\Api\PoliticaCategoriaController::class, 'storeMany'])
        ->name('api.politica_categoria.storeMany');

    Route::delete('/{id_politica}/{id_categoria}',[App\Http\Controllers\Api\PoliticaCategoriaController::class, 'destroy'])
        ->name('api.politica_categoria.destroy');

});

Route::group([
    'prefix' => 'politica_orgao',
], function () {
    Route::get('/',[App\Http\Controllers\Api\PoliticaOrgaoController::class, 'getAll'])
        ->name('api.politica_orgao.getAll');

    Route::get('/{id_politica}',[App\Http\Controllers\Api\PoliticaOrgaoController::class, 'getAllOrgaoPorIdPolitica'])
        ->name('api.politica_orgao.getAllOrgaoPorIdPolitica');

    Route::get('nomes/{politica_orgao}',[App\Http\Controllers\Api\PoliticaOrgaoController::class, 'getAllNomeOrgaoPorIdPolitica'])
        ->name('api.politica_orgao.getAllNomeOrgaoPorIdPolitica');

    Route::post('/', [App\Http\Controllers\Api\PoliticaOrgaoController::class, 'store'])
        ->name('api.politica_orgao.store');

    Route::post('/storeMany/', [App\Http\Controllers\Api\PoliticaOrgaoController::class, 'storeMany'])
        ->name('api.politica_orgao.storeMany');

    Route::delete('/{id_politica}/{id_orgao}',[App\Http\Controllers\Api\PoliticaOrgaoController::class, 'destroy'])
        ->name('api.politica_orgao.destroy');
});

Route::group([
    'prefix' => 'politica_publico_alvo',
], function () {
    Route::get('/',[App\Http\Controllers\Api\PoliticaPublicoAlvoController::class, 'getAll'])
        ->name('api.politica_publico_alvo.getAll');

    Route::get('/{id_politica}',[App\Http\Controllers\Api\PoliticaPublicoAlvoController::class, 'getAllPublicoAlvoPorIdPolitica'])
        ->name('api.politica_publico_alvo.getAllPublicoAlvoPorIdPolitica');

    Route::get('nomes/{politica_categoria}',[App\Http\Controllers\Api\PoliticaPublicoAlvoController::class, 'getAllNomePublicoAlvoPorIdPolitica'])
        ->name('api.politica_publico_alvo.getAllNomePublicoAlvoPorIdPolitica');

    Route::post('/', [App\Http\Controllers\Api\PoliticaPublicoAlvoController::class, 'store'])
        ->name('api.politica_publico_alvo.store');

    Route::post('/storeMany/', [App\Http\Controllers\Api\PoliticaPublicoAlvoController::class, 'storeMany'])
        ->name('api.politica_publico_alvo.storeMany');

    Route::delete('/{id_politica}/{id_categoria}',[App\Http\Controllers\Api\PoliticaPublicoAlvoController::class, 'destroy'])
        ->name('api.politica_publico_alvo.destroy');
});

Route::group([
    'prefix' => 'arquivo',
], function () {

    Route::get('/', [App\Http\Controllers\Api\ArquivoController::class, 'getAll'])
        ->name('api.arquivo.getAll');
    Route::get('/{id}', [App\Http\Controllers\Api\ArquivoController::class, 'get'])
        ->name('api.arquivo.get');
    Route::get('/politica/{politica_id}', [App\Http\Controllers\Api\ArquivoController::class, 'getArquivosPorPoliticaId'])
        ->name('api.arquivo.getArquivosPorPoliticaId');
    Route::post('/', [App\Http\Controllers\Api\ArquivoController::class, 'store'])
        ->name('api.arquivo.store');
    Route::put('/{id}', [App\Http\Controllers\Api\ArquivoController::class, 'update'])
        ->name('api.arquivo.update');
    Route::delete('/{id}', [App\Http\Controllers\Api\ArquivoController::class, 'destroy'])
        ->name('api.arquivo.destroy');

});

