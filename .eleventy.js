const inclusiveLangPlugin = require("@11ty/eleventy-plugin-inclusive-language");
const markdownIt = require("markdown-it");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const timeToRead = require("eleventy-plugin-time-to-read");

const PASSTHROUGH_ITEMS = [
  "assets",
  "images",
  "humans.txt",
  "CNAME",
  "favicon.ico",
  "favicon-16x16.png",
  "favicon-32x32.png",
  "apple-touch-icon.png",
  "android-chrome-192x192.png",
  "android-chrome-512x512.png",
  "site.webmanifest"
];

const MARKDOWN_OPTIONS = {
  html: true,
  breaks: false,
  linkify: true,
  typographer: true,
};

module.exports = (eleventyConfig) => {
  const markdownLibrary = markdownIt(MARKDOWN_OPTIONS);
  eleventyConfig.setLibrary("md", markdownLibrary);

  PASSTHROUGH_ITEMS.forEach((item) => {
    eleventyConfig.addPassthroughCopy(item);
  });

  eleventyConfig.addShortcode("excerpt", function (post) {
    if (!post || !post.templateContent) return "";
    if (post.data && post.data.excerpt) return post.data.excerpt;
    const content = post.templateContent;
    const index = content.indexOf("</p>");
    return index !== -1 ? content.slice(0, index + 4) : "";
  });

  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(inclusiveLangPlugin);
  eleventyConfig.addPlugin(timeToRead);

  eleventyConfig.setServerOptions({
    watch: ["./_site/assets/css/*.css"],
  });

  eleventyConfig.addCollection("posts", function (collectionApi) {
    return collectionApi.getFilteredByGlob("blog/_posts/*.md");
  });

  eleventyConfig.addCollection("personalPosts", function (collectionApi) {
    return collectionApi.getFilteredByGlob("life/_posts/*.md");
  });

  eleventyConfig.addLiquidFilter("array_to_sentence_string", function (list) {
    if (list.length === 1) {
      return list[0];
    }
    if (list.length === 2) {
      return list.join(" and ");
    }
    const lastWord = list[list.length - 1];
    return list.slice(0, -1).join(", ") + ", and " + lastWord;
  });

  eleventyConfig.addLiquidFilter("date_to_xmlschema", function (date) {
    return date ? new Date(date).toISOString() : "";
  });

  eleventyConfig.addLiquidFilter("url_escape", function (str) {
    return encodeURIComponent(str || "");
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
