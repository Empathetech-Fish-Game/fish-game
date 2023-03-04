/* eslint-disable react/no-unknown-property */
import { useFrame } from '@react-three/fiber';
import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';

export default function Box() {
  const boxRef = useRef();

  const [clicked, setClicked] = useState();

  useFrame((state, delta) => {
    {
      clicked
        ? (boxRef.current.rotation.y += 2 * delta)
        : (boxRef.current.rotation.y += 0.5 * delta);
    }
  });

  return (
    <mesh
      ref={boxRef}
      position={[0, 0, 0]}
      onClick={() => setClicked(!clicked)}
      scale={clicked ? [2, 2, 2] : [1, 1, 1]}
    >
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshPhongMaterial color="#440066" />
    </mesh>
  );
}
