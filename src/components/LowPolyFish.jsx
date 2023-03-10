/* eslint-disable react/no-unknown-property */
import React from 'react';
import { useGLTF } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { RigidBody } from '@react-three/rapier';


export default function LowPolyFish() {
  const fish = useGLTF('/models/Fish.glb');
  const fishRef = useRef();

  const rotation = [0, 0, 0];




  useFrame(({ clock }) => {
    const time = clock.elapsedTime;

    const updateFishPathing = (targetFish) => {
      //const fishMovementInPlace = fishRef.current.rotation.y = (0.75 * Math.sin(time) * 0.5) / Math.PI;
      //fishRef.current.rotation.y = (0.75 * Math.sin(time) * 0.5) / Math.PI;
      if (targetFish.current.position.x < -4) {
        targetFish.rotation.y = targetFish.rotation.y + 180;
      }
      let rando = Math.floor(Math.random() * 100) + 1; //random int between 1 and 1000;

      if (rando > 95) {
        const rotationXWeight = 3;
        const rotationYWeight = 8;

        let randRotationX = (Math.random() / 100 * rotationXWeight);
        let randRotationY = (Math.random() / 100 * rotationYWeight);

        //half the time, rotate in the other direction.
        if (Math.random() < 0.5) {
          randRotationX = -randRotationX;
        }
        if (Math.random() < 0.5) {
          randRotationY = -randRotationY;
        }

        //rotate the fish along the X and Z axes:

        targetFish.current.rotation.x = targetFish.current.rotation.x + randRotationX;
        targetFish.current.rotation.y = targetFish.current.rotation.y + randRotationY;
        //set new rotation's X value to the old value + randRotationX
        //set new rotation's Z value to the old value + randRotationZ
      }

      /*
      TODO: maybe adjust the fish velocity to occasionally increase or decrease?
      modify current velocity by adding or subtracting a small amount
      */

      /*
      TODO: adjust the direction of movement relative to the rotation:
      The fish should always travel straight forward from its POV
      */
    };

    updateFishPathing(fishRef);
    //fishRef.current.position.x = Math.sin(time) * (Math.PI * -0.25);
    //fishRef.current.position.z = Math.cos(time) * (Math.PI * -0.5);
    //fishRef.current.rotation.y = (0.75 * Math.sin(time) * 0.5) / Math.PI;
  });



  return (
    <group ref={fishRef} scale={0.1} position={[0, 0, 0]} rotation={rotation}>
      <RigidBody gravityScale={0} colliders="ball" type="dynamic">
        <primitive object={fish.scene} />
      </RigidBody>
    </group>
  );
}
