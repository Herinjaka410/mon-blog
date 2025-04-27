import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>MonBlog - Accueil</title>
        <meta name="description" content="Un blog moderne créé avec Next.js" />
      </Head>

      <Header />
      
      <main className="min-h-screen">
        <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
          <div className="container text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Bienvenue sur MonBlog</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Découvrez des articles passionnants sur le développement web, le SEO et bien plus encore.
            </p>
            <button className="btn btn-primary mt-8">Explorer les articles</button>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <h2 className="text-3xl font-bold mb-8 text-center">Derniers articles</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Exemple d'article */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gray-200"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Titre de l'article</h3>
                  <p className="text-gray-600 mb-4">Un court extrait de l'article pour donner envie de lire plus...</p>
                  <a href="#" className="text-primary font-medium hover:underline">Lire plus</a>
                </div>
              </div>
              {/* Répétez pour d'autres articles */}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
