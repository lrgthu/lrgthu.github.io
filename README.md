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

The homepage shows the three pinned perspectives in their series order.

## Writing a thought

Create one Markdown file per thought in `_thoughts/`. A short note and a
multi-part thread each count as one thought, with one date and one permalink.

```markdown
---
title: "The opening sentence, also used in link previews"
date: 2026-10-18 20:57:39 -0700
permalink: /thoughts/a-stable-slug/
description: "A short description for link previews."
---
The first part of the thought.

<!-- thought-part -->

The next part, if there is one.
```

Place `<!-- thought-part -->` on its own line, with a blank line on each side.
Do not put a marker before the first part, after the last part, or next to
another marker: every part must contain text. The site generates `1/6`, `2/6`,
and so on from the actual number of parts; do not type those counters into the
body. Single-part thoughts have no counter.

The homepage displays the first part of each of the latest three thoughts.
The Thoughts archive and each permalink display every part in order. Numbered
parts also have direct `#part-1`, `#part-2`, and subsequent links.
Use a distinct, stable permalink for every thought, including thoughts posted
on the same day. Write dates with an explicit offset for the publication time.

## Site structure

- `_config.yml` — Jekyll configuration and post defaults
- `_layouts/default.html` — shared site shell
- `_layouts/post.html` — article layout
- `_layouts/thought.html` — individual thought or thread
- `_thoughts/` — short notes and multi-part threads
- `_includes/thought-preview.html` — first-part previews for the homepage
- `_includes/thought-thread.html` — full text and automatic part numbering
- `_includes/sidebar.html` — shared retro sidebar
- `index.html` — homepage content
- `blog/index.html` — generated blog archive
- `thoughts/index.html` — generated Thoughts archive
- `style.css` — base site styles
- `blog.css` — blog and article styles
- `thoughts.css` — thoughts and shared navigation on small screens
- `script.js` — cellular automaton and co-author visualization

