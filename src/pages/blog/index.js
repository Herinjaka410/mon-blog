import { getArticles } from '../../lib/contentful'

export async function getStaticProps() {
  const articles = await getArticles()
  return { props: { articles } }
}

export default function Blog({ articles }) {
  // Utilisez articles comme avant
}
