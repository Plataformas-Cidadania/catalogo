<?php
namespace App\Http\Controllers\Front;
use Illuminate\Support\Facades\Log;
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

Route::get('/consulta', function () {
    return view('consulta.index');
});

Route::get('/test-consulta/{search}', function ($search) {
    $items = [
        ['id' => 1, 'titulo' => 'Macaco'],
        ['id' => 2, 'titulo' => 'Mico'],
        ['id' => 3, 'titulo' => 'Leão'],
        ['id' => 4, 'titulo' => 'Mico-leão-dourado'],
        ['id' => 5, 'titulo' => 'Macaco Prego'],
        ['id' => 6, 'titulo' => 'Cachorro'],
        ['id' => 7, 'titulo' => 'Gato'],
        ['id' => 8, 'titulo' => 'Peixe'],
        ['id' => 9, 'titulo' => 'Peixe Gato'],
        ['id' => 10, 'titulo' => 'Lobo']
    ];

    Log::info($search);

    $result = [];
    foreach($items as $key => $value){
        Log::info($value['titulo']);
        if(str_contains(strtolower($value['titulo']), strtolower($search))){
            $result[] = $value;
        }
    }

    Log::info($result);

    return $result;
});


Route::get('posts/{midia}', [PostController::class , 'post']);
Route::get('posts/{midia_id}/{midia}', [PostController::class , 'post']);
Route::get('post/{id}/{titulo}', [PostController::class , 'details']);

Route::post('/list-posts', [PostController::class , 'getList']);
Route::post('/categories', [PostController::class , 'categories']);
Route::post('/members', [PostController::class , 'members']);
Route::post('/archives', [PostController::class , 'archives']);


Route::get('/areas-tematicas', [AreaController::class , 'listar']);
Route::get('/area-tematica/{id}/{titulo}', [AreaController::class , 'detalhar']);
Route::get('/politica/{id}/{titulo}', [AreaController::class , 'politica']);
