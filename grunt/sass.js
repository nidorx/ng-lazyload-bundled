/* global module */

module.exports = {
    options: {
        sourceMap: false
    },
    development: {
        options: {
            sourceMap: true,
            sourceMapContents: true
        },
        files: [
            {
                expand: true,
                cwd: 'src',
                src: ['modules/**/*.scss'],
                dest: 'dist',
                ext: '.css'
            }
        ]
    }
};