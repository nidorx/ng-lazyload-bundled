/* global module */

module.exports = {
    options: {
        verbose: true,
        failOnError: true,
        updateAndDelete: true
    },
    dist_vendor_fonts: {
        files: [
            {
                expand: true,
                cwd: 'src/vendor/bootstrap/dist/fonts/',
                src: '*',
                dest: 'dist/vendor/fonts/',
                filter: 'isFile'
            }
        ]
    }
};