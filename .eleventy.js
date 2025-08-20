import { DateTime } from "luxon";
import fs from 'fs';
import path from 'path';
import cssnano from 'cssnano';
import postcss from 'postcss';
import tailwindcss from '@tailwindcss/postcss';
import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";


export default function(eleventyConfig) {
    // Nunjucks Shortcode
    eleventyConfig.addShortcode("imageStart", function(content) {
        return `<div class="relative">`;
    });
    eleventyConfig.addShortcode("imageEnd", function(content) {
        return `<div class="absolute inset-0 flex items-center justify-center bg-black opacity-0 hover:opacity-50 transition-opacity duration-200 cursor-pointer">
      <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
    </div>
  </div>`;
    });

    eleventyConfig.addShortcode("imageGrid", function (images) {
        return `<div class="mt-32 grid grid-cols-1 sm:grid-cols-2 gap-8">
      ${images
            .map(
                (img) => `
        <div class="relative">
          <img class="block w-full h-auto" src="${img.src}" alt="${img.alt}" />
          <div class="absolute inset-0 flex items-center justify-center bg-black opacity-0 hover:opacity-50 transition-opacity duration-200 cursor-pointer">
            <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>`
            )
            .join("")}
    </div>`;
    });
    // ICO
    eleventyConfig.addPassthroughCopy({ "src/assets.favicon.ico": "favicon.ico" });

    // 11ty image (HTML transformer) — prefix-aware
    const prefix = process.env.ELEVENTY_PATH_PREFIX || "/";

    eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
        // Write optimized images into your output folder:
        outputDir: "dist/img",
        // And make the URLs it writes in HTML include the Pages subpath:
        urlPath: `${prefix}img/`,

        // Optional, but recommended for UX:
        defaultAttributes: { loading: "lazy", decoding: "async" },

        // You can tune formats/widths later; keeping defaults for now.
        // formats: ["webp", "jpeg"],
        // widths: [800, 1600],
    });

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
        pathPrefix: process.env.ELEVENTY_PATH_PREFIX || "/",
    };
}