/* eslint-disable react/no-unknown-property */
import { Loader, OrbitControls, Environment } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import './App.css';
import * as THREE from 'three';
import { ACESFilmicToneMapping, sRGBEncoding } from 'three';
import { Suspense, useRef } from 'react';
import TankWater from './components/TankWater';
import LowPolyFishes from './components/LowPolyFishes';
import { Debug, Physics } from '@react-three/rapier';
import Corals from './components/Corals';
import Tank from './components/Tank';

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
        <Corals dimensions={[30, 19.8, 20]} num={100} />
        <ambientLight intensity={5} />
        <spotLight intensity={2} args={[0, 3, 4]} />
        <pointLight position={[20, 10, -10]} intensity={2} />
        <OrbitControls
          makeDefault
          enableDamping
          dampingFactor={0.1}
          enableZoom
          panSpeed={0.5}
        />
        <Physics>
          <Debug />
          <Tank />
          <LowPolyFishes num={100} />
        </Physics>
      </Canvas>
    </Suspense>
  );
}
