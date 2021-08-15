const excerpt = require("eleventy-plugin-excerpt");
const inclusiveLangPlugin = require("@11ty/eleventy-plugin-inclusive-language");
const markdownIt = require("markdown-it");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

const MARKDOWN_OPTIONS = {
  html: true,
  breaks: false,
  linkify: true,
  typographer: true,
};

module.exports = (eleventyConfig) => {
  const markdownLibrary = markdownIt(MARKDOWN_OPTIONS);
  eleventyConfig.setLibrary("md", markdownLibrary);

  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("humans.txt");
  eleventyConfig.addPassthroughCopy("CNAME");
  eleventyConfig.addPassthroughCopy("favicon.ico");

  eleventyConfig.addPlugin(excerpt);
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(inclusiveLangPlugin);

  eleventyConfig.setBrowserSyncConfig({
    files: "./_site/assets/css/*.css",
  });

  eleventyConfig.addCollection("posts", function (collectionApi) {
    return collectionApi.getFilteredByGlob("blog/_posts/*.md");
  });

  eleventyConfig.addLiquidFilter("array_to_sentence_string", function (list) {
    if (list.length === 1) {
      return list[0];
    }
    if (list.length === 2) {
      return list.join(" and ");
    }
    const lastWord = list.splice(list.length - 1, 1);
    return list.join(", ") + ", and " + lastWord[0];
  });

  return {
    dir: {
      input: "./",
      output: "./_site",
      layouts: "./_layouts",
    },
    passthroughFileCopy: true,
    templateFormats: ["html", "liquid", "md", "njk"],
  };
};
