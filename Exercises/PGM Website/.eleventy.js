const del = require('del'),
    path = require("path");

module.exports = function (eleventyConfig) {
    const dirToClean = path.join('build', "*");
    del.sync(dirToClean, {dot: true});

    eleventyConfig.addPassthroughCopy({
        "src/assets/styles/main.css": "dist/main.css",
        "src/assets/images": "dist/images",
        "src/assets/styles/fonts": "dist/fonts"
    })

    // eleventyConfig.addWatchTarget("src/assets/styles/")

    return {
        ...eleventyConfig,
        dir: {
            input: 'src',
            output: "build",
            layouts: "_includes/layouts"
        }
    }
}