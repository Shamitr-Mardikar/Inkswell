---
title: "My First Blog Post"
pubDate: 2025-01-21
description: "This is my first blog post using the new folder-based system"
tags: ["first-post", "blogging", "astro"]
---

# My First Blog Post

Welcome to my first blog post! This post is organized in a folder structure where each blog post gets its own directory with a README file.

## Why This Structure?

This approach offers several benefits:

1. **Better Organization**: Each blog post can have its own folder
2. **Asset Management**: You can store images, code files, or other assets alongside your post
3. **Clean URLs**: The folder name becomes part of the URL structure
4. **Easy Maintenance**: All related files for a post are in one place

## How It Works

- Create a new folder in `src/content/blogs/`
- Name the folder something descriptive (e.g., `my-first-blog`)
- Add a `README.md` file inside that folder
- The README file should contain your blog post content with proper frontmatter

## Frontmatter Requirements

Each README file needs:
- `title`: The title of your blog post
- `pubDate`: Publication date in YYYY-MM-DD format
- `description`: Optional description for SEO
- `tags`: Optional array of tags for categorization

## Next Steps

Now you can create more blog posts by simply:
1. Creating new folders in the `blogs` directory
2. Adding README.md files with your content
3. The website will automatically display all your blog posts!

Happy blogging! 🚀
