import { useEffect, useState } from 'react';
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { ComputersCanvas } from './canvas';
import { laptop } from '../assets'


const Hero = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    }

    mediaQuery.addEventListener('change', handleMediaQueryChange)

    return () =>{
      mediaQuery.removeEventListener('change', handleMediaQueryChange)
    }
  }, [])

  return (
    <section className='relative w-full h-screen mx-auto'>
      <div 
        className={`${styles.paddingX} 
        absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 `}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className='w-5 h-5 rounded-full bg-[#22c55e]' /> 
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white flex flex-wrap gap-3`}>
            Hi, I am <span className='text-[#22c55e] flex gap-3'>Onose <span className='sm:flex hidden'>Ogbidi</span></span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I'm a software engineer with 2+ years <br className='sm:block hidden' /> experience in building web applications.
          </p>
        </div>
      </div>

      {isMobile ? 
        <div className="relative top-[260px] w-full">
          <img src={laptop} alt="" />
        </div>
        :
        <ComputersCanvas/>
      }

      <div className="absolute xs:bottom-5 bottom-[60px] w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl 
          border-4 border-secondary flex 
          justify-center items-start p-2"
          >
            <motion.div
              animate={{
                y: [0, 24, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop"
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero