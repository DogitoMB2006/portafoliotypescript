import { useState, useEffect } from 'react'

const Banner: React.FC = () => {
  const [currentText, setCurrentText] = useState<number>(0)
  const [isVisible, setIsVisible] = useState<boolean>(true)

  const texts: string[] = [
    "¡Hola! Soy Jesus Reyes Jr.",
    "Hello! I'm Jesus Reyes Jr.",
    "こんにちは！",
    "Bienvnidos a mi portafolio",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false)
      setTimeout(() => {
        setCurrentText((prev) => (prev + 1) % texts.length)
        setIsVisible(true)
      }, 300)
    }, 3000)

    return () => clearInterval(interval)
  }, [texts.length])

  return (
    <div className="text-center mb-6 sm:mb-8">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-white to-gray-300 rounded-3xl blur-lg opacity-40 animate-pulse"></div>
        <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border-2 border-gray-800 shadow-2xl">
          <div className="absolute top-2 left-2 w-3 h-3 bg-black rounded-full opacity-20"></div>
          <div className="absolute top-2 right-2 w-3 h-3 bg-black rounded-full opacity-20"></div>
          
          <div className="flex items-center justify-center gap-1 sm:gap-2 mb-2">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-black rounded-full animate-ping"></div>
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-700 rounded-full animate-ping delay-100"></div>
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-500 rounded-full animate-ping delay-200"></div>
          </div>
          
          <h2 className={`text-lg sm:text-xl lg:text-2xl font-bold text-black mt-3 sm:mt-4 transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'} manga-text-shadow`}>
            <span className="bg-gradient-to-r from-gray-800 to-black bg-clip-text text-transparent">
              {texts[currentText]}
            </span>
          </h2>
          
          <div className="mt-2 text-2xl sm:text-3xl filter grayscale">
            <span className="animate-wave inline-block">👋</span>
          </div>
          
          <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-gradient-to-r from-transparent via-black to-transparent"></div>
        </div>
      </div>
    </div>
  )
}

export default Banner