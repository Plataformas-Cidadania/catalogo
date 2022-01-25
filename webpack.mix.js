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
    'node_modules/bootstrap/dist/js/bootstrap.js',
    'node_modules/lazysizes/lazysizes.js',
    'node_modules/pace-js/pace.min.js',
    'resources/js/utils.js',
], 'public/js/app.js');

mix.scripts([
    'node_modules/owl.carousel/dist/owl.carousel.min.js',
], 'public/js/home.js');

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

    .sass('resources/sass/app.scss', 'public/css');
