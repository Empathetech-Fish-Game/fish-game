/* eslint-disable react/no-unknown-property */
import React from 'react';
import { useGLTF } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { RigidBody } from '@react-three/rapier';

//improved console logging to better view realtime fish data
var vlog = (function() {
  return {
    log: function() {
      var args = Array.prototype.slice.call(arguments);
      // eslint-disable-next-line no-console
      console.log.apply(console, args);
    },
    warn: function() {
      var args = Array.prototype.slice.call(arguments);
      // eslint-disable-next-line no-console
      console.warn.apply(console, args);
    },
    error: function() {
      var args = Array.prototype.slice.call(arguments);
      // eslint-disable-next-line no-console
      console.error.apply(console, args);
    }
  };
}());

export default function Clownfish({ rotation, position }) {
  const fish = useGLTF('/Clownfish.glb');
  const fishRef = useRef();

  let zVelocity = 0.03;
  let xVelocity = 0;
  let yVelocity = 0;
  let yOffset = 0;
  let turnWeight = 3;
  let rotYOffset = 0;

  useFrame(({ clock }) => {
    const time = clock.elapsedTime;

    const updateFishPathing = (targetFish) => {
      //tail movement:
      //fishRef.current.rotation.y = (0.75 * Math.sin(time) * 0.5) / Math.PI;

      //if the fish reaches a fishtank wall, turn and swim away from that wall
      if (targetFish.current.position.z >= 2.3) {
        fishRef.current.rotation.y = 160;
        zVelocity = -0.03 * (Math.random() + 0.35);
      }

      else if (targetFish.current.position.z <= -2.6) {
        fishRef.current.rotation.y = 0;
        zVelocity = 0.03 * (Math.random() + 0.5);
      }

      xVelocity = targetFish.current.rotation.x * zVelocity * turnWeight;

      if (zVelocity > 0) {
        rotYOffset = targetFish.current.rotation.y;
      }
      else {
        rotYOffset = -(160 - targetFish.current.rotation.y);
      }
      yVelocity = rotYOffset * zVelocity * turnWeight;

      let rando = Math.floor(Math.random() * 100) + 1; //random int between 1 and 100

      if (rando > 95) {
        const rotationXWeight = 2;
        const rotationYWeight = 7;

        //randomize the fish velocity
        let randRotationX = (Math.random() / 100 * rotationXWeight);
        let randRotationY = (Math.random() / 100 * rotationYWeight);


        //half the time, rotate in the other direction.
        if (Math.random() < 0.5) {
          randRotationX = -randRotationX;
        }
        if (Math.random() < 0.5) {
          randRotationY = -randRotationY;
        }

        //rotate the fish along the X and Y axes:
        targetFish.current.rotation.x = targetFish.current.rotation.x + randRotationX;
        targetFish.current.rotation.y = targetFish.current.rotation.y + randRotationY;

      }

      /*
      TODO:
      modify current velocity by adding or subtracting a small amount
      */

      /*
      TODO: adjust the direction of movement relative to the rotation:
      The fish should always travel straight forward from its POV
      */

      let fishData = {
        xPos: targetFish.current.position.x, yPos: targetFish.current.position.y,
        // zPos: targetFish.current.position.z,
        xRot: targetFish.current.rotation.x, yRot: targetFish.current.rotation.y,
        xVel: xVelocity, yVel: yVelocity, zVel: zVelocity,
      };

    //   vlog.log(fishData);


      yOffset = yOffset + yVelocity;
      //bob up and down a little
      targetFish.current.position.y = (Math.sin(time * 2) * (Math.PI * -0.03)) + yOffset;

      targetFish.current.position.z = targetFish.current.position.z + zVelocity;
      targetFish.current.position.x = targetFish.current.position.x + xVelocity;
    };

    updateFishPathing(fishRef);

  });



  return (
    <group ref={fishRef} scale={0.25} position={position} rotation={rotation}>
      <RigidBody gravityScale={0} colliders="ball" type="dynamic">
        <primitive object={fish.scene} />
      </RigidBody>
    </group>
  );
}
