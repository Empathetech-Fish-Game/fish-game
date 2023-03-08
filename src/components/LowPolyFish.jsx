/* eslint-disable react/no-unknown-property */
import React from 'react';
import { useGLTF } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { RigidBody } from '@react-three/rapier';

export default function LowPolyFish() {
  const fish = useGLTF('/models/Fish.glb');
  const fishRef = useRef();

  const rotation = [0, Math.PI / -2, 0];

  useFrame(({ clock }) => {
    fishRef.current.position.x = Math.sin(clock.elapsedTime) * (Math.PI * -0.25);
    fishRef.current.position.z = Math.cos(clock.elapsedTime) * (Math.PI * -0.5);
    fishRef.current.rotation.y = Math.sin(clock.elapsedTime) * Math.PI;
  });

  return (
    <group ref={fishRef} scale={0.1} position={[0, 0, 0]} rotation={rotation}>
      <RigidBody gravityScale={0} colliders="hull" type="dynamic">
        <primitive object={fish.scene} />
      </RigidBody>
    </group>
  );
}
