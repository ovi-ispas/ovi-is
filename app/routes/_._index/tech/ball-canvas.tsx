/* eslint-disable react/no-unknown-property */
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { Suspense, useRef, useState } from 'react'

import { AnimationLoader } from '~/components/animation-loader'

const Ball = ({ imgUrl }: { imgUrl: string }) => {
  const [decal] = useTexture([imgUrl])
  const [hovered, setHover] = useState(false)
  const mesh = useRef()

  useFrame(() => {
    if (!hovered) return
    mesh.current.rotation.y += 0.01
  })

  return (
    <group scale={hovered ? 1.1 : 1}>
      <Float speed={5} rotationIntensity={1} floatIntensity={3}>
        <ambientLight intensity={1} />
        <directionalLight position={[0, 0, 0.05]} />
        <mesh
          castShadow
          receiveShadow
          scale={2.75}
          onPointerOver={() => setHover(true)}
          onPointerOut={() => setHover(false)}
          ref={mesh}
        >
          <icosahedronGeometry args={[1, 1]} />
          <meshStandardMaterial
            color={hovered ? '#55deff' : '#15c1eb'}
            polygonOffset
            polygonOffsetFactor={-5}
            flatShading
          />
          <Decal
            position={[0, 0, 1]}
            rotation={[2 * Math.PI, 0, 6.25]}
            scale={1}
            map={decal}
          />
        </mesh>
      </Float>
    </group>
  )
}

export function BallCanvas({ icon }: { icon: string }) {
  return (
    <Canvas>
      <Suspense fallback={<AnimationLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  )
}
