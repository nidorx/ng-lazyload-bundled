/* global module */

module.exports = {
    options: {
        removeComments: true,
        collapseWhitespace: true
    },
    dist: {
        files: {
            '<%= distDir %>/index.html': '<%= distDir %>/index.html'
        }
    }
};