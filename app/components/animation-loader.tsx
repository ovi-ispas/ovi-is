import { Html, useProgress } from '@react-three/drei'

export function AnimationLoader() {
  const { progress } = useProgress()
  return (
    <Html>
      <p className="text-center text-xs text-sky-400">{progress.toFixed(2)}%</p>
    </Html>
  )
}
