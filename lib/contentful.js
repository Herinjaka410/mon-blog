const contentful = require('contentful')

const client = contentful.createClient({
  space: 'votre_id_espace',
  accessToken: 'votre_token_acces',
  environment: 'master' // Par défaut
})

export async function getArticles() {
  const res = await client.getEntries({ content_type: 'article' })
  return res.items
}

export async function getArticleBySlug(slug) {
  const res = await client.getEntries({
    content_type: 'article',
    'fields.slug': slug
  })
  return res.items[0]
}