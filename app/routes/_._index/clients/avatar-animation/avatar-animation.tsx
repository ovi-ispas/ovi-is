/* eslint-disable react/no-unknown-property */
import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense, useState } from 'react'

import { AnimationLoader } from '~/components/animation-loader'

import { Avatar } from './avatar'
import { Chair } from './chair'
import { Desk } from './desk'
import { Hud } from './hud'
import { Monitor } from './monitor'

export function AvatarAnimation() {
  const [rotate, setRotate] = useState(false)

  return (
    <div
      onMouseEnter={() => setRotate(true)}
      onMouseLeave={() => setRotate(false)}
      className="flex h-full cursor-grab flex-col items-center px-4"
    >
      <Canvas
        camera={{
          position: [2, 1.8, 10],
          fov: 13,
        }}
        shadows
      >
        <Suspense fallback={<AnimationLoader />}>
          <ambientLight intensity={1.7} />
          <directionalLight
            intensity={2}
            castShadow // highlight-line
            shadow-mapSize-height={512}
            shadow-mapSize-width={512}
          />
          <group position={[0, 0.5, 0]}>
            <color attach="background" args={['#0F172A']} />
            <OrbitControls
              enableZoom={false}
              minPolarAngle={1.3}
              maxPolarAngle={1.3}
              autoRotate={rotate}
            />
            <group position-y={-1} castShadow receiveShadow>
              <Avatar />
            </group>
            <group position={[0.05, -1.05, 0]} scale={1.3}>
              <Chair />
            </group>
            <group
              position={[0.1, -0.34, 0.8]}
              scale={0.014}
              rotation={[0, 3.15, 0]}
              castShadow
              receiveShadow
            >
              <Desk />
            </group>

            <group position={[0.02, -0.02, -0.26]} rotation={[0, 0.4, 0]}>
              <group
                position={[-0.48, -0.3, 0.93]}
                scale={1.3}
                rotation={[0, -0.4, 0]}
                castShadow
                receiveShadow
              >
                <Monitor />
              </group>
              <group
                position={[-0.32, -0.24, 0.95]}
                rotation={[0, -0.4, 0]}
                scale={0.075}
              >
                <mesh>
                  <boxGeometry args={[3.7, 1.3, 0.2]} />
                  <meshBasicMaterial color="#000" />
                </mesh>
              </group>
              <group
                position={[-0.46, 0.02, 0.91]}
                rotation={[0, -0.4, 0]}
                scale={1.75}
              >
                <mesh>
                  <boxGeometry args={[0.34, 0.21, 0.001]} />
                  <meshBasicMaterial color="#005675" />
                </mesh>
              </group>
              <group
                position={[-0.46, 0.02, 0.905]}
                rotation={[0, -0.4, 0]}
                scale={1.75}
              >
                <Hud />
              </group>
            </group>
          </group>
        </Suspense>
      </Canvas>
    </div>
  )
}
