"use strict";

const jsyml = require("js-yaml");
const fs = require("fs");

hexo.extend.helper.register("post_author", function (post_obj) {
  const authorDir = hexo.source_dir + "_authors/";

  const authorFiles = fs.readdirSync(authorDir);
  const authorData = [];
  for (const element of authorFiles) {
    const authorFile = element;
    const authorFileData = fs.readFileSync(authorDir + authorFile, "utf8");
    const authorFileJson = jsyml.load(authorFileData);
    authorData.push(authorFileJson);
  }

  const post = post_obj;
  const post_authors = post.authors;
  post.author = [];
  for (const p_author of post_authors) {
    const author = authorData.find((a) => a.username === p_author);
    if (author) {
      post.author.push(author);
    }
  }

  return post.author
});
