/* global module */

module.exports = {
    sass: {
        files: ['src/modules/**/*.scss'],
        tasks: ['sass:development']
    },
    includeSourceNewFiles: {
        options: {
            livereload: '<%= connectLivereload %>',
            event: ['added', 'deleted']
        },
        files: [
            'src/modules/**/*.scss',
            'src/modules/**/*.js'
        ],
        tasks: ['includeSource:development']
    },
    includeSourceIndex: {
        options: {event: ['changed']},
        files: ['src/index.html'],
        tasks: ['includeSource:development']
    },
    livereload: {
        options: {
            livereload: '<%= connectLivereload %>',
            event: ['changed']
        },
        files: [
            'src/modules/**/*',
            '!src/modules/**/*.scss',
            'dist/**/*'
        ]
    }
};
