import { getCollection, type CollectionEntry } from 'astro:content'

/**
 * Get all posts, filtering out posts whose filenames start with _
 */
export async function getFilteredPosts() {
  const posts = await getCollection('posts')
  return posts.filter((post: CollectionEntry<'posts'>) => !post.id.startsWith('_'))
}

/**
 * Get all blogs from the blogs collection
 */
export async function getFilteredBlogs() {
  const blogs = await getCollection('blogs')
  return blogs
}

/**
 * Get all posts sorted by publication date, filtering out posts whose filenames start with _
 */
export async function getSortedFilteredPosts() {
  const posts = await getFilteredPosts()
  return posts.sort(
    (a: CollectionEntry<'posts'>, b: CollectionEntry<'posts'>) =>
      b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  )
}

/**
 * Get all blogs sorted by publication date
 */
export async function getSortedFilteredBlogs() {
  const blogs = await getFilteredBlogs()
  return blogs.sort(
    (a: CollectionEntry<'blogs'>, b: CollectionEntry<'blogs'>) =>
      b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  )
}

/**
 * Get all content (posts + blogs) sorted by publication date
 */
export async function getAllContent() {
  const posts = await getFilteredPosts()
  const blogs = await getFilteredBlogs()
  
  // Combine and sort all content by publication date
  const allContent = [...posts, ...blogs].sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  )
  
  return allContent
}
