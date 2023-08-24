import React from 'react'
import { Suspense, useEffect, useState} from 'react'

//import empty canvas to place things on it
import { Canvas } from '@react-three/fiber'

//draw on canvas and import 3d models
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import CanvasLoader from '../Loader'

const Computers = () => {
    //import GLTF PC model
    const computer = useGLTF('./desktop_pc/scene.gltf')


  return (
    //use mesh instead of div for three.js models
      <mesh>
        <hemisphereLight intensity={4}
        groundColor="black" />
        <pointLight intensity={1} />
        <spotLight
          position={[-20,50,10]}
          angle={0.12}
          penumbra={1}
          intensity={1}
          castShadow
          shadow-mapSize={1024}
          />
        <primitive 
          object = {computer.scene}
          scale = {0.75}
          position = {[0,-3.25, -1.5]}
          rotation = {[-0.01, -0.2, -0.1]}
        />
      </mesh>
  )
}

const ComputersCanvas = () => {
  return(
    <Canvas
      frameloop='demand'
      shadows
      camera = {{position: [20,3,5], fov:25 }}
      gl={{preserveDrawingBuffer:true }}
      >
          <Suspense >
        {/* <Suspense fallback={<CanvasLoader />}> */}
          <OrbitControls 
            enableZoom = {false}
            //rotate around a x axis
            maxPolarAngle={Math.PI / 2 }
            minPolarAngle={Math.PI / 2 } 
            />
            <mesh>
              <Computers />
            </mesh>
        </Suspense>
        <Preload all />
    </Canvas>
  )
}

export default ComputersCanvas