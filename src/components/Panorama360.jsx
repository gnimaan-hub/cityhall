import { Suspense, useEffect, useRef } from 'react'
import { Canvas, useLoader, useThree } from '@react-three/fiber'
import * as THREE from 'three'

function Sphere({ image }) {
  const texture = useLoader(THREE.TextureLoader, image)
  texture.colorSpace = THREE.SRGBColorSpace
  texture.minFilter = THREE.LinearFilter

  return (
    <mesh scale={[-1, 1, 1]}>
      <sphereGeometry args={[60, 72, 48]} />
      <meshBasicMaterial map={texture} side={THREE.BackSide} toneMapped={false} />
    </mesh>
  )
}

function DragLook({ startLon = 180 }) {
  const { camera, gl } = useThree()
  const dragging = useRef(false)
  const last = useRef({ x: 0, y: 0 })
  const lonLat = useRef({ lon: startLon, lat: 0 })

  useEffect(() => {
    const el = gl.domElement
    el.style.touchAction = 'none'

    const applyLook = () => {
      const { lon, lat } = lonLat.current
      const phi = THREE.MathUtils.degToRad(90 - lat)
      const theta = THREE.MathUtils.degToRad(lon)
      const target = new THREE.Vector3(
        Math.sin(phi) * Math.cos(theta),
        Math.cos(phi),
        Math.sin(phi) * Math.sin(theta)
      )
      camera.lookAt(target)
    }

    const onPointerDown = (e) => {
      dragging.current = true
      last.current = { x: e.clientX, y: e.clientY }
      el.style.cursor = 'grabbing'
    }
    const onPointerMove = (e) => {
      if (!dragging.current) return
      const dx = e.clientX - last.current.x
      const dy = e.clientY - last.current.y
      last.current = { x: e.clientX, y: e.clientY }
      lonLat.current.lon -= dx * 0.18
      lonLat.current.lat = THREE.MathUtils.clamp(lonLat.current.lat + dy * 0.18, -75, 75)
      applyLook()
    }
    const onPointerUp = () => {
      dragging.current = false
      el.style.cursor = 'grab'
    }

    el.style.cursor = 'grab'
    applyLook()
    el.addEventListener('pointerdown', onPointerDown)
    window.addEventListener('pointermove', onPointerMove)
    window.addEventListener('pointerup', onPointerUp)
    return () => {
      el.removeEventListener('pointerdown', onPointerDown)
      window.removeEventListener('pointermove', onPointerMove)
      window.removeEventListener('pointerup', onPointerUp)
    }
  }, [camera, gl, startLon])

  return null
}

export default function Panorama360({ image, startLon = 180 }) {
  return (
    <Canvas
      key={image}
      camera={{ position: [0, 0, 0.1], fov: 75 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, toneMapping: THREE.NoToneMapping }}
    >
      <Suspense fallback={null}>
        <Sphere image={image} />
      </Suspense>
      <DragLook startLon={startLon} />
    </Canvas>
  )
}
