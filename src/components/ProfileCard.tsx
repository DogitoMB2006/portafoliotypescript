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
                src="https://i.imgur.com/ZEDxoWW.png" 
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
          
          <div className="text-gray-800 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">
            <p className="mb-2 sm:mb-3 italic">
              "Apasionado por la tecnología y el desarrollo web. 
              Creando experiencias digitales únicas, Y siempre aprendiendo algo nuevo."
            </p>
            <p className="font-medium">
              Siempre aprendiendo algo nuevo y explorando las últimas tendencias.
            </p>
          </div>
          
          {/* la secion de tecnologi */}
          <div className="mt-4 sm:mt-6">
            <h3 className="text-sm sm:text-base font-bold text-black mb-3 sm:mb-4 text-center">
              <span className="bg-gradient-to-r from-gray-800 to-black bg-clip-text text-transparent">
                Tecnologías
              </span>
            </h3>
            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              <div className="flex flex-col items-center p-2 sm:p-3 bg-white/50 rounded-xl border border-gray-300 hover:bg-white/70 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1024px-Typescript_logo_2020.svg.png"
                  alt="TypeScript"
                  className="w-6 h-6 sm:w-8 sm:h-8 object-contain mb-1 sm:mb-2"
                />
                <span className="text-xs font-medium text-gray-700">TypeScript</span>
              </div>
              
              <div className="flex flex-col items-center p-2 sm:p-3 bg-white/50 rounded-xl border border-gray-300 hover:bg-white/70 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png"
                  alt="React"
                  className="w-6 h-6 sm:w-8 sm:h-8 object-contain mb-1 sm:mb-2"
                />
                <span className="text-xs font-medium text-gray-700">React</span>
              </div>
              
              <div className="flex flex-col items-center p-2 sm:p-3 bg-white/50 rounded-xl border border-gray-300 hover:bg-white/70 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <img 
                  src="https://media.discordapp.net/attachments/1381270731215601764/1393248843000447067/image.png?ex=68727b99&is=68712a19&hm=77d98c6c078c063c0f81bba469997d1eb0918474ac0d6bc9f1102e91e0ea80c2&=&format=webp&quality=lossless"
                  alt="Vite"
                  className="w-6 h-6 sm:w-8 sm:h-8 object-contain mb-1 sm:mb-2"
                />
                <span className="text-xs font-medium text-gray-700">Vite</span>
              </div>
              
              <div className="flex flex-col items-center p-2 sm:p-3 bg-white/50 rounded-xl border border-gray-300 hover:bg-white/70 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png"
                  alt="JavaScript"
                  className="w-6 h-6 sm:w-8 sm:h-8 object-contain mb-1 sm:mb-2"
                />
                <span className="text-xs font-medium text-gray-700">JavaScript</span>
              </div>
              
              <div className="flex flex-col items-center p-2 sm:p-3 bg-white/50 rounded-xl border border-gray-300 hover:bg-white/70 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <img 
                  src="https://img.beget.com/cp/plain/shared/xoKELFIyHKF4-V5ZaKBvDC7xhOoZJW71/logo_nodejs2x.png@.webp"
                  alt="Node.js"
                  className="w-6 h-6 sm:w-8 sm:h-8 object-contain mb-1 sm:mb-2"
                />
                <span className="text-xs font-medium text-gray-700">Node.js</span>
              </div>
              
              <div className="flex flex-col items-center p-2 sm:p-3 bg-white/50 rounded-xl border border-gray-300 hover:bg-white/70 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <img 
                  src="https://www.ibm.com/adobe/dynamicmedia/deliver/dm-aid--661ce075-6574-4ae6-a2bd-ce1c3b1f7a49/mongodb.png?preferwebp=true&quality=90"
                  alt="MongoDB"
                  className="w-6 h-6 sm:w-8 sm:h-8 object-contain mb-1 sm:mb-2"
                />
                <span className="text-xs font-medium text-gray-700">MongoDB</span>
              </div>
            </div>
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