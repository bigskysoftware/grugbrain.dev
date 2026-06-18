module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("grug.png");
  eleventyConfig.addPassthroughCopy("over-time.png");
  eleventyConfig.addPassthroughCopy("styles.css");
  eleventyConfig.addPassthroughCopy("favicon.svg");
};

