import { useEffect, useState } from 'react';
import { BallCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { technologies } from "../constants"
import { Tilt } from 'react-tilt';

const Tech = () => {
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
    <div
      className="flex flex-row flex-wrap justify-center gap-10"
    >
      {technologies.map((technology) => (
        <div className="w-28 h-28 object-contain" key={technology.name}>
          {isMobile ? 
          <Tilt>
            <div 
            className="bg-tertiary border-[2px] border-solid border-[#22c55e] 
            rounded-full p-4"
            >
              <img src={technology.icon} alt="stacks" />
            </div>
          </Tilt>
          :<BallCanvas icon={technology.icon} />}
        </div>
      ))}
    </div>
  )
}

export default SectionWrapper(Tech, "")