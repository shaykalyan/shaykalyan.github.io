const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const metadata = require("./eleventy/_data/metadata.js");
const dateFormatter = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(syntaxHighlight);

  eleventyConfig.addFilter("dateIso", (date) => {
    return new Date(date).toISOString();
  });
  eleventyConfig.addFilter("dateReadable", (date) => {
    return dateFormatter.format(new Date(date)); // E.g. May 31, 2019
  });
  eleventyConfig.addFilter("sortPostsByDate", (items = []) => {
    return [...items].sort((a, b) => b.date - a.date);
  });

  eleventyConfig.addCollection("posts", (collectionApi) => {
    return collectionApi
      .getFilteredByGlob("eleventy/posts/**/*.md")
      .sort((a, b) => b.date - a.date);
  });

  eleventyConfig.addCollection("tagList", require("./eleventy/js/getTagsList.js"));

  eleventyConfig.addPassthroughCopy("eleventy/images/**/*.png");
  eleventyConfig.addPassthroughCopy("eleventy/images/**/*.jpg");

  eleventyConfig.setFrontMatterParsingOptions({
    excerpt: true,
    excerpt_separator: "<!-- excerpt -->",
  });

  return {
    dir: {
      input: "./eleventy/",
      output: "./blog/",
    },
    pathPrefix: metadata.blog.path,
  };
};
