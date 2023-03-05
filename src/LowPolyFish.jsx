/* eslint-disable react/no-unknown-property */
import React from 'react';
import { useGLTF } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

export default function LowPolyFish() {
  const fish = useGLTF('/models/Fish.glb');
  const fishRef = useRef();

  useFrame((state, delta) => {
    fishRef.current.position.x += delta * -0.5;
  });

  return (
    <group ref={fishRef} scale={0.2} position={[4, 0, 4]} rotation={[0, Math.PI * -0.5, 0]}>
      <primitive object={fish.scene} />
    </group>
  );
}
