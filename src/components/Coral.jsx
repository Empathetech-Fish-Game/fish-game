/* eslint-disable react/no-unknown-property */
import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export const Coral = (props) => {
  const { nodes, materials } = useGLTF(
    `/models/coral/Coral${props.index}.glb`
  );
  const keys = Object.keys(nodes);

  materials.Coral.color = {
    isColor: true,
    r: props.color[0],
    g: props.color[1],
    b: props.color[2],
  };
  return (
    <group {...props} color={props.color} dispose={null}>
      <mesh geometry={nodes[keys[0]].geometry} material={materials.Coral} />
      <meshStandardMaterial color={props.color} depthWrite={false} />
    </group>
  );
};

useGLTF.preload('/models/coral/Coral0.glb');
useGLTF.preload('/models/coral/Coral1.glb');
useGLTF.preload('/models/coral/Coral2.glb');
useGLTF.preload('/models/coral/Coral3.glb');
useGLTF.preload('/models/coral/Coral4.glb');
useGLTF.preload('/models/coral/Coral5.glb');
useGLTF.preload('/models/coral/Coral6.glb');