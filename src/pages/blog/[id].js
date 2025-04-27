import { useRouter } from 'next/router'
import Head from 'next/head'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ShareBar from '../../components/ShareBar'

const posts = [
  // Même liste que dans blog.js
]

export default function Post() {
  const router = useRouter()
  const { id } = router.query
  const post = posts.find(p => p.id === Number(id))

  if (!post) {
    return <div>Article non trouvé</div>
  }

  return (
    <>
      <Head>
        <title>{post.title} | MonBlog</title>
        <meta name="description" content={post.excerpt} />
      </Head>

      <Header />
      <ShareBar />
      
      <main className="min-h-screen py-16 bg-gray-50">
        <div className="container max-w-3xl">
          <article className="bg-white rounded-lg shadow-md p-8">
            <span className="inline-block px-3 py-1 text-sm text-primary bg-primary/10 rounded-full mb-4">
              {post.category}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
            <time className="text-gray-500 text-sm block mb-8">{post.date}</time>
            
            <div 
              className="prose max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            
            <div className="mt-12 pt-6 border-t border-gray-200">
              <h3 className="text-lg font-semibold mb-4">Partager cet article:</h3>
              <div className="flex space-x-3">
                <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`} 
                   target="_blank"
                   rel="noopener noreferrer"
                   className="bg-[#4267B2] text-white p-2 rounded-full">
                  <FaFacebook size={20} />
                </a>
                {/* Ajoutez les autres icônes de partage */}
              </div>
            </div>
          </article>
        </div>
      </main>

      <Footer />
    </>
  )
}