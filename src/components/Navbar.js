import { useState } from 'react'
import Link from 'next/link'
import { FiMenu, FiX, FiSearch } from 'react-icons/fi'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`
    }
  }

  return (
    <>
      {/* Desktop Navigation - Centré */}
      <nav className="hidden md:flex items-center space-x-8 mx-8">
        <Link href="/" className="text-white hover:text-blue-200 px-2 py-1 font-medium transition-colors">
          Accueil
        </Link>
        <Link href="/blog" className="text-white hover:text-blue-200 px-2 py-1 font-medium transition-colors">
          Blog
        </Link>
        <Link href="/categories" className="text-white hover:text-blue-200 px-2 py-1 font-medium transition-colors">
          Catégories
        </Link>
        <Link href="/about" className="text-white hover:text-blue-200 px-2 py-1 font-medium transition-colors">
          À propos
        </Link>
        <Link href="/contact" className="text-white hover:text-blue-200 px-2 py-1 font-medium transition-colors">
          Contact
        </Link>
        
        <div className="relative">
          <form onSubmit={handleSearch} className="flex items-center">
            <input
              type="text"
              placeholder="Rechercher..."
              className="py-1 px-3 rounded-l-md focus:outline-none text-sm w-40 lg:w-56"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button 
              type="submit"
              className="bg-blue-700 text-white p-1.5 rounded-r-md hover:bg-blue-800 transition-colors"
              aria-label="Rechercher"
            >
              <FiSearch size={18} />
            </button>
          </form>
        </div>
      </nav>

      {/* Mobile Menu Button - Toujours à droite */}
      <div className="md:hidden flex items-center">
        <button 
          className="text-white focus:outline-none p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          {isOpen ? (
            <FiX size={24} className="transform transition-transform duration-300 rotate-180" />
          ) : (
            <FiMenu size={24} className="transform transition-transform duration-300" />
          )}
        </button>
      </div>

      {/* Mobile Navigation - Menu déroulant vertical */}
      {isOpen && (
        <div className="md:hidden absolute top-16 right-0 w-64 bg-white shadow-xl rounded-bl-md z-50">
          <nav className="flex flex-col py-4">
            <Link 
              href="/" 
              className="px-6 py-3 text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Accueil
            </Link>
            <Link 
              href="/blog" 
              className="px-6 py-3 text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Blog
            </Link>
            <Link 
              href="/categories" 
              className="px-6 py-3 text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Catégories
            </Link>
            <Link 
              href="/about" 
              className="px-6 py-3 text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              À propos
            </Link>
            <Link 
              href="/contact" 
              className="px-6 py-3 text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            
            <div className="px-6 py-4 border-t border-gray-200 mt-2">
              <form onSubmit={handleSearch} className="flex">
                <input
                  type="text"
                  placeholder="Rechercher..."
                  className="flex-1 py-2 px-3 border border-gray-300 rounded-l-md focus:outline-none focus:border-blue-500 text-sm"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button 
                  type="submit"
                  className="bg-blue-600 text-white p-2 rounded-r-md hover:bg-blue-700 transition-colors"
                  aria-label="Rechercher"
                >
                  <FiSearch size={18} />
                </button>
              </form>
            </div>
          </nav>
        </div>
      )}
    </>
  )
}
