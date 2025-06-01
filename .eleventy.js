import { DateTime } from "luxon";
import fs from 'fs';
import path from 'path';
import cssnano from 'cssnano';
import postcss from 'postcss';
import tailwindcss from '@tailwindcss/postcss';

export default function(eleventyConfig) {
    //compile tailwind before eleventy processes the files
    eleventyConfig.on('eleventy.before', async () => {
        const tailwindInputPath = path.resolve('./src/assets/styles/index.css');

        const tailwindOutputPath = './dist/assets/styles/index.css';

        const cssContent = fs.readFileSync(tailwindInputPath, 'utf8');

        const outputDir = path.dirname(tailwindOutputPath);
        if (!fs.existsSync(outputDir)) {
            fs.mkdirSync(outputDir, { recursive: true });
        }

        const result = await processor.process(cssContent, {
            from: tailwindInputPath,
            to: tailwindOutputPath,
        });

        fs.writeFileSync(tailwindOutputPath, result.css);
    });

    const processor = postcss([
        //compile tailwind
        tailwindcss(),

        //minify tailwind css
        cssnano({
            preset: 'default',
        }),
    ]);

    eleventyConfig.addPassthroughCopy("src/img");

    // Date filter for formatting dates in templates (requires luxon)
    eleventyConfig.addFilter("date", (dateObj, format = "MMMM d, yyyy") => {
        return DateTime.fromJSDate(dateObj).toFormat(format);
    });

    eleventyConfig.addCollection("posts", function(collectionApi) {
        return collectionApi.getFilteredByTag("post").reverse();
    });
    return {
        dir: {
            input: "src",
            output: "dist",
            includes: "_includes",
        },
    };
}