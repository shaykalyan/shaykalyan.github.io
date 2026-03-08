const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const dateFormatter = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

module.exports = function (eleventyConfig) {

  eleventyConfig.addPlugin(syntaxHighlight);

  eleventyConfig.addFilter('dateIso', date => {
    return new Date(date).toISOString();
  });
  eleventyConfig.addFilter('dateReadable', date => {
    return dateFormatter.format(new Date(date)); // E.g. May 31, 2019
  });

  eleventyConfig.addCollection("tagList", require("./eleventy/js/getTagsList.js"));

  eleventyConfig.addPassthroughCopy("./eleventy/images");

  eleventyConfig.setFrontMatterParsingOptions({
    excerpt: true,
    // Optional, default is "---"
    //excerpt_separator: "<!-- excerpt -->"
  });


  return {
    dir: {
      input: "./eleventy/",
      output: "./blog/"
    },
    pathPrefix: "/blog/"
  }
};
