import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader'


const Computers = ({ isMobile }) => {
  const {scene} = useGLTF("./computer/scene.glb")
  return (
    <mesh>
      <hemisphereLight intensity={1.5} groundColor="black" />
      <pointLight intensity={1.5}/>
      <spotLight 
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive object={scene}
       scale={isMobile ? 0.015 : 0.02} 
       position={isMobile ? [0, -2.2, 0] :[0, -2.19, -0.1]}
       rotation={[-0.01, 1.4, -0.01]} 
      />
    </mesh>
  )
}

const ComputersCanvas = () => {
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
    <Canvas
      frameloop='demand'
      shadows
      camera={{ position : [20, 3, 5], fov: 25}}
      gl={{ preserveDrawingBuffer: true,}}
    >
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls
         enableZoom={false} 
         maxPolarAngle={Math.PI / 2}
         minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all/>
    </Canvas>
  )
}

export default ComputersCanvas