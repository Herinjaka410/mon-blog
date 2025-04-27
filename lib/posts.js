import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const postsDir = path.join(process.cwd(), 'content/articles')

export function getArticles() {
  const files = fs.readdirSync(postsDir)
  return files.map(filename => {
    const filePath = path.join(postsDir, filename)
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const { data } = matter(fileContents)
    return { ...data, slug: filename.replace(/\.md$/, '') }
  })
}

export async function getArticleBySlug(slug) {
  const filePath = path.join(postsDir, `${slug}.md`)
  const fileContents = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(fileContents)
  const processed = await remark().use(html).process(content)
  return { ...data, content: processed.toString() }
}
