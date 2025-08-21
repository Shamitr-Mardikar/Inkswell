#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function createBlogPost() {
  const args = process.argv.slice(2);
  
  if (args.length === 0) {
    console.log('Usage: node create-blog.js <blog-title>');
    console.log('Example: node create-blog.js "My Amazing Blog Post"');
    process.exit(1);
  }

  const blogTitle = args[0];
  const folderName = blogTitle
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .trim();

  const blogsDir = path.join(__dirname, '../src/content/blogs');
  const blogDir = path.join(blogsDir, folderName);
  const readmePath = path.join(blogDir, 'README.md');

  // Create blog directory
  if (!fs.existsSync(blogDir)) {
    fs.mkdirSync(blogDir, { recursive: true });
    console.log(`✅ Created directory: ${blogDir}`);
  } else {
    console.log(`⚠️  Directory already exists: ${blogDir}`);
  }

  // Create README.md file
  const today = new Date().toISOString().split('T')[0];
  
  const readmeContent = `---
title: "${blogTitle}"
pubDate: ${today}
description: "Description of your blog post"
tags: ["tag1", "tag2"]
---

# ${blogTitle}

Start writing your blog post here...

## Introduction

Begin with an engaging introduction that hooks your readers.

## Main Content

Add your main content here with proper markdown formatting.

## Conclusion

Wrap up your post with a compelling conclusion.

---

*Happy writing! 🚀*
`;

  if (!fs.existsSync(readmePath)) {
    fs.writeFileSync(readmePath, readmeContent);
    console.log(`✅ Created README.md: ${readmePath}`);
  } else {
    console.log(`⚠️  README.md already exists: ${readmePath}`);
  }

  console.log(`\n🎉 Blog post "${blogTitle}" created successfully!`);
  console.log(`📁 Location: ${blogDir}`);
  console.log(`📝 Edit the README.md file to add your content`);
  console.log(`🌐 Your blog will appear on the website automatically`);
}

createBlogPost();
