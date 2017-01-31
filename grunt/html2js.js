/* global module */

module.exports = {
    options: {
        base: '<%= srcDir %>',
        module: "ng",
        singleModule: true,
        existingModule: true,
        htmlmin: {
            collapseBooleanAttributes: true,
            collapseWhitespace: true,
            removeAttributeQuotes: false,
            removeComments: true,
            removeEmptyAttributes: true,
            removeRedundantAttributes: true,
            removeScriptTypeAttributes: true,
            removeStyleLinkTypeAttributes: true
        }
    }
};