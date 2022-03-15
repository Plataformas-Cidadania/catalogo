<?php
namespace App\Http\Controllers\Front;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

/*Route::get('/', function () {
    return view('welcome');
});

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth'])->name('dashboard');

require __DIR__.'/auth.php';*/

Route::get('/api', function () {
    return ["description: API de dados do Projeto Inclua.",
        "version: 1.0.0",
        "homepage: https://inclua.ipea.gov.br/",
        "keywords: 'php', 'lumen', 'api', 'rest', 'server, 'http', 'json', 'mapaosc', 'ipea'",
        "license: LGPL-3.0",
        "authors: {Thiago Giannini Ramos, Fábio Barreto, Bruno Passos, Relison Galvão, Raphael Abreu}"
    ];
});

//GRUPO DE ROTAS QUE PASSARÃO PELA AUTENTICAÇÃO
Route::middleware(['auth'])->group(function () {

});

//DASH BOARD PADRÃO CRIADO PELO BREEZE
Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth'])->name('dashboard');

require __DIR__.'/auth.php';




/*
|-------------------------------------------------------------------------->
| FRONT
|-------------------------------------------------------------------------->
*/
Route::get('/', 'App\Http\Controllers\Front\HomeController@index');

Route::get('contato', 'App\Http\Controllers\Front\ContactController@email');
Route::post('contact', 'App\Http\Controllers\Front\ContactController@send');



Route::get('/esqueceu-senha', [ContribuaController::class , 'esqueceu']);



$routes = [
    ['Page', 'sobres', 'sobre'],
    ['Video', 'videos', 'video'],
];

//ROTAS PADRÕES
$routesSearch = [];

foreach ($routes as $route) {
    Route::get($route[1].'/', $route[0].'Controller@listing');
    Route::get($route[2].'/{id}/{titulo}', $route[0].'Controller@details');
}
foreach ($routesSearch as $route) {
    Route::get($route[1].'/{search}', $route[0].'Controller@listing');
}

if(env('DYNAMIC_ROUTES')){

    $modulos = \Illuminate\Support\Facades\DB::table('cms.modulos')->select('slug')->get();

    foreach ($modulos as $modulo) {
        if(!empty($modulo->slug)){
            //Route::get($modulo->slug.'/', 'App\Http\Controllers\Front\ModuloController@details');
            Route::get($modulo->slug.'/', [ModuloController::class , 'details']);
        }
    }
}

Route::get('/timeline', function () {
    return view('timeline.index');
});
