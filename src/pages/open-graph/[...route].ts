import { getCollection } from 'astro:content'
import { OGImageRoute } from 'astro-og-canvas'
import { themeConfig } from '../../config'

// Only use blogs collection for OpenGraph images
const blogsEntries = await getCollection('blogs')

// Map entries: use folder name (before first "/") as key
const pages = Object.fromEntries(
  blogsEntries.map(({ id, data }) => [id.split('/')[0], data])
)

export const { getStaticPaths, GET } = OGImageRoute({
  param: 'route',
  pages,
  getImageOptions: (_path, page) => ({
    title: page.title,
    description: themeConfig.site.title,
    logo: {
      path: 'public/og/og-logo.png',
      size: [80, 80]
    },
    bgGradient: [[255, 255, 255]],
    bgImage: {
      path: 'public/og/og-bg.png',
      fit: 'fill'
    },
    padding: 64,
    font: {
      title: {
        color: [28, 28, 28],
        size: 68,
        weight: 'SemiBold',
        families: ['PingFang SC']
      },
      description: {
        color: [180, 180, 180],
        size: 40,
        weight: 'Medium',
        families: ['PingFang SC']
      }
    },
    fonts: [
      'https://cdn.jsdelivr.net/npm/font-pingfang-sc-font-weight-improved@latest/PingFangSC-Medium.woff2',
      'https://cdn.jsdelivr.net/npm/font-pingfang-sc-font-weight-improved@latest/PingFangSC-Semibold.woff2',
    ]
  })
})
