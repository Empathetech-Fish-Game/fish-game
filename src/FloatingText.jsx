/* eslint-disable react/no-unknown-property */
import React from 'react';
import { Center, Float, Loader, OrbitControls, Text3D, useMatcapTexture } from '@react-three/drei';

export default function FloatingText() {
  const [matcapTexture] = useMatcapTexture('365123_C6E5A3_A8D18D_8EB16C', 256);

  return (
    <Center position={[0, 2, 0]}>
      <Float
        floatIntensity={0.1}
        floatSpeed={1}
        floatFrequency={0.5}
        rotationIntensity={0.5}
        rotationSpeed={0.5}
        rotationFrequency={5}
        scale={0.5}
      >
        <mesh>
          <Text3D
            font={'/Calistoga_Regular.json'}
            size={2}
            height={0.4}
            curveSegments={4}
            bevelEnabled
            bevelThickness={0.01}
            bevelSize={0.1}
            bevelOffset={0}
            bevelSegments={2}
          >
            Hello World
            <meshMatcapMaterial matcap={matcapTexture} />
          </Text3D>
        </mesh>
      </Float>
    </Center>
  );
}
