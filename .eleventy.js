const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

const moment = require('moment');

moment.locale('en');


module.exports = function (eleventyConfig) {

  eleventyConfig.addPlugin(syntaxHighlight);

  eleventyConfig.addFilter('dateIso', date => {
    return moment(date).toISOString();
  });
  eleventyConfig.addFilter('dateReadable', date => {
    return moment(date).format('LL'); // E.g. May 31, 2019
  });

  eleventyConfig.addCollection("tagList", require("./eleventy/js/getTagsList.js"));


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
