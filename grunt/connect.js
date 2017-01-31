/* global module */

var rewriteModule = require('http-rewrite-middleware');

module.exports = {
    development: {
        options: {
            port: '<%= connectPort %>',
            hostname: 'localhost',
            livereload: '<%= connectLivereload %>',
            open: true,
            base: [
                '<%= distDir %>', // build
                '<%= srcDir %>' // fonte
            ],
            middleware: function (connect, options, middlewares) {
                // Faz redirect de arquivos SASS para o CSS compilado
                middlewares.unshift(rewriteModule.getMiddleware([
                    {
                        from: '^(.*).scss$',
                        to: '$1.css',
                        redirect: 'temporary' // 302 Redirect
                    }
                ]));
                return middlewares;
            }
        }
    },
    dist: {// Para visualizar
        options: {
            port: '<%= connectPort %>',
            hostname: 'localhost',
            open: true,
            keepalive: true,
            base: ['<%= distDir %>']
        }
    }
};
