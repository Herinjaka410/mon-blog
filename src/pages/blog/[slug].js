import { getArticleBySlug, getArticles } from '../../lib/contentful'

export async function getStaticPaths() {
  const articles = await getArticles()
  const paths = articles.map(article => ({
    params: { slug: article.fields.slug }
  }))
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const article = await getArticleBySlug(params.slug)
  return { props: { article } }
}

export default function Article({ article }) {
  // Affichez l'article ici
}
