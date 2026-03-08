const hiddenTags = new Set(["all", "nav", "post", "posts", "tagList"]);

module.exports = function (collectionApi) {
  const tagSet = new Set();

  for (const item of collectionApi.getFilteredByGlob("eleventy/posts/**/*.md")) {
    if (!Array.isArray(item.data.tags)) {
      continue;
    }

    for (const tag of item.data.tags) {
      if (!hiddenTags.has(tag)) {
        tagSet.add(tag);
      }
    }
  }

  return [...tagSet].sort((a, b) => a.localeCompare(b));
};
