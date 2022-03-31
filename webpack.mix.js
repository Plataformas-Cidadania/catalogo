const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

/*mix.js('resources/js/app.js', 'public/js').postCss('resources/css/app.css', 'public/css', [
    require('postcss-import'),
    require('tailwindcss'),
    require('autoprefixer'),
]);*/

mix.scripts([
    'node_modules/@fortawesome/fontawesome-free/js/all.js',
    'node_modules/jquery/dist/jquery.js',
    'node_modules/jquery-animate-scroll/dist/jquery.animate-scroll.js',
    'node_modules/jquery-smoove/dist/jquery.smoove.min.js',
    'node_modules/jquery-csv/src/jquery.csv.min.js',
    'node_modules/bootstrap/dist/js/bootstrap.js',
    'node_modules/lazysizes/lazysizes.js',
    'node_modules/pace-js/pace.min.js',
    'resources/js/utils.js',
], 'public/js/app.js');

mix.scripts([
    'node_modules/owl.carousel/dist/owl.carousel.min.js',
], 'public/js/home.js');

mix.scripts([
    'node_modules/react-horizontal-timeline/dist/react-horizontal-timeline.js',
], 'public/js/react-horizontal-timeline.js');

mix.scripts([
    'node_modules/prop-types/prop-types.js',
    'node_modules/react-apexcharts/dist/react-apexcharts.js',
    'node_modules/react-apexcharts/dist/react-apexcharts.iife.min.js',
], 'public/js/chart.js');

mix.scripts([
    'node_modules/leaflet/dist/leaflet.js',
    'node_modules/leaflet.markercluster/dist/leaflet.markercluster.js',
    'node_modules/leaflet.fullscreen/Control.FullScreen.js',
    'node_modules/leaflet.heat/dist/leaflet-heat.js',
], 'public/js/leaflet.js');

/*CSS*/
mix.styles([
    'node_modules/owl.carousel/dist/assets/owl.carousel.min.css',
], 'public/css/home.css');

mix.styles([
    'node_modules/leaflet/dist/leaflet.css',
    'node_modules/leaflet.markercluster/dist/MarkerCluster.css',
    'node_modules/leaflet.markercluster/dist/MarkerCluster.Default.css',
    'node_modules/leaflet.fullscreen/Control.FullScreen.css',
], 'public/css/leaflet.css')

    .sass('resources/sass/app.scss', 'public/css')
    .sass('resources/sass/timeline/css/timeline.scss', 'public/js/timeline/css/custom-timeline.css');

//CMS///////////////////////////////////////////////////////////////////
//css npm install less-loader less --save-dev --production=false
mix.less('packages/cms/resources/assets/less/cms.less', 'public/assets-cms/css/cms.css');
mix.styles('packages/cms/resources/assets/css/sb-admin.css', 'public/assets-cms/css/sb-admin.css');
mix.styles('packages/cms/resources/assets/css/circle.css', 'public/assets-cms/css/circle.css');

//App angular
mix.scripts('packages/cms/resources/assets/js/cms.js', 'public/assets-cms/js/cms.js');

mix.scripts('packages/cms/resources/assets/js/tiny.js', 'public/assets-cms/js/tiny.js');

mix.scripts('packages/cms/resources/assets/js/utils.js', 'public/assets-cms/js/utils.js');

//Directives
mix.scripts('packages/cms/resources/assets/js/directives/initModel.js', 'public/assets-cms/js/directives/initModel.js');

//Controllers

//Webdoor
mix.scripts('packages/cms/resources/assets/js/controllers/webdoorCtrl.js', 'public/assets-cms/js/controllers/webdoorCtrl.js');
mix.scripts('packages/cms/resources/assets/js/controllers/alterarWebdoorCtrl.js', 'public/assets-cms/js/controllers/alterarWebdoorCtrl.js');

//Tipos
mix.scripts('packages/cms/resources/assets/js/controllers/tipoCtrl.js', 'public/assets-cms/js/controllers/tipoCtrl.js');
mix.scripts('packages/cms/resources/assets/js/controllers/alterarTipoCtrl.js', 'public/assets-cms/js/controllers/alterarTipoCtrl.js');

