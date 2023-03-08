/* eslint-disable react/no-unknown-property */
import { Loader, OrbitControls, Environment } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import './App.css';
import * as THREE from 'three';
import { ACESFilmicToneMapping, sRGBEncoding } from 'three';
import { Suspense } from 'react';
import TankWater from './components/TankWater';
import LowPolyFish from './components/LowPolyFish';
import { Debug, Physics } from '@react-three/rapier';
import TankWallRear from './components/TankWallRear';
import TankWallFront from './components/TankWallFront';
import TankWallLeft from './components/TankWallLeft';
import TankWallRight from './components/TankWallRight';
import TankWallBottom from './components/TankWallBottom';
export default function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Canvas
        shadows
        camera={{
          fov: 45,
          near: 0.1,
          far: 400,
          position: [0, 12, 30],
        }}
        gl={{
          antialias: true,
          toneMapping: ACESFilmicToneMapping,
          outputEncoding: sRGBEncoding,
        }}
      >
        <color attach="background" args={['#0a0a0a']} />
        {/* {<Environment
          background
          blur={0.04}
          files={'./hall_of_finfish_4k.hdr'}
        />} */}
        <ambientLight intensity={5} />
        <spotLight intensity={2} args={[0, 3, 4]} />
        <pointLight position={[20, 10, -10]} intensity={2} />
        <primitive object={new THREE.AxesHelper(2)} />
        <primitive object={new THREE.GridHelper(20, 20)} />
        <OrbitControls
          makeDefault
          enableDamping
          dampingFactor={0.1}
          enableZoom
          panSpeed={0.5}
        />
        <Physics>
          <Debug />
          <LowPolyFish />
          <TankWallRear />
          <TankWallFront />
          <TankWallLeft />
          <TankWallRight />
          <TankWallBottom />

          <TankWater />
        </Physics>
      </Canvas>
    </Suspense>
  );
}
