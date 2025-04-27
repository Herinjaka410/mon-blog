import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ShareBar from '../components/ShareBar'

const posts = [
  {
    id: 1,
    title: 'Les 15 meilleurs blogs SEO à suivre en 2023',
    excerpt: 'Découvrez les blogs SEO incontournables cette année avec nos analyses approfondies.',
    date: '15 mars 2023',
    category: 'SEO',
    content: `
      <h2>Pourquoi suivre des blogs SEO?</h2>
      <p>Le SEO évolue constamment et suivre les bons blogs vous permet de rester à jour.</p>
      
      <h3>1. Moz Blog</h3>
      <p>La référence incontournable avec des guides complets pour tous niveaux.</p>
      
      <h3>2. Search Engine Journal</h3>
      <p>Actualités et analyses pointues des dernières mises à jour des algorithmes.</p>
      
      <!-- Continuez avec les autres blogs -->
    `
  },
  {
    id: 2,
    title: 'Google Discover : comment booster votre trafic',
    excerpt: 'Stratégies avancées pour apparaître dans Google Discover et multiplier votre audience.',
    date: '10 mars 2023',
    category: 'Marketing',
    content: `
      <h2>Qu'est-ce que Google Discover?</h2>
      <p>Un flux de contenu personnalisé sur mobile qui peut générer un trafic massif.</p>
      
      <h3>Stratégies clés:</h3>
      <ul>
        <li>Contenu visuel de haute qualité</li>
        <li>Titres accrocheurs mais précis</li>
        <li>Actualisation régulière du contenu</li>
      </ul>
    `
  },
  {
    id: 3,
    title: 'Affiliate marketing : monétisez votre site',
    excerpt: 'Guide complet pour générer des revenus avec des programmes d\'affiliation.',
    date: '5 mars 2023',
    category: 'Monétisation',
    content: `
      <h2>Les meilleurs programmes d'affiliation</h2>
      <p>Amazon Associates, ShareASale, CJ Affiliate...</p>
      
      <h3>Conseils pour maximiser vos revenus:</h3>
      <p>Créez des comparatifs détaillés et des guides d'achat.</p>
    `
  }
]

export default function Blog() {
  return (
    <>
      <Head>
        <title>MonBlog - Articles</title>
        <meta name="description" content="Tous nos articles de blog" />
      </Head>

      <Header />
      <ShareBar />
      
      <main className="min-h-screen py-16 bg-gray-50">
        <div className="container max-w-5xl">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h1 className="text-4xl font-bold mb-6">Blog</h1>
            
            <div className="mb-8 border-b pb-6">
              <p className="text-lg text-gray-600">Abonnez-vous à notre blog via RSS pour ne rien manquer.</p>
              <div className="w-16 h-1 bg-primary my-4"></div>
            </div>

            <div className="space-y-10">
              {posts.map(post => (
                <article key={post.id} className="border-b border-gray-200 pb-10 last:border-0">
                  <span className="inline-block px-3 py-1 text-sm text-primary bg-primary/10 rounded-full mb-3">
                    {post.category}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold mt-2 hover:text-primary transition-colors">
                    <Link href={`/blog/${post.id}`} className="block">{post.title}</Link>
                  </h2>
                  <time className="text-gray-500 text-sm block mt-1">{post.date}</time>
                  <p className="mt-4 text-gray-600 leading-relaxed">{post.excerpt}</p>
                  <Link 
                    href={`/blog/${post.id}`} 
                    className="inline-flex items-center mt-6 text-primary font-medium hover:underline group"
                  >
                    Lire l'article complet
                    <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}