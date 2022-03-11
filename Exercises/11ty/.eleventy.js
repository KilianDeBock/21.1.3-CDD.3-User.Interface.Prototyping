module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy({
        "src/assets/styles/main.css": "dist/main.css"
    })

    // eleventyConfig.addWatchTarget("src/assets/styles/")

    return {
        ...eleventyConfig,
        dir: {
            input: 'src',
            output: "build"
        }
    }
}