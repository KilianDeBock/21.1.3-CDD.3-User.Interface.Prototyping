module.exports = function (eleventyConfig) {
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
            output: "build"
        }
    }
}