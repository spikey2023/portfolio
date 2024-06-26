import React from 'react'
import { Suspense, useEffect, useState} from 'react'

//import empty canvas to place things on it
import { Canvas } from '@react-three/fiber'

//draw on canvas and import 3d models
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import CanvasLoader from '../Loader'

const Computers = ({isMobile}) => {
    //import GLTF PC model
    const computer = useGLTF('./desktop_pc/scene.gltf')

  return (
    //use mesh instead of div for three.js models
      <mesh>
        <hemisphereLight intensity={4}
        groundColor="black" />
        <spotLight
          position={[-20,50,10]}
          angle={0.12}
          penumbra={1}
          intensity={1}
          castShadow
          shadow-mapSize={1024}
          />
          <pointLight intensity={1} />
        <primitive 
          object = {computer.scene}
          scale = {isMobile ? 0.60 : 0.50}
          position = {isMobile ? [0, -3, -2.2]: [0,-2.5, -1.5]}
          rotation = {isMobile ? [-0.01, -0.10, -0.1 ]:[-0.01, -0.50, -0.1] }
        />
      </mesh>
  )
}

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false)

  //check if we are on a mobile device
  useEffect (() => {
    //Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width:500px)")
    
    //Set the initial value of the 'isMobile' state variable
    setIsMobile(mediaQuery.matches);

    //Define a callback function to handle changes to media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches)
    }

    //Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener('change', handleMediaQueryChange)

    //Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange)
    }
  }, [])

  return(
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera = {{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer:true }}
      >
         
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls 
            enableZoom = {false}
            //rotate the model around x axis
            maxPolarAngle={Math.PI / 2 }
            minPolarAngle={Math.PI / 2 } 
            />
            {/* <mesh> */}
              <Computers isMobile={isMobile}/>
            {/* </mesh> */}
        </Suspense>
        <Preload all />
    </Canvas>
  )
}

export default ComputersCanvas