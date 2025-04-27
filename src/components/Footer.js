export default function Footer() {
    return (
      <footer className="bg-dark text-white py-8 mt-12">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold text-primary">MonBlog</h3>
              <p className="mt-2 text-light/80">Partagez vos idées avec le monde</p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary transition-colors">Mentions légales</a>
              <a href="#" className="hover:text-primary transition-colors">Confidentialité</a>
              <a href="#" className="hover:text-primary transition-colors">Contact</a>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-light/20 text-center text-light/60">
            <p>© {new Date().getFullYear()} MonBlog. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    )
  }
  