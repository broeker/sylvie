export default function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/img");
    eleventyConfig.addCollection("posts", function(collectionApi) {
        return collectionApi.getFilteredByTag("post").reverse();
    });
    return {
        dir: {
            input: "src",
            output: "_site",
            includes: "_includes",
        },
    };
}