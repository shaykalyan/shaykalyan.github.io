module.exports = function (collection) {
    let tagSet = new Set();
    collection.getAll().forEach(function (item) {
        if ("tags" in item.data) {
            for (const tag of item.data.tags) {
                tagSet.add(tag);
            }
        }
    });

    // returning an array in addCollection works in Eleventy 0.5.3
    return [...tagSet];
};