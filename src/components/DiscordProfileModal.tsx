import { motion, AnimatePresence } from 'framer-motion'

interface DiscordAvatar {
  link: string
}

interface DiscordBanner {
  link: string
}

interface DiscordData {
  username: string
  global_name?: string
  discriminator: string
  avatar?: DiscordAvatar
  banner?: DiscordBanner
  status?: 'online' | 'idle' | 'dnd' | 'offline'
  badges?: string[]
  created_at?: string
  banner_color?: string
  accent_color?: string
}

interface DiscordProfileModalProps {
  isOpen: boolean
  onClose: () => void
  discordData: DiscordData | null
  loading: boolean
  error: string | null
}

const DiscordProfileModal: React.FC<DiscordProfileModalProps> = ({ 
  isOpen, 
  onClose, 
  discordData, 
  loading, 
  error 
}) => {
  const getBadgeIcon = (badgeName: string): string | null => {
    const lowerBadge = badgeName.toLowerCase()
    if (lowerBadge.includes('house_balance') || lowerBadge.includes('balance')) {
      return 'https://img.icons8.com/?size=512&id=B1RNuFJol4fr&format=png'
    }
    if (lowerBadge.includes('active_developer') || lowerBadge.includes('developer')) {
      return 'https://img.icons8.com/fluent/600/discord-active-developer-badge.png'
    }
    return null
  }

  const getStatusColor = (status: string): string => {
    switch (status) {
      case 'online': return 'bg-green-500'
      case 'idle': return 'bg-yellow-500'
      case 'dnd': return 'bg-red-500'
      default: return 'bg-gray-500'
    }
  }

  const getStatusText = (status: string): string => {
    return status === 'dnd' ? 'Do Not Disturb' : status
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={onClose}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative backdrop-blur-lg rounded-2xl max-w-md w-full border-2 shadow-2xl overflow-hidden"
              style={{
                backgroundColor: `${discordData?.banner_color || '#412e26'}ee`,
                borderColor: discordData?.accent_color || '#000000'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {discordData?.banner?.link && (
                <div 
                  className="absolute top-0 left-0 right-0 h-32 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${discordData.banner.link})`,
                    zIndex: 0
                  }}
                />
              )}
              
              <div className="relative z-10 p-6" style={{ paddingTop: discordData?.banner?.link ? '5rem' : '1.5rem' }}>
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 w-8 h-8 rounded-full text-white flex items-center justify-center hover:bg-black/20 transition-colors"
                  style={{ 
                    backgroundColor: discordData?.accent_color || '#000000'
                  }}
                >
                  ✕
                </button>

                <div className="text-center">
                  <div className="flex items-center justify-center mb-4">
                    <img 
                      src="https://brandlogos.net/wp-content/uploads/2021/11/discord-logo.png"
                      alt="Discord"
                      className="w-8 h-8 mr-2"
                    />
                    <h2 className="text-xl font-bold text-white">Discord Profile</h2>
                  </div>

                  {loading && (
                    <div className="flex items-center justify-center py-8">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-8 h-8 border-2 border-gray-300 border-t-gray-800 rounded-full"
                      />
                    </div>
                  )}

                  {error && (
                    <div className="text-red-600 py-4">
                      <p>Error al cargar la información de Discord</p>
                      <p className="text-sm text-gray-500 mt-2">{error}</p>
                    </div>
                  )}

                  {discordData && !loading && !error && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="space-y-4"
                    >
                      <div className="flex justify-center">
                        <div className="relative">
                          <img
                            src={discordData.avatar?.link || 'https://cdn.discordapp.com/embed/avatars/0.png'}
                            alt="Discord Avatar"
                            className="w-20 h-20 rounded-full border-4 relative z-10"
                            style={{ 
                              borderColor: discordData?.accent_color || '#000000'
                            }}
                          />
                          {discordData.status && (
                            <div className={`absolute -bottom-1 -right-1 w-6 h-6 rounded-full border-2 border-white z-20 ${getStatusColor(discordData.status)}`} />
                          )}
                        </div>
                      </div>

                      <div>
                        <h3 className="text-lg font-bold text-white">
                          {discordData.username}
                        </h3>
                        {discordData.global_name && discordData.global_name !== discordData.username && (
                          <p className="text-gray-200">{discordData.global_name}</p>
                        )}
                        <p className="text-sm text-gray-300">#{discordData.discriminator}</p>
                      </div>

                      {discordData.status && (
                        <div className="flex items-center justify-center gap-2">
                          <div className={`w-3 h-3 rounded-full ${getStatusColor(discordData.status)}`} />
                          <span className="text-sm text-gray-200 capitalize">
                            {getStatusText(discordData.status)}
                          </span>
                        </div>
                      )}

                      <div>
                        <p className="text-sm font-medium text-white mb-2">Badges</p>
                        <div className="flex flex-wrap justify-center gap-2">
                          {discordData.badges && discordData.badges.map((badge, index) => {
                            const badgeIcon = getBadgeIcon(badge)

                            return (
                              <div
                                key={index}
                                className="flex items-center gap-1 px-2 py-1 text-white text-xs rounded-full"
                                style={{ 
                                  backgroundColor: discordData?.accent_color || '#000000' 
                                }}
                              >
                                {badgeIcon && (
                                  <img 
                                    src={badgeIcon} 
                                    alt={badge}
                                    className="w-4 h-4 object-contain"
                                  />
                                )}
                                <span>{badge}</span>
                              </div>
                            )
                          })}
                          
                          <div className="flex items-center gap-1 px-2 py-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs rounded-full">
                            <img 
                              src="https://img.icons8.com/?size=512&id=S6odLj8qKMjU&format=png" 
                              alt="Discord Nitro"
                              className="w-4 h-4 object-contain"
                            />
                            <span>Discord Nitro</span>
                          </div>
                          
                          <div className="flex items-center gap-1 px-2 py-1 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-xs rounded-full">
                            <img 
                              src="https://cdn3.emoji.gg/emojis/6722-evolving-badge-nitro-animated.gif" 
                              alt="Server Booster"
                              className="w-4 h-4 object-contain"
                            />
                            <span>Server Booster</span>
                          </div>
                        </div>
                      </div>

                      {discordData.created_at && (
                        <div className="text-xs text-gray-300">
                          <p>Cuenta creada: {new Date(discordData.created_at).toLocaleDateString()}</p>
                        </div>
                      )}
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default DiscordProfileModal