<?php



Route::group(['middleware' => 'cms'], function () {

    Route::get('/cms/login', 'Cms\Controllers\HomeController@telaLogin');
    Route::get('/cms/logout', 'Cms\Controllers\HomeController@logout');
    Route::post('/cms/login', 'Cms\Controllers\HomeController@login');

    Route::group(['middleware' => 'authcms:cms'], function () {

        Route::get('/cms', 'Cms\Controllers\HomeController@index');

        //Setting
        Route::get('/cms/setting/', 'Cms\Controllers\SettingController@detalhar');
        Route::post('/cms/alterar-setting/{id}', 'Cms\Controllers\SettingController@alterar');

        //WEBDOORS
        Route::get('/cms/webdoors', 'Cms\Controllers\WebdoorController@index');
        Route::get('/cms/listar-webdoors', 'Cms\Controllers\WebdoorController@listar');
        Route::post('/cms/inserir-webdoor', 'Cms\Controllers\WebdoorController@inserir');
        Route::get('/cms/webdoor/{id}', 'Cms\Controllers\WebdoorController@detalhar');
        Route::post('/cms/alterar-webdoor/{id}', 'Cms\Controllers\WebdoorController@alterar');
        Route::get('/cms/excluir-webdoor/{id}', 'Cms\Controllers\WebdoorController@excluir');
        Route::get('/cms/status-webdoor/{id}', 'Cms\Controllers\WebdoorController@status');
        Route::get('/cms/positionUp-webdoor/{id}', 'Cms\Controllers\WebdoorController@positionUp');
        Route::get('/cms/positionDown-webdoor/{id}', 'Cms\Controllers\WebdoorController@positionDown');

        //ITEMS
        Route::get('/cms/items/{modulo_id}', 'Cms\Controllers\ItemController@index');
        Route::get('/cms/listar-items', 'Cms\Controllers\ItemController@listar');
        Route::post('/cms/inserir-item', 'Cms\Controllers\ItemController@inserir');
        Route::get('/cms/item/{id}', 'Cms\Controllers\ItemController@detalhar');
        Route::post('/cms/alterar-item/{id}', 'Cms\Controllers\ItemController@alterar');
        Route::get('/cms/excluir-item/{id}', 'Cms\Controllers\ItemController@excluir');
        Route::get('/cms/status-item/{id}', 'Cms\Controllers\ItemController@status');
        Route::get('/cms/positionUp-item/{id}', 'Cms\Controllers\ItemController@positionUp');
        Route::get('/cms/positionDown-item/{id}', 'Cms\Controllers\ItemController@positionDown');

        //Route::get('/cms/teste-excel', 'Cms\Controllers\SerieController@testeExcel');
        Route::get('/cms/teste-excel/{id}/{arquivo}', 'Cms\Controllers\SerieController@testeExcel');

        //MODULOS
        Route::get('/cms/modulos', 'Cms\Controllers\ModuloController@index');
        Route::get('/cms/listar-modulos', 'Cms\Controllers\ModuloController@listar');
        Route::post('/cms/inserir-modulo', 'Cms\Controllers\ModuloController@inserir');
        Route::get('/cms/modulo/{id}', 'Cms\Controllers\ModuloController@detalhar');
        Route::post('/cms/alterar-modulo/{id}', 'Cms\Controllers\ModuloController@alterar');
        Route::get('/cms/excluir-modulo/{id}', 'Cms\Controllers\ModuloController@excluir');
        Route::get('/cms/status-modulo/{id}', 'Cms\Controllers\ModuloController@status');

        //GUIAS
        Route::get('/cms/guias', 'Cms\Controllers\GuiaController@index');
        Route::get('/cms/listar-guias', 'Cms\Controllers\GuiaController@listar');
        Route::post('/cms/inserir-guia', 'Cms\Controllers\GuiaController@inserir');
        Route::get('/cms/guia/{id}', 'Cms\Controllers\GuiaController@detalhar');
        Route::post('/cms/alterar-guia/{id}', 'Cms\Controllers\GuiaController@alterar');
        Route::get('/cms/excluir-guia/{id}', 'Cms\Controllers\GuiaController@excluir');
        Route::get('/cms/status-guia/{id}', 'Cms\Controllers\GuiaController@status');

        //TIPOS
        Route::get('/cms/tipos', 'Cms\Controllers\TipoController@index');
        Route::get('/cms/listar-tipos', 'Cms\Controllers\TipoController@listar');
        Route::post('/cms/inserir-tipo', 'Cms\Controllers\TipoController@inserir');
        Route::get('/cms/tipo/{id}', 'Cms\Controllers\TipoController@detalhar');
        Route::post('/cms/alterar-tipo/{id}', 'Cms\Controllers\TipoController@alterar');
        Route::get('/cms/excluir-tipo/{id}', 'Cms\Controllers\TipoController@excluir');
        Route::get('/cms/status-tipo/{id}', 'Cms\Controllers\TipoController@status');

        //TIPOS GRAFICOS
        Route::get('/cms/tipos-graficos', 'Cms\Controllers\TipoGraficoController@index');
        Route::get('/cms/listar-tipos-graficos', 'Cms\Controllers\TipoGraficoController@listar');
        Route::post('/cms/inserir-tipo-grafico', 'Cms\Controllers\TipoGraficoController@inserir');
        Route::get('/cms/tipo-grafico/{id}', 'Cms\Controllers\TipoGraficoController@detalhar');
        Route::post('/cms/alterar-tipo-grafico/{id}', 'Cms\Controllers\TipoGraficoController@alterar');
        Route::get('/cms/excluir-tipo-grafico/{id}', 'Cms\Controllers\TipoGraficoController@excluir');
        Route::get('/cms/status-tipo-grafico/{id}', 'Cms\Controllers\TipoGraficoController@status');

        //NOTICIAS
        Route::get('/cms/noticias', 'Cms\Controllers\NoticiaController@index');
        Route::get('/cms/listar-noticias', 'Cms\Controllers\NoticiaController@listar');
        Route::post('/cms/inserir-noticia', 'Cms\Controllers\NoticiaController@inserir');
        Route::get('/cms/noticia/{id}', 'Cms\Controllers\NoticiaController@detalhar');
        Route::post('/cms/alterar-noticia/{id}', 'Cms\Controllers\NoticiaController@alterar');
        Route::get('/cms/excluir-noticia/{id}', 'Cms\Controllers\NoticiaController@excluir');
        Route::get('/cms/status-noticia/{id}', 'Cms\Controllers\NoticiaController@status');


        //MIDIAS
        Route::get('/cms/midias', 'Cms\Controllers\MidiaController@index');
        Route::get('/cms/listar-midias', 'Cms\Controllers\MidiaController@listar');
        Route::post('/cms/inserir-midia', 'Cms\Controllers\MidiaController@inserir');
        Route::get('/cms/midia/{id}', 'Cms\Controllers\MidiaController@detalhar');
        Route::post('/cms/alterar-midia/{id}', 'Cms\Controllers\MidiaController@alterar');
        Route::get('/cms/excluir-midia/{id}', 'Cms\Controllers\MidiaController@excluir');
        Route::get('/cms/status-midia/{id}', 'Cms\Controllers\MidiaController@status');

        //CATEGORIAS
        Route::get('/cms/categorias', 'Cms\Controllers\CategoriaController@index');
        Route::get('/cms/categorias/{midia_id}', 'Cms\Controllers\CategoriaController@index');
        Route::get('/cms/listar-categorias', 'Cms\Controllers\CategoriaController@listar');
        Route::post('/cms/inserir-categoria', 'Cms\Controllers\CategoriaController@inserir');
        Route::get('/cms/categoria/{id}', 'Cms\Controllers\CategoriaController@detalhar');
        Route::post('/cms/alterar-categoria/{id}', 'Cms\Controllers\CategoriaController@alterar');
        Route::get('/cms/excluir-categoria/{id}', 'Cms\Controllers\CategoriaController@excluir');

        //POSTS
        Route::get('/cms/posts', 'Cms\Controllers\PostController@index');
        //Route::get('/cms/posts/{categoria_id}', 'Cms\Controllers\PostController@index');
        Route::get('/cms/posts/{midia_id}', 'Cms\Controllers\PostController@index');
        Route::get('/cms/listar-posts', 'Cms\Controllers\PostController@listar');
        Route::post('/cms/inserir-post', 'Cms\Controllers\PostController@inserir');
        Route::get('/cms/post/{id}', 'Cms\Controllers\PostController@detalhar');
        Route::post('/cms/alterar-post/{id}', 'Cms\Controllers\PostController@alterar');
        Route::get('/cms/excluir-post/{id}', 'Cms\Controllers\PostController@excluir');
        Route::get('/cms/status-post/{id}', 'Cms\Controllers\PostController@status');
        Route::get('/cms/destaque-post/{id}', 'Cms\Controllers\PostController@destaque');

        //INTEGRANTES
        Route::get('/cms/integrantes', 'Cms\Controllers\IntegranteController@index');
        Route::get('/cms/listar-integrantes', 'Cms\Controllers\IntegranteController@listar');
        Route::post('/cms/inserir-integrante', 'Cms\Controllers\IntegranteController@inserir');
        Route::get('/cms/integrante/{id}', 'Cms\Controllers\IntegranteController@detalhar');
        Route::post('/cms/alterar-integrante/{id}', 'Cms\Controllers\IntegranteController@alterar');
        Route::get('/cms/excluir-integrante/{id}', 'Cms\Controllers\IntegranteController@excluir');

        //CATEGORIAS
        Route::get('/cms/categorias', 'Cms\Controllers\CategoriaController@index');
        Route::get('/cms/listar-categorias', 'Cms\Controllers\CategoriaController@listar');
        Route::post('/cms/inserir-categoria', 'Cms\Controllers\CategoriaController@inserir');
        Route::get('/cms/categoria/{id}', 'Cms\Controllers\CategoriaController@detalhar');
        Route::post('/cms/alterar-categoria/{id}', 'Cms\Controllers\CategoriaController@alterar');
        Route::get('/cms/excluir-categoria/{id}', 'Cms\Controllers\CategoriaController@excluir');

        //PUBLICATIONS
        Route::get('/cms/publications', 'Cms\Controllers\PublicationController@index');
        Route::get('/cms/listar-publications', 'Cms\Controllers\PublicationController@listar');
        Route::post('/cms/inserir-publication', 'Cms\Controllers\PublicationController@inserir');
        Route::get('/cms/publication/{id}', 'Cms\Controllers\PublicationController@detalhar');
        Route::post('/cms/alterar-publication/{id}', 'Cms\Controllers\PublicationController@alterar');
        Route::get('/cms/excluir-publication/{id}', 'Cms\Controllers\PublicationController@excluir');
        Route::get('/cms/status-publication/{id}', 'Cms\Controllers\PublicationController@status');

        //URLS
        Route::get('/cms/urls', 'Cms\Controllers\UrlController@index');
        Route::get('/cms/listar-urls', 'Cms\Controllers\UrlController@listar');
        Route::post('/cms/inserir-url', 'Cms\Controllers\UrlController@inserir');
        Route::get('/cms/url/{id}', 'Cms\Controllers\UrlController@detalhar');
        Route::post('/cms/alterar-url/{id}', 'Cms\Controllers\UrlController@alterar');
        Route::get('/cms/excluir-url/{id}', 'Cms\Controllers\UrlController@excluir');
        Route::get('/cms/status-url/{id}', 'Cms\Controllers\UrlController@status');
        Route::get('/cms/positionUp-url/{id}', 'Cms\Controllers\UrlController@positionUp');
        Route::get('/cms/positionDown-url/{id}', 'Cms\Controllers\UrlController@positionDown');

        //PARCEIROS
        Route::get('/cms/parceiros', 'Cms\Controllers\ParceiroController@index');
        Route::get('/cms/listar-parceiros', 'Cms\Controllers\ParceiroController@listar');
        Route::post('/cms/inserir-parceiro', 'Cms\Controllers\ParceiroController@inserir');
        Route::get('/cms/parceiro/{id}', 'Cms\Controllers\ParceiroController@detalhar');
        Route::post('/cms/alterar-parceiro/{id}', 'Cms\Controllers\ParceiroController@alterar');
        Route::get('/cms/excluir-parceiro/{id}', 'Cms\Controllers\ParceiroController@excluir');
        Route::get('/cms/status-parceiro/{id}', 'Cms\Controllers\ParceiroController@status');
        Route::get('/cms/positionUp-parceiro/{id}', 'Cms\Controllers\ParceiroController@positionUp');
        Route::get('/cms/positionDown-parceiro/{id}', 'Cms\Controllers\ParceiroController@positionDown');

        //POPUPS
        Route::get('/cms/popups', 'Cms\Controllers\PopupController@index');
        Route::get('/cms/listar-popups', 'Cms\Controllers\PopupController@listar');
        Route::post('/cms/inserir-popup', 'Cms\Controllers\PopupController@inserir');
        Route::get('/cms/popup/{id}', 'Cms\Controllers\PopupController@detalhar');
        Route::post('/cms/alterar-popup/{id}', 'Cms\Controllers\PopupController@alterar');
        Route::get('/cms/excluir-popup/{id}', 'Cms\Controllers\PopupController@excluir');
        Route::get('/cms/status-popup/{id}', 'Cms\Controllers\PopupController@status');
        Route::get('/cms/positionUp-popup/{id}', 'Cms\Controllers\PopupController@positionUp');
        Route::get('/cms/positionDown-popup/{id}', 'Cms\Controllers\PopupController@positionDown');


        //IDIOMAS
        Route::get('/cms/idiomas', 'Cms\Controllers\IdiomaController@index');
        Route::get('/cms/listar-idiomas', 'Cms\Controllers\IdiomaController@listar');
        Route::post('/cms/inserir-idioma', 'Cms\Controllers\IdiomaController@inserir');
        Route::get('/cms/idioma/{id}', 'Cms\Controllers\IdiomaController@detalhar');
        Route::post('/cms/alterar-idioma/{id}', 'Cms\Controllers\IdiomaController@alterar');
        Route::get('/cms/excluir-idioma/{id}', 'Cms\Controllers\IdiomaController@excluir');


        //VIDEOS
        Route::get('/cms/videos', 'Cms\Controllers\VideoController@index');
        Route::get('/cms/listar-videos', 'Cms\Controllers\VideoController@listar');
        Route::post('/cms/inserir-video', 'Cms\Controllers\VideoController@inserir');
        Route::get('/cms/video/{id}', 'Cms\Controllers\VideoController@detalhar');
        Route::post('/cms/alterar-video/{id}', 'Cms\Controllers\VideoController@alterar');
        Route::get('/cms/excluir-video/{id}', 'Cms\Controllers\VideoController@excluir');
        Route::get('/cms/status-video/{id}', 'Cms\Controllers\VideoController@status');


        //User
        Route::get('/cms/usuarios', 'Cms\Controllers\CmsUserController@index');
        Route::get('/cms/listar-cmsusers', 'Cms\Controllers\CmsUserController@listar');
        Route::post('/cms/inserir-cmsuser', 'Cms\Controllers\CmsUserController@inserir');
        Route::get('/cms/usuario/{id}', 'Cms\Controllers\CmsUserController@detalhar');
        Route::post('/cms/alterar-cmsuser/{id}', 'Cms\Controllers\CmsUserController@alterar');
        Route::get('/cms/perfil', 'Cms\Controllers\CmsUserController@perfil');
        Route::post('/cms/alterar-perfil', 'Cms\Controllers\CmsUserController@alterarPerfil');
        Route::get('/cms/excluir-cmsuser/{id}', 'Cms\Controllers\CmsUserController@excluir');


        //TEXTS
        Route::get('/cms/texts', 'Cms\Controllers\TextController@index');
        Route::get('/cms/listar-texts', 'Cms\Controllers\TextController@listar');
        Route::post('/cms/inserir-text', 'Cms\Controllers\TextController@inserir');
        Route::get('/cms/text/{id}', 'Cms\Controllers\TextController@detalhar');
        Route::post('/cms/alterar-text/{id}', 'Cms\Controllers\TextController@alterar');
        Route::get('/cms/excluir-text/{id}', 'Cms\Controllers\TextController@excluir');

        //ROTAS DO CRUD PELA API////////////////////////////////////////////////////////////

        //Grande Area
        Route::get('/cms/grandes-areas', 'Cms\Controllers\GrandeAreaController@index');
        Route::get('/cms/grande-area/{id}', 'Cms\Controllers\GrandeAreaController@detalhar');

        //Area
        Route::get('/cms/areas', 'Cms\Controllers\AreaController@index');
        Route::get('/cms/area/{id}', 'Cms\Controllers\AreaController@detalhar');

        //Orgao
        Route::get('/cms/orgaos', 'Cms\Controllers\OrgaoController@index');
        Route::get('/cms/orgao/{id}', 'Cms\Controllers\OrgaoController@detalhar');

        //Tipo Politica
        Route::get('/cms/tipos-politicas', 'Cms\Controllers\TipoPoliticaController@index');
        Route::get('/cms/tipo-politica/{id}', 'Cms\Controllers\TipoPoliticaController@detalhar');

        //Publico Alvo
        Route::get('/cms/publicos-alvos', 'Cms\Controllers\PublicoAlvoController@index');
        Route::get('/cms/publico-alvo/{id}', 'Cms\Controllers\PublicoAlvoController@detalhar');

        //Categoria Politica
        Route::get('/cms/categorias-politicas', 'Cms\Controllers\CategoriaPoliticaController@index');
        Route::get('/cms/categoria-politica/{id}', 'Cms\Controllers\CategoriaPoliticaController@detalhar');

        //Politica
        Route::get('/cms/politicas', 'Cms\Controllers\PoliticaController@index');
        Route::get('/cms/politica/{id}', 'Cms\Controllers\PoliticaController@detalhar');


        //Arquivo
        Route::get('/cms/arquivos-politica/{politica_id}', 'Cms\Controllers\ArquivoPoliticaController@index');
        ////////////////////////////////////////////////////////////////////////////////////




    });

});
