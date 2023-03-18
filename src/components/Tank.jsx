/* eslint-disable react/no-unknown-property */
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useRef } from 'react';


const Water = (props) => {
  let boxRef = useRef();
  const { position, scale, color, opacity } = props;

  return (
    <mesh ref={boxRef} position={position} scale={scale}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial
        color={color}
        opacity={opacity}
        transparent
        side={THREE.DoubleSide}
        depthWrite={false}
      />
    </mesh>
  );
};

const Bottom = (props) => {
  const { position, scale, color, opacity, size } = props;
  const planeRef = useRef();
  useFrame((state, delta) => {
    planeRef.current.rotation.x = 3.141 / 2;
  });

  return (
    <mesh ref={planeRef} position={position} scale={scale}>
      <planeGeometry args={size} receiveShadow />
      <meshStandardMaterial
        color={color}
        opacity={opacity}
        transparent
        metalness={1}
        side={THREE.DoubleSide}
        depthWrite={false}
      />
    </mesh>
  );
};

const Tank = () => {
  return (
    <>
      <Water
        scale={[30, 20, 20]}
        position={[0, 0, 0]}
        color={[0, 0.3, 0.5]}
        opacity={0.3}
      />

      <Bottom
        color={[0, 0.2, 0.3]}
        size={[30, 20]}
        position={[0, -10, 0]}
        opacity={0.8}
        key={5}
        receiveShadow
      />
    </>
  );
};

export default Tank;