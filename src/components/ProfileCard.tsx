import { useState } from 'react'

const ProfileCard: React.FC = () => {
  const [isHovered, setIsHovered] = useState<boolean>(false)

  return (
    <div className="relative">
      <div className="absolute -inset-1 bg-gradient-to-r from-white to-gray-300 rounded-3xl blur-sm opacity-30 animate-pulse"></div>
      <div 
        className="relative bg-white/95 backdrop-blur-lg rounded-2xl p-4 sm:p-6 lg:p-8 shadow-2xl border-2 border-gray-800 transform transition-all duration-300 hover:scale-105 hover:shadow-gray-500/50"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="text-center">
          <div className="relative inline-block mb-4 sm:mb-6">
            <div className={`w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-full overflow-hidden border-4 border-black transition-all duration-300 ${isHovered ? 'animate-pulse' : ''} bg-gradient-to-br from-gray-100 to-gray-200`}>
              <img 
                src="https://i.pinimg.com/736x/ea/44/cf/ea44cf1db4a4b60f0eb831fdd40854ac.jpg" 
                alt="Jesus Reyes Jr. Profile"
                className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-300"
              />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.1),transparent_50%)] rounded-full"></div>
            </div>
            <div className={`absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-gray-700 to-black rounded-full border-2 sm:border-4 border-white transition-all duration-300 ${isHovered ? 'animate-bounce' : ''}`}></div>
          </div>
          
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-black mb-2 relative">
            <span className="bg-gradient-to-r from-gray-800 to-black bg-clip-text text-transparent font-black">
              Jesus Reyes Jr.
            </span>
            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-transparent via-black to-transparent"></div>
          </h1>
          
          <p className="text-gray-700 mb-3 sm:mb-4 text-sm sm:text-base font-medium">
            Desarrollador Full Stack
          </p>
          
          <div className="text-gray-800 text-xs sm:text-sm leading-relaxed">
            <p className="mb-2 sm:mb-3 italic">
              "Apasionado por la tecnología y el desarrollo web. 
              Creando experiencias digitales únicas, Y siempre aprendiendo algo nuevo."
            </p>
            <p className="font-medium">
              Siempre aprendiendo algo nuevo y explorando las últimas tendencias.
            </p>
          </div>
        </div>
        
        <div className="absolute top-4 right-4 opacity-20">
          <div className="w-8 h-8 border-2 border-black rounded-full flex items-center justify-center">
            <div className="w-2 h-2 bg-black rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileCard