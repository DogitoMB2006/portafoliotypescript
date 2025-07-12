import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import axios from 'axios'
import DiscordProfileModal from './DiscordProfileModal'

interface DiscordData {
  username: string
  global_name?: string
  discriminator: string
  avatar?: {
    link: string
  }
  banner?: {
    link: string
  }
  status?: 'online' | 'idle' | 'dnd' | 'offline'
  badges?: string[]
  created_at?: string
  banner_color?: string
  accent_color?: string
}

interface SocialLink {
  name: string
  url: string
  icon: string
  color: string
  hoverColor: string
  border: string
  onClick: ((e: React.MouseEvent<HTMLAnchorElement>) => void) | null
}

const SocialLinks: React.FC = () => {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)
  const [isDiscordModalOpen, setIsDiscordModalOpen] = useState<boolean>(false)
  const [discordData, setDiscordData] = useState<DiscordData | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const USER_ID = '1339818247184322571'

  const fetchDiscordData = async (): Promise<void> => {
    setLoading(true)
    setError(null)
    try {
      const response = await axios.get<DiscordData>(`https://discordlookup.mesalytic.moe/v1/user/${USER_ID}`)
      setDiscordData(response.data)
    } catch (err) {
      console.error('Error fetching Discord data:', err)
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.message || 'Error de conexión')
      } else {
        setError('Error desconocido')
      }
    } finally {
      setLoading(false)
    }
  }

  const handleDiscordClick = (e: React.MouseEvent<HTMLAnchorElement>): void => {
    e.preventDefault()
    setIsDiscordModalOpen(true)
    if (!discordData) {
      fetchDiscordData()
    }
  }

  const socialLinks: SocialLink[] = [
    {
      name: 'GitHub',
      url: 'https://github.com/DogitoMB2006',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png',
      color: 'from-gray-200 to-white',
      hoverColor: 'hover:shadow-black/30',
      border: 'border-gray-800',
      onClick: null
    },
    {
      name: 'LinkedIn',
      url: '#',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png',
      color: 'from-gray-100 to-gray-200',
      hoverColor: 'hover:shadow-black/30',
      border: 'border-gray-700',
      onClick: null
    },
    {
      name: 'X',
      url: '#',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/X_icon_2.svg/1483px-X_icon_2.svg.png',
      color: 'from-white to-gray-100',
      hoverColor: 'hover:shadow-black/30',
      border: 'border-gray-600',
      onClick: null
    },
    {
      name: 'Discord',
      url: '#',
      icon: 'https://brandlogos.net/wp-content/uploads/2021/11/discord-logo.png',
      color: 'from-gray-200 to-gray-300',
      hoverColor: 'hover:shadow-black/30',
      border: 'border-gray-800',
      onClick: handleDiscordClick
    }
  ]

  return (
    <>
      <div className="mt-4 sm:mt-6">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-full blur-xl"></div>
          <div className="relative flex justify-center gap-3 sm:gap-4">
            {socialLinks.map((link, index) => (
              <div key={link.name} className="relative">
                <motion.a
                  href={link.url}
                  className={`
                    w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full bg-gradient-to-br ${link.color} 
                    flex items-center justify-center text-black text-base sm:text-lg lg:text-xl
                    transform transition-all duration-300 hover:scale-110 ${link.hoverColor}
                    hover:shadow-lg animate-fadeIn border-2 ${link.border}
                    relative overflow-hidden cursor-pointer
                  `}
                  style={{
                    animationDelay: `${index * 0.1}s`
                  }}
                  onMouseEnter={() => setHoveredLink(link.name)}
                  onMouseLeave={() => setHoveredLink(null)}
                  onClick={link.onClick || undefined}
                  whileHover={{ 
                    scale: 1.1,
                    transition: { type: "spring", stiffness: 400, damping: 10 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent"></div>
                  <motion.img 
                    src={link.icon}
                    alt={link.name}
                    className="relative z-10 w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 object-contain transition-transform duration-300 filter grayscale hover:grayscale-0"
                    animate={hoveredLink === link.name ? { scale: 1.25 } : { scale: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
                
                <AnimatePresence>
                  {hoveredLink === link.name && (
                    <motion.div 
                      className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 pointer-events-none"
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span className="text-white/80 text-xs sm:text-sm font-medium bg-black/60 px-2 py-1 rounded-md backdrop-blur-sm whitespace-nowrap">
                        {link.name}
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>

      <DiscordProfileModal
        isOpen={isDiscordModalOpen}
        onClose={() => setIsDiscordModalOpen(false)}
        discordData={discordData}
        loading={loading}
        error={error}
      />
    </>
  )
}

export default SocialLinks