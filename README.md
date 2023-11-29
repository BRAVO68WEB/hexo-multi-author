## hexo-multiauthor-plugin Plugin

This plugin allows you to add multiple authors to your Hexo blog. It is based on the [hexo-multiauthor](https://github.com/bob983/hexo-multiauthor)

## Installation

``` bash
$ npm install hexo-multiauthor-plugin --save
$ yarn add hexo-multiauthor-plugin
$ pnpm install --save hexo-multiauthor-plugin
```

## Usage


### Step 1 :- Add authors to your post

Add `authors` to your post:

```md
---
...
authors:
    - john
...
---
```

### Step 2 :- Add authors to your site

Create a `source/_authors` folder in your Hexo root directory. Then create a file for each author. The file name should be the same as the author name you used in your post.

For example, if you have an author named `john`, create a file named `john.yml` in the `source/_authors` folder.

```yml
username: john     # Make sure this is the same as the file name
name: "John Doe"
about: "Blogger"
```

### Step 3 :- Add authors to your theme

Add this code snippet to your theme wherever you want to display the author's name:

For example, if you are using the default Hexo theme, you can add this code snippet to `themes/landscape/layout/_partial/article.ejs` just below `<%- post.content %>`:

```ejs
<%- post_author() %>
```

## Options

- Coming soon

## Tested On

- Hexo 7.0

## License

This project is licenced with [MIT](LICENCE)