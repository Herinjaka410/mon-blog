import {
    FaLinkedin,
    FaFacebook,
    FaPinterest,
    FaReddit,
    FaTwitter,
    FaEnvelope,
    FaWhatsapp
  } from 'react-icons/fa'
  
  export default function ShareBar() {
    const shareUrl = typeof window !== 'undefined' ? window.location.href : ''
    const title = "Découvrez ce super article sur MonBlog!"
  
    const shareLinks = [
      {
        icon: <FaLinkedin size={20} />,
        url: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(title)}`,
        color: 'bg-[#0077B5] hover:bg-[#006097]'
      },
      {
        icon: <FaFacebook size={20} />,
        url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
        color: 'bg-[#4267B2] hover:bg-[#365899]'
      },
      {
        icon: <FaTwitter size={20} />,
        url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(title)}`,
        color: 'bg-[#1DA1F2] hover:bg-[#1991DB]'
      },
      {
        icon: <FaPinterest size={20} />,
        url: `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(shareUrl)}&description=${encodeURIComponent(title)}`,
        color: 'bg-[#E60023] hover:bg-[#CC001F]'
      },
      {
        icon: <FaReddit size={20} />,
        url: `https://www.reddit.com/submit?url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(title)}`,
        color: 'bg-[#FF5700] hover:bg-[#E04E00]'
      },
      {
        icon: <FaEnvelope size={20} />,
        url: `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(`${title}\n\nLisez cet article: ${shareUrl}`)}`,
        color: 'bg-gray-600 hover:bg-gray-700'
      },
      {
        icon: <FaWhatsapp size={20} />,
        url: `https://wa.me/?text=${encodeURIComponent(`${title} ${shareUrl}`)}`,
        color: 'bg-[#25D366] hover:bg-[#1DA851]'
      }
    ]
  
    return (
      <div className="fixed right-4 top-1/2 transform -translate-y-1/2 hidden lg:flex flex-col space-y-3 z-40">
        {shareLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`${link.color} text-white w-10 h-10 rounded-full flex items-center justify-center transition-all shadow-md hover:shadow-lg`}
            aria-label="Partager"
          >
            {link.icon}
          </a>
        ))}
      </div>
    )
  }
  