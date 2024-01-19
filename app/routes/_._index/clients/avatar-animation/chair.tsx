/* eslint-disable */
// @ts-nocheck

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Chair(props) {
  const { nodes, materials } = useGLTF('/r3f/models/chair.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[0, 0.526, 0.045]} scale={[0.154, 0.202, 0.255]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5.geometry}
          material={materials.black_skin}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_6.geometry}
          material={materials.outline}
        />
      </group>
      <group
        position={[0.168, 0.359, -0.064]}
        rotation={[-0.12, 0.051, -0.401]}
        scale={0.255}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_8.geometry}
          material={materials.black_skin}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_9.geometry}
          material={materials.outline}
        />
      </group>
      <group
        position={[0.033, 0.079, 0.051]}
        rotation={[0, -0.712, 0]}
        scale={[0.02, 0.02, 0.018]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_13.geometry}
          material={materials.black_plactic}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_14.geometry}
          material={materials.outline}
        />
      </group>
      <group
        position={[0.039, 0.078, -0.005]}
        rotation={[0, 0.389, 0]}
        scale={[0.02, 0.02, 0.018]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_16.geometry}
          material={materials.black_plactic}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_17.geometry}
          material={materials.outline}
        />
      </group>
      <group
        position={[-0.051, 0.078, 0]}
        rotation={[0, -0.328, 0]}
        scale={[-0.02, 0.02, 0.018]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_19.geometry}
          material={materials.black_plactic}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_20.geometry}
          material={materials.outline}
        />
      </group>
      <group
        position={[-0.006, 0.078, -0.036]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[-0.02, 0.02, 0.018]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_22.geometry}
          material={materials.black_plactic}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_23.geometry}
          material={materials.outline}
        />
      </group>
      <group
        position={[-0.04, 0.078, 0.054]}
        rotation={[-Math.PI, -0.882, -Math.PI]}
        scale={[0.02, 0.02, 0.018]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_25.geometry}
          material={materials.black_plactic}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_26.geometry}
          material={materials.outline}
        />
      </group>
      <group position={[0.245, 0.34, 0.148]} scale={[0.012, 0.006, 0.017]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_44.geometry}
          material={materials.black_skin}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_45.geometry}
          material={materials.metal}
        />
      </group>
      <group
        position={[-0.006, 0.774, -0.178]}
        rotation={[1.605, 0, 0]}
        scale={[0.132, 0.143, 0.096]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_51.geometry}
          material={materials.black_skin}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_52.geometry}
          material={materials.outline}
        />
      </group>
      <group position={[0.245, 0.584, 0.166]} scale={[0.169, 0.255, 0.266]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_58.geometry}
          material={materials.black_skin}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_59.geometry}
          material={materials.outline}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_11.geometry}
        material={materials.black_skin}
        position={[-0.008, 0.571, -0.129]}
        rotation={[-0.208, 0, 0]}
        scale={[0.119, 0.115, 0.093]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_28.geometry}
        material={materials.black_plactic}
        position={[-0.005, 0.077, 0.016]}
        rotation={[0, -0.343, 0]}
        scale={[0.061, 0.034, 0.061]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_30.geometry}
        material={materials.black_plactic}
        position={[-0.131, 0.291, 0.074]}
        rotation={[-Math.PI, -0.452, -Math.PI]}
        scale={[0.36, 0.412, 0.36]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_32.geometry}
        material={materials.black_plactic}
        position={[-0.004, 0.141, 0.015]}
        scale={0.028}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_34.geometry}
        material={materials.black_plactic}
        position={[-0.191, 0.016, 0.238]}
        rotation={[Math.PI / 2, 0, -0.876]}
        scale={0.283}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_36.geometry}
        material={materials.black_plactic}
        position={[0.214, 0.018, 0.206]}
        rotation={[Math.PI / 2, 0, 0.73]}
        scale={[-0.283, 0.283, 0.283]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_38.geometry}
        material={materials.black_plactic}
        position={[0.265, 0.016, -0.098]}
        rotation={[Math.PI / 2, 0, -0.435]}
        scale={[-0.283, 0.283, 0.283]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_40.geometry}
        material={materials.black_plactic}
        position={[-0.006, 0.016, -0.276]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[-0.283, 0.283, 0.283]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_42.geometry}
        material={materials.black_plactic}
        position={[-0.275, 0.016, -0.077]}
        rotation={[Math.PI / 2, 0, 0.315]}
        scale={0.283}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_47.geometry}
        material={materials.black_plactic}
        position={[-0.004, 0.275, 0.178]}
        rotation={[3.129, 0, Math.PI]}
        scale={[1.063, 0.907, 1.004]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_49.geometry}
        material={materials.black_plactic}
        position={[-0.004, 0.313, 0.117]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[1.637, 1.063, 1.063]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_54.geometry}
        material={materials.black_skin}
        position={[0.06, 0.922, -0.221]}
        rotation={[1.525, 0, 0]}
        scale={[0.038, 0.034, 0.038]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_56.geometry}
        material={materials['Material.002']}
        position={[-0.005, 0.883, -0.189]}
        rotation={[1.381, 0, 0]}
        scale={[0.118, 0.087, 0.079]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_61.geometry}
        material={materials['Material.001']}
        position={[0.191, 0.356, -0.113]}
        rotation={[-0.123, 0.177, -1.528]}
        scale={0.013}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_63.geometry}
        material={materials['Material.001']}
        position={[0.187, 0.356, -0.113]}
        rotation={[-0.119, 0.179, -1.549]}
        scale={0.013}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_65.geometry}
        material={materials['Material.001']}
        position={[0.187, 0.356, -0.113]}
        rotation={[-0.119, 0.179, -1.549]}
        scale={0.013}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_67.geometry}
        material={materials['Material.001']}
        position={[0.196, 0.356, -0.114]}
        rotation={[-0.119, 0.179, -1.549]}
        scale={0.013}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_69.geometry}
        material={materials['Material.001']}
        position={[-0.19, 0.525, -0.13]}
        rotation={[-0.126, 0.075, -1.481]}
        scale={0.013}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_71.geometry}
        material={materials['Material.001']}
        position={[0.196, 0.356, -0.114]}
        rotation={[-0.119, 0.179, -1.549]}
        scale={0.013}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_73.geometry}
        material={materials.outline}
        position={[0.07, 0.585, -0.074]}
        rotation={[1.293, 0, 0]}
        scale={[0.019, 0.079, 0.079]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_75.geometry}
        material={materials.black_skin}
        position={[-0.005, 0.885, -0.24]}
        rotation={[1.502, 0, 0]}
        scale={0.008}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_77.geometry}
        material={materials.outline}
        position={[-0.005, 0.883, -0.189]}
        rotation={[1.381, 0, 0]}
        scale={[0.118, 0.087, 0.08]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_79.geometry}
        material={materials.outline}
        position={[-0.051, 1.041, -0.205]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.038}
      />
    </group>
  )
}

useGLTF.preload('/r3f/models/chair.glb')
