<?php

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
