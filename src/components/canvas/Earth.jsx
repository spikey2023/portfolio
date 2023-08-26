import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Preload, useGLTF } from "@react-three/drei"


import CanvasLoader from '../Loader'


const Earth = () => {

  //import Earth 3d model
  const earth = useGLTF('./planet/scene.gltf')

  return (
    <primitive
      object={earth.scene} 
      scale={2.5}
      position-y={0}
      rotation-y={0}
      />
  )
}


const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      gl={{ preserveDrawingBuffer:true }}
      camera={{
        fov:45,
        near:0.1,
        far:200,
        position: [-4,3,6]
       }}
      >
        {/* Suspense shows loading while model is loading */}
        <Suspense fallback={<CanvasLoader />}>

        {/* configure camera and rotation */}
        <OrbitControls 
          autoRotate
          enableZoom={false}
          maxPolarAngle={ Math.PI / 2 }
          minPolarAngle={ Math.PI / 2}
          />

        <Earth />
       </Suspense>
    </Canvas>
  )
}
export default EarthCanvas