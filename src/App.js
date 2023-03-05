/* eslint-disable react/no-unknown-property */
import { Environment, Loader, OrbitControls, Sky } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import './App.css';
import * as THREE from 'three';
import { ACESFilmicToneMapping, sRGBEncoding } from 'three';
import { Suspense } from 'react';
import Box from './Box';
import FloatingText from './FloatingText';
import LowPolyFish from './LowPolyFish';

export default function App() {

  return (
    <Suspense fallback={<Loader />}>
      <Canvas
        shadows
        camera={{
          fov: 45,
          near: 0.1,
          far: 400,
          position: [0, 2, 8],
        }}
        gl={{
          antialias: true,
          toneMapping: ACESFilmicToneMapping,
          outputEncoding: sRGBEncoding,
        }}
      >
        {/* <color attach="background" args={['#111']} /> */}
        {/* <Sky /> */}
        {/* <Environment background blur={0} resolution={1024} preset="sunset" /> */}
        <ambientLight intensity={3} />
        <spotLight intensity={2} args={[0, 3, 4]} />
        <pointLight position={[20, 10, -10]} intensity={2} />
        <primitive object={new THREE.AxesHelper(2)} />
        <primitive object={new THREE.GridHelper(20, 20)} />
        <OrbitControls 
          makeDefault 
          enableDamping
          dampingFactor={0.1}
          enableZoom
          // the props below limit the rotation speed and range of the camera
          // for full freedom of movement, comment them out
          // rotateSpeed={0.25}
          // zoomSpeed={0.75}
          // minDistance={5}
          // maxDistance={15}
          // maxPolarAngle={Math.PI * 0.5}
          // minPolarAngle={Math.PI * 0.25}
          panSpeed={0.5}
        />
        {/* <FloatingText /> */}
        <LowPolyFish />
        <Box key="box" />
      </Canvas>
    </Suspense>
  );
}
