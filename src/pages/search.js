import { useRouter } from 'next/router'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Search() {
  const router = useRouter()
  const { q } = router.query

  return (
    <>
      <Head>
        <title>Résultats pour "{q}" | MonBlog</title>
      </Head>

      <Header />
      
      <main className="min-h-screen py-16 bg-gray-50">
        <div className="container max-w-5xl">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h1 className="text-2xl md:text-3xl font-bold mb-6">
              Résultats pour "{q}"
            </h1>
            
            <div className="space-y-6">
              {/* Ici vous intégrerez les résultats de recherche réels */}
              <p className="text-gray-600">Fonctionnalité de recherche à implémenter.</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
