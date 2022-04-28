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



Route::get('/test-consulta/{search}', function ($search) {
    $items = [
        ['id' => 1, 'titulo' => 'Item 1'],
        ['id' => 2, 'titulo' => 'Item 2'],
        ['id' => 3, 'titulo' => 'Item 3'],
        ['id' => 4, 'titulo' => 'Item 4'],
        ['id' => 5, 'titulo' => 'Item 5'],
        ['id' => 6, 'titulo' => 'Item 6'],
        ['id' => 7, 'titulo' => 'Item 7'],
        ['id' => 8, 'titulo' => 'Item 8'],
        ['id' => 9, 'titulo' => 'Item 9'],
        ['id' => 10, 'titulo' => 'Item 10']
    ];

    $result = [];
    foreach($items as $key => $value){
        Log::info($value['titulo']);
        if(str_contains(strtolower($value['titulo']), strtolower($search))){
            $result[] = $value;
        }
    }


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
Route::get('/politica/{id}/{titulo}', [PoliticaController::class , 'politica']);

Route::get('/imprimir-politica/{id}', [PrintController::class , 'politica']);
Route::get('/imprimir-timeline/{area_id}', [PrintController::class , 'timeline']);


Route::get('/timeline', [TimelineController::class , 'timeline']);
Route::get('/consulta', [ConsultaController::class , 'consulta']);


/*Route::get('/timeline', function () {
    return view('timeline.index');
});

Route::get('/consulta', function () {
    return view('consulta.index');
});*/
