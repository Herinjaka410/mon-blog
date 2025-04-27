import Link from 'next/link'
import { motion } from 'framer-motion'
//import Navbar from './Navbar'
import dynamic from 'next/dynamic'

// Chargement dynamique avec gestion d'erreur
const Navbar = dynamic(
    () => import('./Navbar').catch(() => () => <div>Menu indisponible</div>),
    { ssr: false }
  )

export default function Header() {
  return (
    <header className="bg-blue-600 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-white">
            MonBlog
          </Link>
          <Navbar />
        </div>
      </div>
    </header>
  )
}
