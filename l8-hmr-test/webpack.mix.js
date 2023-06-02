const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .react()
    .sass('resources/sass/app.scss', 'public/css')
    .options({
        hmrOptions: {
            https: true,
            host: 'l8-hmr-websocket.dvl.to',
            port: '443'
        }
    })
;

mix.webpackConfig({
    devServer: {
        https: true,
        host: '0.0.0.0',
        port: '8080'
    }
})
;
