# lrgthu.github.io

Personal website and Jekyll-powered blog for Ruogu (Franklin) Lin.

Published with GitHub Pages at:

https://lrgthu.github.io/

## Writing a blog post

Create a Markdown file in `_posts/` using the Jekyll filename convention:

```text
YYYY-MM-DD-short-title.md
```

For example:

```text
_posts/2026-09-05-models-and-minds.md
```

Start the file with front matter:

```yaml
---
title: "Models and Minds"
date: 2026-09-05
summary: "A short description used on the blog archive."
tags:
  - intelligence
  - models
---
```

Then write the article in normal Markdown. Posts automatically use `_layouts/post.html`, appear on `/blog/`, and use URLs of the form:

```text
/blog/models-and-minds/
```

The homepage automatically shows the three newest posts.

## Site structure

- `_config.yml` — Jekyll configuration and post defaults
- `_layouts/default.html` — shared site shell
- `_layouts/post.html` — article layout
- `_includes/sidebar.html` — shared retro sidebar
- `index.html` — homepage content
- `blog/index.html` — generated blog archive
- `style.css` — base site styles
- `blog.css` — blog and article styles
- `script.js` — cellular automaton and co-author visualization
