# 📝 Blog System Guide

This guide explains how to use the new folder-based blog system where each blog post is organized in its own directory with a README file.

## 🚀 Quick Start

### 1. Create a New Blog Post

Use the convenient npm script:
```bash
pnpm new-blog "Your Blog Post Title"
```

This will:
- Create a new folder in `src/content/blogs/`
- Generate a README.md file with proper frontmatter
- Set today's date automatically

### 2. Manual Creation

Alternatively, create manually:
1. Create a new folder in `src/content/blogs/` (e.g., `my-awesome-post`)
2. Add a `README.md` file inside that folder
3. Include proper frontmatter at the top

## 📁 Folder Structure

```
src/content/blogs/
├── my-first-blog/
│   └── README.md
├── astro-tips-and-tricks/
│   └── README.md
└── your-new-post/
    ├── README.md
    ├── images/
    └── assets/
```

## 📋 Frontmatter Requirements

Each README.md file must start with frontmatter:

```yaml
---
title: "Your Blog Post Title"
pubDate: 2025-01-21
description: "Brief description of your post"
tags: ["tag1", "tag2", "tag3"]
---
```

### Required Fields:
- `title`: The title of your blog post
- `pubDate`: Publication date (YYYY-MM-DD format)

### Optional Fields:
- `description`: SEO description
- `tags`: Array of tags for categorization
- `image`: Featured image path

## ✍️ Writing Your Blog Post

After the frontmatter, write your content in standard Markdown:

```markdown
# Your Blog Post Title

## Introduction

Start with an engaging introduction...

## Main Content

Add your main content with proper markdown formatting:

- **Bold text** for emphasis
- *Italic text* for subtle emphasis
- `code snippets` for technical content
- [Links](https://example.com) for references

## Code Examples

```javascript
function helloWorld() {
  console.log("Hello, World!");
}
```

## Conclusion

Wrap up your post with a compelling conclusion...
```

## 🎯 Benefits of This System

1. **Better Organization**: Each post has its own space
2. **Asset Management**: Store images, code files, or other assets alongside your post
3. **Clean URLs**: Folder names become part of the URL structure
4. **Easy Maintenance**: All related files for a post are in one place
5. **Scalability**: Easy to manage as your blog grows

## 🔧 Advanced Usage

### Adding Assets to Blog Posts

You can include images, code files, or other assets in your blog post folders:

```
my-blog-post/
├── README.md
├── images/
│   ├── screenshot.png
│   └── diagram.svg
├── code/
│   └── example.js
└── data/
    └── sample.csv
```

### Referencing Assets

In your README.md, reference assets using relative paths:

```markdown
![Screenshot](./images/screenshot.png)

[Download Code](./code/example.js)
```

## 🚨 Important Notes

1. **File Naming**: Only `README.md` files are processed as blog posts
2. **Folder Names**: Use descriptive, URL-friendly names (lowercase, hyphens, no spaces)
3. **Frontmatter**: Must be at the very top of the file, before any content
4. **Date Format**: Use YYYY-MM-DD format for pubDate
5. **Automatic Display**: Blog posts appear on your website automatically after creation

## 🐛 Troubleshooting

### Blog Post Not Appearing?
- Check that the README.md file exists in the correct folder
- Verify frontmatter syntax (no extra spaces, proper YAML format)
- Ensure pubDate is in correct format (YYYY-MM-DD)
- Restart your development server

### Frontmatter Errors?
- Make sure frontmatter is at the very top of the file
- Check for proper YAML syntax
- Verify all required fields are present

## 📚 Examples

Check out the existing blog posts in `src/content/blogs/` for real examples:
- `my-first-blog/README.md` - Basic blog post structure
- `astro-tips-and-tricks/README.md` - Technical content with code examples

## 🎉 Happy Blogging!

This system makes it easy to organize and manage your blog content. Each post gets its own space, making it simple to add images, code files, or other assets alongside your content.

For questions or issues, check the main project README or create an issue in the repository.
