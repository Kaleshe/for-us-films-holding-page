module.exports = (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy(".htaccess");
  eleventyConfig.addPassthroughCopy("google54f80e502fda2bf6.html");

  return {
    dir: {
      input: `src`,
    },
  };
};
