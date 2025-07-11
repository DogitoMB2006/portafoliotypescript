import { useState, useEffect } from 'react'
import ProfileCard from '../components/ProfileCard'
import SocialLinks from '../components/SocialLinks'
import Banner from '../components/Banner'

const Home: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Manga Background Animation */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="w-[200%] h-full bg-repeat-x animate-manga-scroll-slow"
          style={{
            backgroundImage: 'url(https://ae03.alicdn.com/kf/S298667e1ccaa46f2941e1e497d5184b0R.jpg_640x640q90.jpg)',
            backgroundSize: '50% 100%',
            backgroundPosition: '0% center'
          }}
        ></div>
      </div>
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-gray-800/90 to-black/80"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent)] opacity-30"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,transparent_30%,rgba(255,255,255,0.02)_50%,transparent_70%)] animate-pulse"></div>
      
      <div className="lg:flex lg:items-center lg:justify-center lg:min-h-screen">
        <div className={`transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="max-w-md mx-auto lg:max-w-lg p-4 lg:p-8">
            <Banner />
            <ProfileCard />
            <SocialLinks />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home