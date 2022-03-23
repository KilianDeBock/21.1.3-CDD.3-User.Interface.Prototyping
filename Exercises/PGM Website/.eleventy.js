const del = require('del');
const path = require("path");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function (eleventyConfig) {
    const dirToClean = path.join('build', "*");
    del.sync(dirToClean, {dot: true});

    eleventyConfig.addPassthroughCopy({
        "src/assets/styles/main.css": "dist/main.css",
        "src/assets/images": "dist/images",
        "src/assets/styles/fonts": "dist/fonts"
    })

    // eleventyConfig.addWatchTarget("src/assets/styles/")
    eleventyConfig.addPlugin(eleventyNavigationPlugin);

    return {
        ...eleventyConfig,
        dir: {
            input: 'src',
            output: "build",
            layouts: "_includes/layouts"
        }
    }
}