//Modulos
mix.scripts('packages/cms/resources/assets/js/controllers/moduloCtrl.js', 'public/assets-cms/js/controllers/moduloCtrl.js');
mix.scripts('packages/cms/resources/assets/js/controllers/alterarModuloCtrl.js', 'public/assets-cms/js/controllers/alterarModuloCtrl.js');

//Items Modulos
mix.scripts('packages/cms/resources/assets/js/controllers/itemCtrl.js', 'public/assets-cms/js/controllers/itemCtrl.js');
mix.scripts('packages/cms/resources/assets/js/controllers/alterarItemCtrl.js', 'public/assets-cms/js/controllers/alterarItemCtrl.js');

//Apoios
//mix.scripts('packages/cms/resources/assets/js/controllers/apoioCtrl.js', 'public/assets-cms/js/controllers/apoioCtrl.js');
//mix.scripts('packages/cms/resources/assets/js/controllers/alterarApoioCtrl.js', 'public/assets-cms/js/controllers/alterarApoioCtrl.js');

//CmsUsers
mix.scripts('packages/cms/resources/assets/js/controllers/cmsUserCtrl.js', 'public/assets-cms/js/controllers/cmsUserCtrl.js');
mix.scripts('packages/cms/resources/assets/js/controllers/alterarCmsUserCtrl.js', 'public/assets-cms/js/controllers/alterarCmsUserCtrl.js');

//Text
mix.scripts('packages/cms/resources/assets/js/controllers/textCtrl.js', 'public/assets-cms/js/controllers/textCtrl.js');
mix.scripts('packages/cms/resources/assets/js/controllers/alterarTextCtrl.js', 'public/assets-cms/js/controllers/alterarTextCtrl.js');

//Url
mix.scripts('packages/cms/resources/assets/js/controllers/urlCtrl.js', 'public/assets-cms/js/controllers/urlCtrl.js');
mix.scripts('packages/cms/resources/assets/js/controllers/alterarUrlCtrl.js', 'public/assets-cms/js/controllers/alterarUrlCtrl.js');

//Settings
mix.scripts('packages/cms/resources/assets/js/controllers/alterarSettingCtrl.js', 'public/assets-cms/js/controllers/alterarSettingCtrl.js');

//Parceiros
mix.scripts('packages/cms/resources/assets/js/controllers/parceiroCtrl.js', 'public/assets-cms/js/controllers/parceiroCtrl.js');
mix.scripts('packages/cms/resources/assets/js/controllers/alterarParceiroCtrl.js', 'public/assets-cms/js/controllers/alterarParceiroCtrl.js');


//Midias
mix.scripts('packages/cms/resources/assets/js/controllers/midiaCtrl.js', 'public/assets-cms/js/controllers/midiaCtrl.js');
mix.scripts('packages/cms/resources/assets/js/controllers/alterarMidiaCtrl.js', 'public/assets-cms/js/controllers/alterarMidiaCtrl.js');

//Categorias
mix.scripts('packages/cms/resources/assets/js/controllers/categoriaCtrl.js', 'public/assets-cms/js/controllers/categoriaCtrl.js');
mix.scripts('packages/cms/resources/assets/js/controllers/alterarCategoriaCtrl.js', 'public/assets-cms/js/controllers/alterarCategoriaCtrl.js');

//Posts
mix.scripts('packages/cms/resources/assets/js/controllers/postCtrl.js', 'public/assets-cms/js/controllers/postCtrl.js');
mix.scripts('packages/cms/resources/assets/js/controllers/alterarPostCtrl.js', 'public/assets-cms/js/controllers/alterarPostCtrl.js');

//Integrantes
mix.scripts('packages/cms/resources/assets/js/controllers/integranteCtrl.js', 'public/assets-cms/js/controllers/integranteCtrl.js');
mix.scripts('packages/cms/resources/assets/js/controllers/alterarIntegranteCtrl.js', 'public/assets-cms/js/controllers/alterarIntegranteCtrl.js');


//FIM CMS///////////////////////////////////////////////////////////////////
