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

  const updateFishPathing = (targetFish) => {
    const fishMovementInPlace = fishRef.current.rotation.y = (0.75 * Math.sin(time) * 0.5) / Math.PI;

    if (targetFish.current.position.x < -4) {
      targetFish.rotation = randomnumber
    }
    let rando = Math.random();
    if (rando > 0.5) {

    }



  };


  useFrame(({ clock }) => {
    const time = clock.elapsedTime;
    //fishRef.current.position.x = Math.sin(time) * (Math.PI * -0.25);
    //fishRef.current.position.z = Math.cos(time) * (Math.PI * -0.5);
    fishRef.current.rotation.y = (0.75 * Math.sin(time) * 0.5) / Math.PI;
  });

  

  return (
    <group ref={fishRef} scale={0.1} position={[0, 0, 0]} rotation={rotation}>
      <RigidBody gravityScale={0} colliders="ball" type="dynamic">
        <primitive object={fish.scene} />
      </RigidBody>
    </group>
  );
}
