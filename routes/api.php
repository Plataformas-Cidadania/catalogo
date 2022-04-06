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

     Route::get('/{politica}',[App\Http\Controllers\Api\PoliticaController::class, 'get'])
          ->name('api.politica.get');

     Route::post('/', [App\Http\Controllers\Api\PoliticaController::class, 'store'])
          ->name('api.politica.store');

     Route::put('/{politica}', [App\Http\Controllers\Api\PoliticaController::class, 'update'])
          ->name('api.politica.update');

     Route::delete('/{politica}',[App\Http\Controllers\Api\PoliticaController::class, 'destroy'])
          ->name('api.politica.destroy');

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

    Route::put('/{public_alvo}', [App\Http\Controllers\Api\PublicoAlvoController::class, 'update'])
        ->name('api.publico_alvo.update');

    Route::delete('/{public_alvo}',[App\Http\Controllers\Api\PublicoAlvoController::class, 'destroy'])
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
