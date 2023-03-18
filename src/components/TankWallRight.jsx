/* eslint-disable react/no-unknown-property */
import React from 'react';
import { RigidBody, CuboidCollider } from '@react-three/rapier';

export default function TankWall() {
  return (
    <RigidBody
      type="fixed"
      friction={1}
      restitution={0.5}
      position={[0, 0, -3.05]}
      gravityScale={0}
      sensor
    >
      <mesh>
        <boxGeometry args={[12.2, 8, 0.1]} />
        <meshBasicMaterial
          color="#FFFFFF"
          transparent={true}
          opacity={0.15}
        />
      </mesh>
      {/* <CuboidCollider args={[0.2, 8, 6]} /> */}
    </RigidBody>
  );
}
