/* eslint-disable react/no-unknown-property */
import React from 'react';
import { useRef } from 'react';

export default function TankWater() {
  const boxRef = useRef();

  return (
    <mesh
      ref={boxRef}
      position={[0, 0, 0]}

    >
      <boxBufferGeometry args={[12, 8, 6]} />
      <meshBasicMaterial 
        color="#00ffff"
        transparent={true} 
        opacity={0.5} 
      />
    </mesh>
  );
}
