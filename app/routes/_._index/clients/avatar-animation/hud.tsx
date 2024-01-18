/* eslint-disable */
// @ts-nocheck

import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Hud(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/r3f/models/hud/scene.gltf')
  animations[0].name = 'render'
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    actions['render']?.reset().play()
  }, [])

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group
            name="64860ed0bd1a44bba4970250567bbb25fbx"
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.018}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group name="pCylinder5" position={[-5.376, 2, 0]}>
                  <mesh
                    name="pCylinder5_Dark_0"
                    geometry={nodes.pCylinder5_Dark_0.geometry}
                    material={materials.Dark}
                  />
                </group>
                <group
                  name="typeMesh17"
                  position={[-7.987, -4.562, 0]}
                  scale={[0.233, 0.233, 0.007]}
                >
                  <mesh
                    name="typeMesh17_Dark_0"
                    geometry={nodes.typeMesh17_Dark_0.geometry}
                    material={materials.Dark}
                  />
                </group>
                <group
                  name="typeMesh18"
                  position={[-0.593, -0.305, 0]}
                  scale={[0.49, 0.49, 0.007]}
                >
                  <mesh
                    name="typeMesh18_Dark_0"
                    geometry={nodes.typeMesh18_Dark_0.geometry}
                    material={materials.Dark}
                  />
                </group>
                <group
                  name="typeMesh19"
                  position={[-0.814, -0.305, 0]}
                  scale={[0.49, 0.49, 0.007]}
                >
                  <mesh
                    name="typeMesh19_Dark_0"
                    geometry={nodes.typeMesh19_Dark_0.geometry}
                    material={materials.Dark}
                  />
                </group>
                <group
                  name="typeMesh20"
                  position={[-0.787, -0.305, 0]}
                  scale={[0.49, 0.49, 0.007]}
                >
                  <mesh
                    name="typeMesh20_Dark_0"
                    geometry={nodes.typeMesh20_Dark_0.geometry}
                    material={materials.Dark}
                  />
                </group>
                <group
                  name="typeMesh21"
                  position={[-0.835, -0.305, 0]}
                  scale={[0.49, 0.49, 0.007]}
                >
                  <mesh
                    name="typeMesh21_Dark_0"
                    geometry={nodes.typeMesh21_Dark_0.geometry}
                    material={materials.Dark}
                  />
                </group>
                <group
                  name="typeMesh22"
                  position={[-0.831, -0.305, 0]}
                  scale={[0.49, 0.49, 0.007]}
                >
                  <mesh
                    name="typeMesh22_Dark_0"
                    geometry={nodes.typeMesh22_Dark_0.geometry}
                    material={materials.Dark}
                  />
                </group>
                <group
                  name="typeMesh23"
                  position={[-0.831, -0.305, 0]}
                  scale={[0.49, 0.49, 0.007]}
                >
                  <mesh
                    name="typeMesh23_Dark_0"
                    geometry={nodes.typeMesh23_Dark_0.geometry}
                    material={materials.Dark}
                  />
                </group>
                <group name="polySurface193" position={[2.574, 0, 0]}>
                  <mesh
                    name="polySurface193_Dark_0"
                    geometry={nodes.polySurface193_Dark_0.geometry}
                    material={materials.Dark}
                  />
                </group>
                <group name="pCylinder17" position={[0, -0.011, 0]}>
                  <mesh
                    name="pCylinder17_Dark_0"
                    geometry={nodes.pCylinder17_Dark_0.geometry}
                    material={materials.Dark}
                  />
                </group>
                <group
                  name="typeMesh24"
                  position={[-1.092, -0.305, 0]}
                  scale={[0.49, 0.49, 0.007]}
                >
                  <mesh
                    name="typeMesh24_Dark_0"
                    geometry={nodes.typeMesh24_Dark_0.geometry}
                    material={materials.Dark}
                  />
                </group>
                <group
                  name="pCube1"
                  position={[0, 0, 5.131]}
                  scale={[0.168, 0.006, 0.579]}
                >
                  <group name="transform12" />
                </group>
                <group
                  name="pCube2"
                  position={[0.503, 0, 5.107]}
                  rotation={[0, 0.098, 0]}
                  scale={[0.168, 0.006, 0.579]}
                >
                  <group name="transform4" />
                </group>
                <group
                  name="pCube3"
                  position={[1.001, 0, 5.033]}
                  rotation={[0, 0.196, 0]}
                  scale={[0.168, 0.006, 0.579]}
                >
                  <group name="transform5" />
                </group>
                <group
                  name="pCube4"
                  position={[1.49, 0, 4.91]}
                  rotation={[0, 0.295, 0]}
                  scale={[0.168, 0.006, 0.579]}
                >
                  <group name="transform13" />
                </group>
                <group
                  name="pCube5"
                  position={[1.964, 0, 4.741]}
                  rotation={[0, Math.PI / 8, 0]}
                  scale={[0.168, 0.006, 0.579]}
                >
                  <group name="transform11" />
                </group>
                <group
                  name="pCube6"
                  position={[2.419, 0, 4.525]}
                  rotation={[0, 0.491, 0]}
                  scale={[0.168, 0.006, 0.579]}
                >
                  <group name="transform9" />
                </group>
                <group
                  name="pCube7"
                  position={[2.851, 0, 4.267]}
                  rotation={[0, 0.589, 0]}
                  scale={[0.168, 0.006, 0.579]}
                >
                  <group name="transform10" />
                </group>
                <group
                  name="pCube8"
                  position={[3.255, 0, 3.967]}
                  rotation={[0, 0.687, 0]}
                  scale={[0.168, 0.006, 0.579]}
                >
                  <group name="transform57" />
                </group>
                <group
                  name="pCube9"
                  position={[3.628, 0, 3.628]}
                  rotation={[0, Math.PI / 4, 0]}
                  scale={[0.168, 0.006, 0.579]}
                >
                  <group name="transform58" />
                </group>
                <group
                  name="pCube10"
                  position={[3.967, 0, 3.255]}
                  rotation={[0, 0.884, 0]}
                  scale={[0.168, 0.006, 0.579]}
                >
                  <group name="transform6" />
                </group>
                <group
                  name="pCube11"
                  position={[4.267, 0, 2.851]}
                  rotation={[0, 0.982, 0]}
                  scale={[0.168, 0.006, 0.579]}
                >
                  <group name="transform7" />
                </group>
                <group
                  name="pCube12"
                  position={[4.525, 0, 2.419]}
                  rotation={[0, 1.08, 0]}
                  scale={[0.168, 0.006, 0.579]}
                >
                  <group name="transform8" />
                </group>
                <group
                  name="pCube13"
                  position={[4.741, 0, 1.964]}
                  rotation={[0, 1.178, 0]}
                  scale={[0.168, 0.006, 0.579]}
                >
                  <group name="transform51" />
                </group>
                <group
                  name="pCube14"
                  position={[4.91, 0, 1.49]}
                  rotation={[0, 1.276, 0]}
                  scale={[0.168, 0.006, 0.579]}
                >
                  <group name="transform52" />
                </group>
                <group
                  name="pCube15"
                  position={[5.033, 0, 1.001]}
                  rotation={[0, 1.374, 0]}
                  scale={[0.168, 0.006, 0.579]}
                >
                  <group name="transform54" />
                </group>
                <group
                  name="pCube16"
                  position={[5.107, 0, 0.503]}
                  rotation={[0, 1.473, 0]}
                  scale={[0.168, 0.006, 0.579]}
                >
                  <group name="transform55" />
                </group>
                <group
                  name="pCube17"
                  position={[5.131, 0, 0]}
                  rotation={[0, Math.PI / 2, 0]}
                  scale={[0.168, 0.006, 0.579]}
                >
                  <group name="transform56" />
                </group>
                <group
                  name="pCube18"
                  position={[5.107, 0, -0.503]}
                  rotation={[-Math.PI, 1.473, -Math.PI]}
                  scale={[0.168, 0.006, 0.579]}
                >
                  <group name="transform46" />
                </group>
                <group
                  name="pCube19"
                  position={[5.033, 0, -1.001]}
                  rotation={[-Math.PI, 1.374, -Math.PI]}
                  scale={[0.168, 0.006, 0.579]}
                >
                  <group name="transform47" />
                </group>
                <group
                  name="pCube20"
                  position={[4.91, 0, -1.49]}
                  rotation={[-Math.PI, 1.276, -Math.PI]}
                  scale={[0.168, 0.006, 0.579]}
                >
                  <group name="transform48" />
                </group>
                <group
                  name="pCube21"
                  position={[4.741, 0, -1.964]}
                  rotation={[-Math.PI, 1.178, -Math.PI]}
                  scale={[0.168, 0.006, 0.579]}
                >
                  <group name="transform49" />
                </group>
                <group
                  name="pCube22"
                  position={[4.525, 0, -2.419]}
                  rotation={[-Math.PI, 1.08, -Math.PI]}
                  scale={[0.168, 0.006, 0.579]}
                >
                  <group name="transform50" />
                </group>
                <group
                  name="pCube23"
                  position={[4.267, 0, -2.851]}
                  rotation={[-Math.PI, 0.982, -Math.PI]}
                  scale={[0.168, 0.006, 0.579]}
                >
                  <group name="transform44" />
                </group>
                <group
                  name="pCube24"
                  position={[3.967, 0, -3.255]}
                  rotation={[-Math.PI, 0.884, -Math.PI]}
                  scale={[0.168, 0.006, 0.579]}
                >
                  <group name="transform45" />
                </group>
                <group
                  name="pCube25"
                  position={[3.628, 0, -3.628]}
                  rotation={[-Math.PI, Math.PI / 4, -Math.PI]}
                  scale={[0.168, 0.006, 0.579]}
                >
                  <group name="transform38" />
                </group>
                <group
                  name="pCube26"
                  position={[3.255, 0, -3.967]}
                  rotation={[-Math.PI, 0.687, -Math.PI]}
                  scale={[0.168, 0.006, 0.579]}
                >
                  <group name="transform39" />
                </group>
                <group
                  name="pCube27"
                  position={[2.851, 0, -4.267]}
                  rotation={[-Math.PI, 0.589, -Math.PI]}
                  scale={[0.168, 0.006, 0.579]}
                >
                  <group name="transform40" />
                </group>
                <group
                  name="pCube28"
                  position={[2.419, 0, -4.525]}
                  rotation={[-Math.PI, 0.491, -Math.PI]}
                  scale={[0.168, 0.006, 0.579]}
                >
                  <group name="transform21" />
                </group>
                <group
                  name="pCube29"
                  position={[1.964, 0, -4.741]}
                  rotation={[-Math.PI, Math.PI / 8, -Math.PI]}
                  scale={[0.168, 0.006, 0.579]}
                >
                  <group name="transform22" />
                </group>
                <group
                  name="pCube30"
                  position={[1.49, 0, -4.91]}
                  rotation={[-Math.PI, 0.295, -Math.PI]}
                  scale={[0.168, 0.006, 0.579]}
                >
                  <group name="transform41" />
                </group>
                <group
                  name="pCube31"
                  position={[1.001, 0, -5.033]}
                  rotation={[-Math.PI, 0.196, -Math.PI]}
                  scale={[0.168, 0.006, 0.579]}
                >
                  <group name="transform42" />
                </group>
                <group
                  name="pCube32"
                  position={[0.503, 0, -5.107]}
                  rotation={[-Math.PI, 0.098, -Math.PI]}
                  scale={[0.168, 0.006, 0.579]}
                >
                  <group name="transform43" />
                </group>
                <group
                  name="pCube33"
                  position={[0, 0, -5.131]}
                  rotation={[-Math.PI, 0, -Math.PI]}
                  scale={[0.168, 0.006, 0.579]}
                >
                  <group name="transform33" />
                </group>
                <group
                  name="pCube34"
                  position={[-0.503, 0, -5.107]}
                  rotation={[-Math.PI, -0.098, -Math.PI]}
                  scale={[0.168, 0.006, 0.579]}
                >
                  <group name="transform34" />
                </group>
                <group
                  name="pCube35"
                  position={[-1.001, 0, -5.033]}
                  rotation={[-Math.PI, -0.196, -Math.PI]}
                  scale={[0.168, 0.006, 0.579]}
                >
                  <group name="transform35" />
                </group>
                <group
                  name="pCube36"
                  position={[-1.49, 0, -4.91]}
                  rotation={[-Math.PI, -0.295, -Math.PI]}
                  scale={[0.168, 0.006, 0.579]}
                >
                  <group name="transform36" />
                </group>
                <group
                  name="pCube37"
                  position={[-1.964, 0, -4.741]}
                  rotation={[-Math.PI, -Math.PI / 8, -Math.PI]}
                  scale={[0.168, 0.006, 0.579]}
                >
                  <group name="transform37" />
                </group>
                <group
                  name="pCube38"
                  position={[-2.419, 0, -4.525]}
                  rotation={[-Math.PI, -0.491, -Math.PI]}
                  scale={[0.168, 0.006, 0.579]}
                >
                  <group name="transform31" />
                </group>
                <group
                  name="pCube39"
                  position={[-2.851, 0, -4.267]}
                  rotation={[-Math.PI, -0.589, -Math.PI]}
                  scale={[0.168, 0.006, 0.579]}
                >
                  <group name="transform32" />
                </group>
                <group
                  name="pCube40"
                  position={[-3.255, 0, -3.967]}
                  rotation={[-Math.PI, -0.687, -Math.PI]}
                  scale={[0.168, 0.006, 0.579]}
                >
                  <group name="transform26" />
                </group>
                <group
                  name="pCube41"
                  position={[-3.628, 0, -3.628]}
                  rotation={[-Math.PI, -Math.PI / 4, -Math.PI]}
                  scale={[0.168, 0.006, 0.579]}
                >
                  <group name="transform27" />
                </group>
                <group
                  name="pCube42"
                  position={[-3.967, 0, -3.255]}
                  rotation={[-Math.PI, -0.884, -Math.PI]}
                  scale={[0.168, 0.006, 0.579]}
                >
                  <group name="transform28" />
                </group>
                <group
                  name="pCube43"
                  position={[-4.267, 0, -2.851]}
                  rotation={[-Math.PI, -0.982, -Math.PI]}
                  scale={[0.168, 0.006, 0.579]}
                >
                  <group name="transform29" />
                </group>
                <group
                  name="pCube44"
                  position={[-4.525, 0, -2.419]}
                  rotation={[-Math.PI, -1.08, -Math.PI]}
                  scale={[0.168, 0.006, 0.579]}
                >
                  <group name="transform30" />
                </group>
                <group
                  name="pCube45"
                  position={[-4.741, 0, -1.964]}
                  rotation={[-Math.PI, -1.178, -Math.PI]}
                  scale={[0.168, 0.006, 0.579]}
                >
                  <group name="transform23" />
                </group>
                <group
                  name="pCube46"
                  position={[-4.91, 0, -1.49]}
                  rotation={[-Math.PI, -1.276, -Math.PI]}
                  scale={[0.168, 0.006, 0.579]}
                >
                  <group name="transform24" />
                </group>
                <group
                  name="pCube47"
                  position={[-5.033, 0, -1.001]}
                  rotation={[-Math.PI, -1.374, -Math.PI]}
                  scale={[0.168, 0.006, 0.579]}
                >
                  <group name="transform25" />
                </group>
                <group
                  name="pCube48"
                  position={[-5.107, 0, -0.503]}
                  rotation={[-Math.PI, -1.473, -Math.PI]}
                  scale={[0.168, 0.006, 0.579]}
                >
                  <group name="transform16" />
                </group>
                <group
                  name="pCube49"
                  position={[-5.131, 0, 0]}
                  rotation={[0, -Math.PI / 2, 0]}
                  scale={[0.168, 0.006, 0.579]}
                >
                  <group name="transform17" />
                </group>
                <group
                  name="pCube50"
                  position={[-5.107, 0, 0.503]}
                  rotation={[0, -1.473, 0]}
                  scale={[0.168, 0.006, 0.579]}
                >
                  <group name="transform18" />
                </group>
                <group
                  name="pCube51"
                  position={[-5.033, 0, 1.001]}
                  rotation={[0, -1.374, 0]}
                  scale={[0.168, 0.006, 0.579]}
                >
                  <group name="transform19" />
                </group>
                <group
                  name="pCube52"
                  position={[-4.91, 0, 1.49]}
                  rotation={[0, -1.276, 0]}
                  scale={[0.168, 0.006, 0.579]}
                >
                  <group name="transform20" />
                </group>
                <group
                  name="pCube53"
                  position={[-4.741, 0, 1.964]}
                  rotation={[0, -1.178, 0]}
                  scale={[0.168, 0.006, 0.579]}
                >
                  <group name="transform14" />
                </group>
                <group
                  name="pCube54"
                  position={[-4.525, 0, 2.419]}
                  rotation={[0, -1.08, 0]}
                  scale={[0.168, 0.006, 0.579]}
                >
                  <group name="transform15" />
                </group>
                <group
                  name="pCube55"
                  position={[-4.267, 0, 2.851]}
                  rotation={[0, -0.982, 0]}
                  scale={[0.168, 0.006, 0.579]}
                >
                  <group name="transform64" />
                </group>
                <group
                  name="pCube56"
                  position={[-3.967, 0, 3.255]}
                  rotation={[0, -0.884, 0]}
                  scale={[0.168, 0.006, 0.579]}
                >
                  <group name="transform65" />
                </group>
                <group
                  name="pCube57"
                  position={[-3.628, 0, 3.628]}
                  rotation={[0, -Math.PI / 4, 0]}
                  scale={[0.168, 0.006, 0.579]}
                >
                  <group name="transform66" />
                </group>
                <group
                  name="pCube58"
                  position={[-3.255, 0, 3.967]}
                  rotation={[0, -0.687, 0]}
                  scale={[0.168, 0.006, 0.579]}
                >
                  <group name="transform67" />
                </group>
                <group
                  name="pCube59"
                  position={[-2.851, 0, 4.267]}
                  rotation={[0, -0.589, 0]}
                  scale={[0.168, 0.006, 0.579]}
                >
                  <group name="transform68" />
                </group>
                <group
                  name="pCube60"
                  position={[-2.419, 0, 4.525]}
                  rotation={[0, -0.491, 0]}
                  scale={[0.168, 0.006, 0.579]}
                >
                  <group name="transform61" />
                </group>
                <group
                  name="pCube61"
                  position={[-1.964, 0, 4.741]}
                  rotation={[0, -Math.PI / 8, 0]}
                  scale={[0.168, 0.006, 0.579]}
                >
                  <group name="transform62" />
                </group>
                <group
                  name="pCube62"
                  position={[-1.49, 0, 4.91]}
                  rotation={[0, -0.295, 0]}
                  scale={[0.168, 0.006, 0.579]}
                >
                  <group name="transform63" />
                </group>
                <group
                  name="pCube63"
                  position={[-1.001, 0, 5.033]}
                  rotation={[0, -0.196, 0]}
                  scale={[0.168, 0.006, 0.579]}
                >
                  <group name="transform59" />
                </group>
                <group
                  name="pCube64"
                  position={[-0.503, 0, 5.107]}
                  rotation={[0, -0.098, 0]}
                  scale={[0.168, 0.006, 0.579]}
                >
                  <group name="transform60" />
                </group>
                <group
                  name="pCube65"
                  position={[0, 0, 5.131]}
                  scale={[0.168, 0.006, 0.579]}
                >
                  <group name="transform53" />
                </group>
                <group name="pCube66" scale={[0.539, 0.009, 0.13]}>
                  <group name="transform2" />
                </group>
                <group
                  name="pCube67"
                  position={[0, 0, 0.339]}
                  scale={[0.539, 0.009, 0.13]}
                >
                  <group name="transform1" />
                </group>
                <group
                  name="pCube68"
                  position={[0, 0, 0.677]}
                  scale={[0.539, 0.009, 0.13]}
                >
                  <group name="transform3" />
                </group>
                <group name="pTorus1" scale={[0.367, 0.03, 0.367]}>
                  <group name="transform74" />
                </group>
                <group
                  name="pCube69"
                  position={[6.3, 0, 0]}
                  scale={[1.136, 2.578, 1.136]}
                >
                  <group name="transform75" />
                </group>
                <group
                  name="pCube70"
                  position={[-6.3, 0, 0]}
                  rotation={[-Math.PI, 0, -Math.PI]}
                  scale={[1.136, 2.578, 1.136]}
                >
                  <group name="transform76" />
                </group>
                <group
                  name="pTorus2"
                  rotation={[0, -0.157, 0]}
                  scale={[0.329, 0.03, 0.329]}
                >
                  <group name="transform77" />
                </group>
                <group
                  name="pTorus3"
                  rotation={[-Math.PI, 0.152, -Math.PI]}
                  scale={[0.278, 0.03, 0.278]}
                >
                  <group name="transform78" />
                </group>
                <group name="pTorus4" scale={[0.123, 0.01, 0.123]}>
                  <group name="transform73" />
                </group>
                <group name="pCube71" position={[0, 0.5, 0]}>
                  <group name="transform91" />
                </group>
                <group name="pCube72" position={[0, -0.5, 0]}>
                  <group name="transform81" />
                </group>
                <group name="pSphere1" position={[1.502, 0, 0]} scale={0.109}>
                  <group name="transform72" />
                </group>
                <group
                  name="pTorus5"
                  position={[-5.521, 0, 4.11]}
                  scale={[0.634, 0.252, 0.634]}
                >
                  <group name="transform82" />
                </group>
                <group
                  name="pCube74"
                  position={[-5.519, 0, 4.882]}
                  scale={[0.309, 0.014, 0.842]}
                >
                  <group name="transform79" />
                </group>
                <group
                  name="pTorus6"
                  position={[5.5, 0, 4.11]}
                  scale={[0.634, 0.252, 0.634]}
                >
                  <group name="transform80" />
                </group>
                <group
                  name="pCube75"
                  position={[5.5, 0, 4.882]}
                  scale={[0.309, 0.014, 0.842]}
                >
                  <group name="transform83" />
                </group>
                <group name="pSphere2">
                  <group name="transform92" />
                </group>
                <group
                  name="pTorus7"
                  position={[0, 0, -0.752]}
                  scale={[0.816, 0.224, 0.816]}
                >
                  <group name="transform69" />
                </group>
                <group
                  name="pTorus9"
                  position={[0, 0.005, -0.752]}
                  scale={[0.816, 0.152, 0.816]}
                >
                  <group name="transform70" />
                </group>
                <group name="pTorus10">
                  <group name="polySurface1">
                    <group name="transform84" />
                  </group>
                  <group name="polySurface2">
                    <group name="transform85" />
                  </group>
                  <group name="transform71" />
                  <group name="polySurface3" rotation={[-Math.PI, 0, -Math.PI]}>
                    <group name="transform89" />
                  </group>
                  <group name="polySurface4" rotation={[-Math.PI, 0, -Math.PI]}>
                    <group name="transform90" />
                  </group>
                </group>
                <group name="pTorus11">
                  <group name="transform86" />
                </group>
                <group
                  name="pTorus12"
                  position={[0, 0.225, 0]}
                  scale={[0.177, 0.03, 0.177]}
                >
                  <group name="transform87" />
                </group>
                <group
                  name="pTorus13"
                  position={[0, -0.225, 0]}
                  rotation={[-Math.PI, 0, -Math.PI]}
                  scale={[0.177, 0.03, 0.177]}
                >
                  <group name="transform88" />
                </group>
                <group name="pSphere3" rotation={[Math.PI / 2, 0, 0]}>
                  <group name="polySurface73" position={[-5.376, 0.002, -2]}>
                    <mesh
                      name="polySurface73_Dark_0"
                      geometry={nodes.polySurface73_Dark_0.geometry}
                      material={materials.Dark}
                    />
                  </group>
                  <group name="polySurface149" position={[-5.376, 0, -1.998]}>
                    <mesh
                      name="polySurface149_Light_0"
                      geometry={nodes.polySurface149_Light_0.geometry}
                      material={materials.Light}
                    />
                    <mesh
                      name="polySurface149_Dark_0"
                      geometry={nodes.polySurface149_Dark_0.geometry}
                      material={materials.Dark}
                    />
                  </group>
                  <group
                    name="polySurface165"
                    position={[-7.972, 0.007, 3.66]}
                    rotation={[0, Math.PI / 2, 0]}
                    scale={[1.675, 1, 0.351]}
                  >
                    <mesh
                      name="polySurface165_Light_0"
                      geometry={nodes.polySurface165_Light_0.geometry}
                      material={materials.Light}
                    />
                  </group>
                  <group name="polySurface167" position={[-5.376, 0, -1.998]}>
                    <mesh
                      name="polySurface167_Light_0"
                      geometry={nodes.polySurface167_Light_0.geometry}
                      material={materials.Light}
                    />
                    <mesh
                      name="polySurface167_Dark_0"
                      geometry={nodes.polySurface167_Dark_0.geometry}
                      material={materials.Dark}
                    />
                  </group>
                  <group name="polySurface169" position={[4.238, 0.007, 2.128]}>
                    <mesh
                      name="polySurface169_Light_0"
                      geometry={nodes.polySurface169_Light_0.geometry}
                      material={materials.Light}
                    />
                  </group>
                  <group name="polySurface175" position={[4.685, 0.007, 2.128]}>
                    <mesh
                      name="polySurface175_Light_0"
                      geometry={nodes.polySurface175_Light_0.geometry}
                      material={materials.Light}
                    />
                  </group>
                  <group name="polySurface176" position={[5.132, 0.007, 2.128]}>
                    <mesh
                      name="polySurface176_Light_0"
                      geometry={nodes.polySurface176_Light_0.geometry}
                      material={materials.Light}
                    />
                  </group>
                  <group name="polySurface177" position={[5.578, 0.007, 2.128]}>
                    <mesh
                      name="polySurface177_Light_0"
                      geometry={nodes.polySurface177_Light_0.geometry}
                      material={materials.Light}
                    />
                  </group>
                  <group name="polySurface178" position={[6.025, 0.007, 2.128]}>
                    <mesh
                      name="polySurface178_Light_0"
                      geometry={nodes.polySurface178_Light_0.geometry}
                      material={materials.Light}
                    />
                  </group>
                  <group name="polySurface179" position={[6.471, 0.007, 2.128]}>
                    <mesh
                      name="polySurface179_Light_0"
                      geometry={nodes.polySurface179_Light_0.geometry}
                      material={materials.Light}
                    />
                  </group>
                  <group name="polySurface180" position={[6.918, 0.007, 2.128]}>
                    <mesh
                      name="polySurface180_Light_0"
                      geometry={nodes.polySurface180_Light_0.geometry}
                      material={materials.Light}
                    />
                  </group>
                  <group name="polySurface71" scale={[0.522, 0.39, 0.522]}>
                    <mesh
                      name="polySurface71_Dark_0"
                      geometry={nodes.polySurface71_Dark_0.geometry}
                      material={materials.Dark}
                    />
                  </group>
                  <group name="polySurface72" scale={[0.522, 0.39, 0.522]}>
                    <mesh
                      name="polySurface72_Light_0"
                      geometry={nodes.polySurface72_Light_0.geometry}
                      material={materials.Light}
                    />
                    <mesh
                      name="polySurface72_Dark_0"
                      geometry={nodes.polySurface72_Dark_0.geometry}
                      material={materials.Dark}
                    />
                  </group>
                  <group
                    name="polySurface75"
                    position={[-5.376, 0, -2]}
                    scale={[0.692, 0.256, 0.692]}
                  >
                    <mesh
                      name="polySurface75_Dark_0"
                      geometry={nodes.polySurface75_Dark_0.geometry}
                      material={materials.Dark}
                    />
                  </group>
                  <group name="polySurface77" scale={[0.522, 0.39, 0.522]}>
                    <mesh
                      name="polySurface77_Light_0"
                      geometry={nodes.polySurface77_Light_0.geometry}
                      material={materials.Light}
                    />
                    <mesh
                      name="polySurface77_Dark_0"
                      geometry={nodes.polySurface77_Dark_0.geometry}
                      material={materials.Dark}
                    />
                  </group>
                  <group name="polySurface78" scale={[0.522, 0.39, 0.522]}>
                    <mesh
                      name="polySurface78_Dark_0"
                      geometry={nodes.polySurface78_Dark_0.geometry}
                      material={materials.Dark}
                    />
                  </group>
                  <group
                    name="polySurface80"
                    position={[-1.178, 0, -14.018]}
                    rotation={[0, Math.PI / 2, 0]}
                    scale={[1.75, 1, 1.75]}
                  >
                    <mesh
                      name="polySurface80_Dark_0"
                      geometry={nodes.polySurface80_Dark_0.geometry}
                      material={materials.Dark}
                    />
                  </group>
                  <group name="polySurface150" position={[0, 0, -21.658]}>
                    <group name="transform95" />
                  </group>
                  <group name="polySurface151" position={[0, 0, -21.658]}>
                    <group name="transform96" />
                  </group>
                  <group name="polySurface152_1" position={[0, 0, -21.658]}>
                    <group name="transform97" />
                  </group>
                  <group name="transform93" />
                  <group name="polySurface161">
                    <mesh
                      name="polySurface161_Light_0"
                      geometry={nodes.polySurface161_Light_0.geometry}
                      material={materials.Light}
                    />
                    <mesh
                      name="polySurface161_Dark_0"
                      geometry={nodes.polySurface161_Dark_0.geometry}
                      material={materials.Dark}
                    />
                  </group>
                  <group name="polySurface162" scale={[0.357, 1, 0.357]}>
                    <mesh
                      name="polySurface162_Dark_0"
                      geometry={nodes.polySurface162_Dark_0.geometry}
                      material={materials.Dark}
                    />
                  </group>
                  <group
                    name="polySurface164"
                    position={[-13.114, 0, -5.756]}
                    rotation={[0, Math.PI / 2, 0]}
                    scale={[1.75, 1, 1.75]}
                  >
                    <mesh
                      name="polySurface164_Dark_0"
                      geometry={nodes.polySurface164_Dark_0.geometry}
                      material={materials.Dark}
                    />
                  </group>
                  <group
                    name="polySurface166"
                    position={[-1.688, 0, -12.516]}
                    rotation={[0, Math.PI / 2, 0]}
                    scale={[1.75, 1, 1.75]}
                  >
                    <mesh
                      name="polySurface166_Dark_0"
                      geometry={nodes.polySurface166_Dark_0.geometry}
                      material={materials.Dark}
                    />
                  </group>
                  <group
                    name="polySurface174"
                    position={[3.176, 0, -0.166]}
                    scale={[0.446, 1, 0.446]}
                  >
                    <mesh
                      name="polySurface174_Dark_0"
                      geometry={nodes.polySurface174_Dark_0.geometry}
                      material={materials.Dark}
                    />
                  </group>
                  <group
                    name="polySurface181"
                    position={[-5.472, 0, -5.761]}
                    rotation={[0, Math.PI / 2, 0]}
                    scale={[1.75, 1, 1.75]}
                  >
                    <mesh
                      name="polySurface181_Dark_0"
                      geometry={nodes.polySurface181_Dark_0.geometry}
                      material={materials.Dark}
                    />
                  </group>
                  <group
                    name="polySurface186"
                    position={[-5.376, 0, 1.513]}
                    scale={[0.845, 0.256, 0.845]}
                  >
                    <mesh
                      name="polySurface186_Dark_0"
                      geometry={nodes.polySurface186_Dark_0.geometry}
                      material={materials.Dark}
                    />
                  </group>
                  <group
                    name="polySurface189_1"
                    position={[-5.375, 0, 1.682]}
                    scale={[0.429, 0.39, 0.429]}
                  >
                    <group name="transform179" />
                  </group>
                  <group
                    name="polySurface190"
                    position={[-5.375, 0, 1.682]}
                    scale={[0.429, 0.39, 0.429]}
                  >
                    <group name="transform178" />
                  </group>
                </group>
                <group name="pTorus14" scale={[1, 1, 0.125]}>
                  <mesh
                    name="pTorus14_Dark_0"
                    geometry={nodes.pTorus14_Dark_0.geometry}
                    material={materials.Dark}
                  />
                  <mesh
                    name="pTorus14_Light_0"
                    geometry={nodes.pTorus14_Light_0.geometry}
                    material={materials.Light}
                  />
                </group>
                <group
                  name="pCylinder1"
                  position={[-1.086, 9.158, 0]}
                  rotation={[0, 0, Math.PI / 4]}
                  scale={[0.867, 0.501, 0.295]}
                >
                  <mesh
                    name="pCylinder1_Dark_0"
                    geometry={nodes.pCylinder1_Dark_0.geometry}
                    material={materials.Dark}
                  />
                </group>
                <group
                  name="pCylinder2"
                  position={[1.095, -9.157, 0]}
                  rotation={[0, 0, -2.356]}
                  scale={[0.867, 0.501, 0.295]}
                >
                  <mesh
                    name="pCylinder2_Dark_0"
                    geometry={nodes.pCylinder2_Dark_0.geometry}
                    material={materials.Dark}
                  />
                </group>
                <group name="pTorus15" scale={[0.893, 0.893, 0.125]}>
                  <mesh
                    name="pTorus15_Dark_0"
                    geometry={nodes.pTorus15_Dark_0.geometry}
                    material={materials.Dark}
                  />
                </group>
                <group
                  name="pCube76"
                  position={[-6.013, 4.531, 0]}
                  scale={[0.378, 0.567, 0.027]}
                >
                  <group name="transform103" />
                </group>
                <group
                  name="pCube77"
                  position={[-5.422, 4.531, 0]}
                  scale={[0.378, 0.567, 0.027]}
                >
                  <group name="transform104" />
                </group>
                <group
                  name="pCube78"
                  position={[-4.831, 4.531, 0]}
                  scale={[0.378, 0.567, 0.027]}
                >
                  <group name="transform101" />
                </group>
                <group
                  name="pCube79"
                  position={[-4.24, 4.531, 0]}
                  scale={[0.378, 0.567, 0.027]}
                >
                  <group name="transform102" />
                </group>
                <group
                  name="pCube80"
                  position={[-3.649, 4.531, 0]}
                  scale={[0.378, 0.567, 0.027]}
                >
                  <group name="transform107" />
                </group>
                <group
                  name="pCube81"
                  position={[-3.058, 4.531, 0]}
                  scale={[0.378, 0.567, 0.027]}
                >
                  <group name="transform108" />
                </group>
                <group
                  name="pCube82"
                  position={[-2.467, 4.531, 0]}
                  scale={[0.378, 0.567, 0.027]}
                >
                  <group name="transform109" />
                </group>
                <group
                  name="pCube83"
                  position={[-1.875, 4.531, 0]}
                  scale={[0.378, 0.567, 0.027]}
                >
                  <group name="transform105" />
                </group>
                <group
                  name="pCube84"
                  position={[-1.284, 4.531, 0]}
                  scale={[0.378, 0.567, 0.027]}
                >
                  <group name="transform106" />
                </group>
                <group
                  name="pCube85"
                  position={[-0.693, 4.531, 0]}
                  scale={[0.378, 0.567, 0.027]}
                >
                  <group name="transform99" />
                </group>
                <group
                  name="pCube86"
                  position={[-0.102, 4.531, 0]}
                  scale={[0.378, 0.567, 0.027]}
                >
                  <group name="transform100" />
                </group>
                <group
                  name="polySurface152"
                  position={[1.611, -16.246, 0]}
                  scale={[0.643, 0.75, 1]}
                >
                  <group name="polySurface182_1">
                    <group name="transform113" />
                  </group>
                  <group name="polySurface183">
                    <group name="transform111" />
                  </group>
                  <group name="polySurface184">
                    <group name="transform112" />
                  </group>
                  <group name="transform110" />
                </group>
                <group
                  name="pCylinder3"
                  position={[0.578, 2.863, 0]}
                  rotation={[0, 0, Math.PI / 4]}
                  scale={[0.259, 0.15, 0.15]}
                >
                  <group name="transform189" />
                </group>
                <group
                  name="pCylinder4"
                  position={[-2.897, 0.59, 0]}
                  rotation={[0, 0, 2.356]}
                  scale={[0.259, 0.15, 0.15]}
                >
                  <group name="transform188" />
                </group>
                <group
                  name="typeMesh2"
                  position={[-2.229, -4.113, 0.007]}
                  scale={[0.043, 0.043, 0.018]}
                >
                  <mesh
                    name="typeMesh2_Dark_0"
                    geometry={nodes.typeMesh2_Dark_0.geometry}
                    material={materials.Dark}
                  />
                </group>
                <group name="pCube87" position={[0.034, -0.122, 0]}>
                  <mesh
                    name="pCube87_Dark_0"
                    geometry={nodes.pCube87_Dark_0.geometry}
                    material={materials.Dark}
                  />
                </group>
                <group
                  name="typeMesh16"
                  position={[2.24, 4.094, 0]}
                  scale={[0.417, 0.417, 0.007]}
                >
                  <mesh
                    name="typeMesh16_Dark_0"
                    geometry={nodes.typeMesh16_Dark_0.geometry}
                    material={materials.Dark}
                  />
                </group>
                <group name="polySurface182" position={[5.013, 0, 0]}>
                  <group name="polySurface192">
                    <group name="transform185" />
                  </group>
                  <group name="polySurface193_1">
                    <group name="transform187" />
                  </group>
                  <group name="polySurface194">
                    <group name="transform186" />
                  </group>
                  <group name="polySurface195">
                    <group name="transform183" />
                  </group>
                  <group name="polySurface196_1">
                    <group name="transform184" />
                  </group>
                  <group name="polySurface197">
                    <group name="transform182" />
                  </group>
                  <group name="transform181" />
                </group>
                <group
                  name="pCube89"
                  position={[0.332, 13.043, 3.374]}
                  rotation={[0, 0.098, 0]}
                  scale={[0.141, 0.035, 0.488]}
                >
                  <group name="transform177" />
                </group>
                <group
                  name="pCube90"
                  position={[0.661, 13.043, 3.325]}
                  rotation={[0, 0.196, 0]}
                  scale={[0.141, 0.035, 0.488]}
                >
                  <group name="transform176" />
                </group>
                <group
                  name="pCube91"
                  position={[0.984, 13.043, 3.244]}
                  rotation={[0, 0.295, 0]}
                  scale={[0.141, 0.035, 0.488]}
                >
                  <group name="transform175" />
                </group>
                <group
                  name="pCube92"
                  position={[1.297, 13.043, 3.132]}
                  rotation={[0, Math.PI / 8, 0]}
                  scale={[0.141, 0.035, 0.488]}
                >
                  <group name="transform174" />
                </group>
                <group
                  name="pCube93"
                  position={[1.598, 13.043, 2.99]}
                  rotation={[0, 0.491, 0]}
                  scale={[0.141, 0.035, 0.488]}
                >
                  <group name="transform173" />
                </group>
                <group
                  name="pCube94"
                  position={[1.884, 13.043, 2.819]}
                  rotation={[0, 0.589, 0]}
                  scale={[0.141, 0.035, 0.488]}
                >
                  <group name="transform172" />
                </group>
                <group
                  name="pCube95"
                  position={[2.151, 13.043, 2.621]}
                  rotation={[0, 0.687, 0]}
                  scale={[0.141, 0.035, 0.488]}
                >
                  <group name="transform171" />
                </group>
                <group
                  name="pCube96"
                  position={[2.397, 13.043, 2.397]}
                  rotation={[0, Math.PI / 4, 0]}
                  scale={[0.141, 0.035, 0.488]}
                >
                  <group name="transform170" />
                </group>
                <group
                  name="pCube97"
                  position={[2.621, 13.043, 2.151]}
                  rotation={[0, 0.884, 0]}
                  scale={[0.141, 0.035, 0.488]}
                >
                  <group name="transform169" />
                </group>
                <group
                  name="pCube98"
                  position={[2.819, 13.043, 1.884]}
                  rotation={[0, 0.982, 0]}
                  scale={[0.141, 0.035, 0.488]}
                >
                  <group name="transform168" />
                </group>
                <group
                  name="pCube99"
                  position={[2.99, 13.043, 1.598]}
                  rotation={[0, 1.08, 0]}
                  scale={[0.141, 0.035, 0.488]}
                >
                  <group name="transform167" />
                </group>
                <group
                  name="pCube100"
                  position={[3.132, 13.043, 1.297]}
                  rotation={[0, 1.178, 0]}
                  scale={[0.141, 0.035, 0.488]}
                >
                  <group name="transform166" />
                </group>
                <group
                  name="pCube101"
                  position={[3.244, 13.043, 0.984]}
                  rotation={[0, 1.276, 0]}
                  scale={[0.141, 0.035, 0.488]}
                >
                  <group name="transform165" />
                </group>
                <group
                  name="pCube102"
                  position={[3.325, 13.043, 0.661]}
                  rotation={[0, 1.374, 0]}
                  scale={[0.141, 0.035, 0.488]}
                >
                  <group name="transform164" />
                </group>
                <group
                  name="pCube103"
                  position={[3.374, 13.043, 0.332]}
                  rotation={[0, 1.473, 0]}
                  scale={[0.141, 0.035, 0.488]}
                >
                  <group name="transform163" />
                </group>
                <group
                  name="pCube104"
                  position={[3.39, 13.043, 0]}
                  rotation={[0, Math.PI / 2, 0]}
                  scale={[0.141, 0.035, 0.488]}
                >
                  <group name="transform162" />
                </group>
                <group
                  name="pCube105"
                  position={[3.374, 13.043, -0.332]}
                  rotation={[-Math.PI, 1.473, -Math.PI]}
                  scale={[0.141, 0.035, 0.488]}
                >
                  <group name="transform161" />
                </group>
                <group
                  name="pCube106"
                  position={[3.325, 13.043, -0.661]}
                  rotation={[-Math.PI, 1.374, -Math.PI]}
                  scale={[0.141, 0.035, 0.488]}
                >
                  <group name="transform160" />
                </group>
                <group
                  name="pCube107"
                  position={[3.244, 13.043, -0.984]}
                  rotation={[-Math.PI, 1.276, -Math.PI]}
                  scale={[0.141, 0.035, 0.488]}
                >
                  <group name="transform159" />
                </group>
                <group
                  name="pCube108"
                  position={[3.132, 13.043, -1.297]}
                  rotation={[-Math.PI, 1.178, -Math.PI]}
                  scale={[0.141, 0.035, 0.488]}
                >
                  <group name="transform158" />
                </group>
                <group
                  name="pCube109"
                  position={[2.99, 13.043, -1.598]}
                  rotation={[-Math.PI, 1.08, -Math.PI]}
                  scale={[0.141, 0.035, 0.488]}
                >
                  <group name="transform157" />
                </group>
                <group
                  name="pCube110"
                  position={[2.819, 13.043, -1.884]}
                  rotation={[-Math.PI, 0.982, -Math.PI]}
                  scale={[0.141, 0.035, 0.488]}
                >
                  <group name="transform156" />
                </group>
                <group
                  name="pCube111"
                  position={[2.621, 13.043, -2.151]}
                  rotation={[-Math.PI, 0.884, -Math.PI]}
                  scale={[0.141, 0.035, 0.488]}
                >
                  <group name="transform155" />
                </group>
                <group
                  name="pCube112"
                  position={[2.397, 13.043, -2.397]}
                  rotation={[-Math.PI, Math.PI / 4, -Math.PI]}
                  scale={[0.141, 0.035, 0.488]}
                >
                  <group name="transform154" />
                </group>
                <group
                  name="pCube113"
                  position={[2.151, 13.043, -2.621]}
                  rotation={[-Math.PI, 0.687, -Math.PI]}
                  scale={[0.141, 0.035, 0.488]}
                >
                  <group name="transform153" />
                </group>
                <group
                  name="pCube114"
                  position={[1.884, 13.043, -2.819]}
                  rotation={[-Math.PI, 0.589, -Math.PI]}
                  scale={[0.141, 0.035, 0.488]}
                >
                  <group name="transform152" />
                </group>
                <group
                  name="pCube115"
                  position={[1.598, 13.043, -2.99]}
                  rotation={[-Math.PI, 0.491, -Math.PI]}
                  scale={[0.141, 0.035, 0.488]}
                >
                  <group name="transform151" />
                </group>
                <group
                  name="pCube116"
                  position={[1.297, 13.043, -3.132]}
                  rotation={[-Math.PI, Math.PI / 8, -Math.PI]}
                  scale={[0.141, 0.035, 0.488]}
                >
                  <group name="transform150" />
                </group>
                <group
                  name="pCube117"
                  position={[0.984, 13.043, -3.244]}
                  rotation={[-Math.PI, 0.295, -Math.PI]}
                  scale={[0.141, 0.035, 0.488]}
                >
                  <group name="transform149" />
                </group>
                <group
                  name="pCube118"
                  position={[0.661, 13.043, -3.325]}
                  rotation={[-Math.PI, 0.196, -Math.PI]}
                  scale={[0.141, 0.035, 0.488]}
                >
                  <group name="transform148" />
                </group>
                <group
                  name="pCube119"
                  position={[0.332, 13.043, -3.374]}
                  rotation={[-Math.PI, 0.098, -Math.PI]}
                  scale={[0.141, 0.035, 0.488]}
                >
                  <group name="transform147" />
                </group>
                <group
                  name="pCube120"
                  position={[0, 13.043, -3.39]}
                  rotation={[-Math.PI, 0, -Math.PI]}
                  scale={[0.141, 0.035, 0.488]}
                >
                  <group name="transform146" />
                </group>
                <group
                  name="pCube121"
                  position={[-0.332, 13.043, -3.374]}
                  rotation={[-Math.PI, -0.098, -Math.PI]}
                  scale={[0.141, 0.035, 0.488]}
                >
                  <group name="transform145" />
                </group>
                <group
                  name="pCube122"
                  position={[-0.661, 13.043, -3.325]}
                  rotation={[-Math.PI, -0.196, -Math.PI]}
                  scale={[0.141, 0.035, 0.488]}
                >
                  <group name="transform144" />
                </group>
                <group
                  name="pCube123"
                  position={[-0.984, 13.043, -3.244]}
                  rotation={[-Math.PI, -0.295, -Math.PI]}
                  scale={[0.141, 0.035, 0.488]}
                >
                  <group name="transform143" />
                </group>
                <group
                  name="pCube124"
                  position={[-1.297, 13.043, -3.132]}
                  rotation={[-Math.PI, -Math.PI / 8, -Math.PI]}
                  scale={[0.141, 0.035, 0.488]}
                >
                  <group name="transform142" />
                </group>
                <group
                  name="pCube125"
                  position={[-1.598, 13.043, -2.99]}
                  rotation={[-Math.PI, -0.491, -Math.PI]}
                  scale={[0.141, 0.035, 0.488]}
                >
                  <group name="transform141" />
                </group>
                <group
                  name="pCube126"
                  position={[-1.884, 13.043, -2.819]}
                  rotation={[-Math.PI, -0.589, -Math.PI]}
                  scale={[0.141, 0.035, 0.488]}
                >
                  <group name="transform140" />
                </group>
                <group
                  name="pCube127"
                  position={[-2.151, 13.043, -2.621]}
                  rotation={[-Math.PI, -0.687, -Math.PI]}
                  scale={[0.141, 0.035, 0.488]}
                >
                  <group name="transform139" />
                </group>
                <group
                  name="pCube128"
                  position={[-2.397, 13.043, -2.397]}
                  rotation={[-Math.PI, -Math.PI / 4, -Math.PI]}
                  scale={[0.141, 0.035, 0.488]}
                >
                  <group name="transform138" />
                </group>
                <group
                  name="pCube129"
                  position={[-2.621, 13.043, -2.151]}
                  rotation={[-Math.PI, -0.884, -Math.PI]}
                  scale={[0.141, 0.035, 0.488]}
                >
                  <group name="transform137" />
                </group>
                <group
                  name="pCube130"
                  position={[-2.819, 13.043, -1.884]}
                  rotation={[-Math.PI, -0.982, -Math.PI]}
                  scale={[0.141, 0.035, 0.488]}
                >
                  <group name="transform136" />
                </group>
                <group
                  name="pCube131"
                  position={[-2.99, 13.043, -1.598]}
                  rotation={[-Math.PI, -1.08, -Math.PI]}
                  scale={[0.141, 0.035, 0.488]}
                >
                  <group name="transform135" />
                </group>
                <group
                  name="pCube132"
                  position={[-3.132, 13.043, -1.297]}
                  rotation={[-Math.PI, -1.178, -Math.PI]}
                  scale={[0.141, 0.035, 0.488]}
                >
                  <group name="transform134" />
                </group>
                <group
                  name="pCube133"
                  position={[-3.244, 13.043, -0.984]}
                  rotation={[-Math.PI, -1.276, -Math.PI]}
                  scale={[0.141, 0.035, 0.488]}
                >
                  <group name="transform133" />
                </group>
                <group
                  name="pCube134"
                  position={[-3.325, 13.043, -0.661]}
                  rotation={[-Math.PI, -1.374, -Math.PI]}
                  scale={[0.141, 0.035, 0.488]}
                >
                  <group name="transform132" />
                </group>
                <group
                  name="pCube135"
                  position={[-3.374, 13.043, -0.332]}
                  rotation={[-Math.PI, -1.473, -Math.PI]}
                  scale={[0.141, 0.035, 0.488]}
                >
                  <group name="transform131" />
                </group>
                <group
                  name="pCube136"
                  position={[-3.39, 13.043, 0]}
                  rotation={[0, -Math.PI / 2, 0]}
                  scale={[0.141, 0.035, 0.488]}
                >
                  <group name="transform130" />
                </group>
                <group
                  name="pCube137"
                  position={[-3.374, 13.043, 0.332]}
                  rotation={[0, -1.473, 0]}
                  scale={[0.141, 0.035, 0.488]}
                >
                  <group name="transform129" />
                </group>
                <group
                  name="pCube138"
                  position={[-3.325, 13.043, 0.661]}
                  rotation={[0, -1.374, 0]}
                  scale={[0.141, 0.035, 0.488]}
                >
                  <group name="transform128" />
                </group>
                <group
                  name="pCube139"
                  position={[-3.244, 13.043, 0.984]}
                  rotation={[0, -1.276, 0]}
                  scale={[0.141, 0.035, 0.488]}
                >
                  <group name="transform127" />
                </group>
                <group
                  name="pCube140"
                  position={[-3.132, 13.043, 1.297]}
                  rotation={[0, -1.178, 0]}
                  scale={[0.141, 0.035, 0.488]}
                >
                  <group name="transform126" />
                </group>
                <group
                  name="pCube141"
                  position={[-2.99, 13.043, 1.598]}
                  rotation={[0, -1.08, 0]}
                  scale={[0.141, 0.035, 0.488]}
                >
                  <group name="transform125" />
                </group>
                <group
                  name="pCube142"
                  position={[-2.819, 13.043, 1.884]}
                  rotation={[0, -0.982, 0]}
                  scale={[0.141, 0.035, 0.488]}
                >
                  <group name="transform124" />
                </group>
                <group
                  name="pCube143"
                  position={[-2.621, 13.043, 2.151]}
                  rotation={[0, -0.884, 0]}
                  scale={[0.141, 0.035, 0.488]}
                >
                  <group name="transform123" />
                </group>
                <group
                  name="pCube144"
                  position={[-2.397, 13.043, 2.397]}
                  rotation={[0, -Math.PI / 4, 0]}
                  scale={[0.141, 0.035, 0.488]}
                >
                  <group name="transform122" />
                </group>
                <group
                  name="pCube145"
                  position={[-2.151, 13.043, 2.621]}
                  rotation={[0, -0.687, 0]}
                  scale={[0.141, 0.035, 0.488]}
                >
                  <group name="transform121" />
                </group>
                <group
                  name="pCube146"
                  position={[-1.884, 13.043, 2.819]}
                  rotation={[0, -0.589, 0]}
                  scale={[0.141, 0.035, 0.488]}
                >
                  <group name="transform120" />
                </group>
                <group
                  name="pCube147"
                  position={[-1.598, 13.043, 2.99]}
                  rotation={[0, -0.491, 0]}
                  scale={[0.141, 0.035, 0.488]}
                >
                  <group name="transform119" />
                </group>
                <group
                  name="pCube148"
                  position={[-1.297, 13.043, 3.132]}
                  rotation={[0, -Math.PI / 8, 0]}
                  scale={[0.141, 0.035, 0.488]}
                >
                  <group name="transform118" />
                </group>
                <group
                  name="pCube149"
                  position={[-0.984, 13.043, 3.244]}
                  rotation={[0, -0.295, 0]}
                  scale={[0.141, 0.035, 0.488]}
                >
                  <group name="transform117" />
                </group>
                <group
                  name="pCube150"
                  position={[-0.661, 13.043, 3.325]}
                  rotation={[0, -0.196, 0]}
                  scale={[0.141, 0.035, 0.488]}
                >
                  <group name="transform116" />
                </group>
                <group
                  name="pCube151"
                  position={[-0.332, 13.043, 3.374]}
                  rotation={[0, -0.098, 0]}
                  scale={[0.141, 0.035, 0.488]}
                >
                  <group name="transform115" />
                </group>
                <group
                  name="pCube152"
                  position={[0, 13.043, 3.39]}
                  scale={[0.141, 0.035, 0.488]}
                >
                  <group name="transform114" />
                </group>
                <group
                  name="pCube153"
                  position={[-5.383, -1.506, -3.753]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.459, 0.288, 0.459]}
                >
                  <mesh
                    name="pCube153_Dark_0"
                    geometry={nodes.pCube153_Dark_0.geometry}
                    material={materials.Dark}
                  />
                </group>
                <group
                  name="polySurface189"
                  position={[1.248, 0.161, 0]}
                  scale={[1.232, 1.232, 1]}
                >
                  <group
                    name="polySurface191"
                    position={[-5.376, -1.362, 0.002]}
                  >
                    <mesh
                      name="polySurface191_Light_0"
                      geometry={nodes.polySurface191_Light_0.geometry}
                      material={materials.Light}
                    />
                  </group>
                  <group name="transform180" />
                </group>
                <group
                  name="pCylinder6"
                  position={[-5.377, -1.518, 0]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.118, 0.002, 0.118]}
                >
                  <mesh
                    name="pCylinder6_Dark_0"
                    geometry={nodes.pCylinder6_Dark_0.geometry}
                    material={materials.Dark}
                  />
                </group>
                <group
                  name="pCylinder7"
                  position={[-4.684, -1.216, 0]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.055, 0.007, 0.055]}
                >
                  <mesh
                    name="pCylinder7_Dark_0"
                    geometry={nodes.pCylinder7_Dark_0.geometry}
                    material={materials.Dark}
                  />
                </group>
                <group
                  name="pCylinder8"
                  position={[-6.166, -1.855, 0]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.055, 0.007, 0.055]}
                >
                  <mesh
                    name="pCylinder8_Dark_0"
                    geometry={nodes.pCylinder8_Dark_0.geometry}
                    material={materials.Dark}
                  />
                </group>
                <group
                  name="pCylinder9"
                  position={[-5.998, -1.711, 0]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.032, 0.007, 0.032]}
                >
                  <mesh
                    name="pCylinder9_Dark_0"
                    geometry={nodes.pCylinder9_Dark_0.geometry}
                    material={materials.Dark}
                  />
                </group>
                <group
                  name="pCylinder10"
                  position={[-5.15, -2.317, 0]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.032, 0.007, 0.032]}
                >
                  <mesh
                    name="pCylinder10_Dark_0"
                    geometry={nodes.pCylinder10_Dark_0.geometry}
                    material={materials.Dark}
                  />
                </group>
                <group
                  name="pCylinder11"
                  position={[-5.746, -0.916, 0]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.04, 0.007, 0.04]}
                >
                  <mesh
                    name="pCylinder11_Dark_0"
                    geometry={nodes.pCylinder11_Dark_0.geometry}
                    material={materials.Dark}
                  />
                </group>
                <group
                  name="pCylinder12"
                  position={[-4.496, -1.762, 0]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.029, 0.007, 0.029]}
                >
                  <mesh
                    name="pCylinder12_Dark_0"
                    geometry={nodes.pCylinder12_Dark_0.geometry}
                    material={materials.Dark}
                  />
                </group>
                <group
                  name="pCylinder13"
                  position={[-5.995, -1.933, 0]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.025, 0.007, 0.025]}
                >
                  <mesh
                    name="pCylinder13_Dark_0"
                    geometry={nodes.pCylinder13_Dark_0.geometry}
                    material={materials.Dark}
                  />
                </group>
                <group
                  name="pCylinder14"
                  position={[-6.113, -2.097, 0]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.032, 0.007, 0.032]}
                >
                  <mesh
                    name="pCylinder14_Dark_0"
                    geometry={nodes.pCylinder14_Dark_0.geometry}
                    material={materials.Dark}
                  />
                </group>
                <group
                  name="pCylinder15"
                  position={[-6.038, -1.852, 0]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.02, 0.007, 0.02]}
                >
                  <mesh
                    name="pCylinder15_Dark_0"
                    geometry={nodes.pCylinder15_Dark_0.geometry}
                    material={materials.Dark}
                  />
                </group>
                <group
                  name="pCylinder16"
                  position={[-5.102, -1.774, 0]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.032, 0.007, 0.032]}
                >
                  <mesh
                    name="pCylinder16_Dark_0"
                    geometry={nodes.pCylinder16_Dark_0.geometry}
                    material={materials.Dark}
                  />
                </group>
                <group
                  name="pCube154"
                  position={[-5.374, -0.428, 0]}
                  scale={[0.043, 0.191, 0.015]}
                >
                  <mesh
                    name="pCube154_Dark_0"
                    geometry={nodes.pCube154_Dark_0.geometry}
                    material={materials.Dark}
                  />
                </group>
                <group
                  name="pCube155"
                  position={[-5.374, -2.601, 0]}
                  scale={[0.043, 0.191, 0.015]}
                >
                  <mesh
                    name="pCube155_Dark_0"
                    geometry={nodes.pCube155_Dark_0.geometry}
                    material={materials.Dark}
                  />
                </group>
                <group
                  name="pCube156"
                  position={[-6.457, -1.518, 0]}
                  rotation={[0, 0, Math.PI / 2]}
                  scale={[0.043, 0.191, 0.015]}
                >
                  <mesh
                    name="pCube156_Dark_0"
                    geometry={nodes.pCube156_Dark_0.geometry}
                    material={materials.Dark}
                  />
                </group>
                <group
                  name="pCube157"
                  position={[-4.294, -1.518, 0]}
                  rotation={[0, 0, Math.PI / 2]}
                  scale={[0.043, 0.191, 0.015]}
                >
                  <mesh
                    name="pCube157_Dark_0"
                    geometry={nodes.pCube157_Dark_0.geometry}
                    material={materials.Dark}
                  />
                </group>
                <group name="polySurface196">
                  <mesh
                    name="polySurface196_Dark_0"
                    geometry={nodes.polySurface196_Dark_0.geometry}
                    material={materials.Dark}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/r3f/models/hud/scene.gltf')
