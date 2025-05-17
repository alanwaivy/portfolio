'use client'

import { useRef, useMemo, useEffect } from 'react'
import { Canvas, useFrame, useThree, extend } from '@react-three/fiber'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { BufferGeometry, Float32BufferAttribute, TextureLoader, Vector3, AdditiveBlending, PointsMaterial, MeshPhongMaterial, IcosahedronGeometry, SphereGeometry, PerspectiveCamera } from 'three'
import { createNoise3D } from 'simplex-noise'

extend({ OrbitControls })

const noise3D = createNoise3D()
const blobScale = 2
const morphSpeed = 1.2  // Increased from 0.5 for faster morphing
const pulseFrequency = 1.2  // Increased for faster pulsing
const deformationStrength = 4.5  // Slightly increased deformation

function randomPointSphere(radius: number) {
  const theta = 2 * Math.PI * Math.random()
  const phi = Math.acos(2 * Math.random() - 1)
  const dx = radius * Math.sin(phi) * Math.cos(theta)
  const dy = radius * Math.sin(phi) * Math.sin(theta)
  const dz = radius * Math.cos(phi)
  return new Vector3(dx, dy, dz)
}

function CameraController() {
  const { camera, gl } = useThree()
  
  useEffect(() => {
    const controls = new OrbitControls(camera, gl.domElement)
    controls.autoRotate = true
    controls.autoRotateSpeed = 1
    controls.maxDistance = 350
    controls.minDistance = 150
    controls.enablePan = false
    controls.enableZoom = false
    
    return () => {
      controls.dispose()
    }
  }, [camera, gl])
  
  return null
}

function CosmicBubble() {
  const nucleusRef = useRef()
  const starsRef = useRef()
  const sphereBgRef = useRef()
  const { camera } = useThree()
  
  useEffect(() => {
    camera.position.set(0, 0, 200)
  }, [camera])

  const textures = useMemo(() => {
    const loader = new TextureLoader()
    return {
      sphereBg: loader.load('https://i.ibb.co/4gHcRZD/bg3-je3ddz.jpg'),
      nucleus: loader.load('https://i.ibb.co/hcN2qXk/star-nc8wkw.jpg'),
      star: loader.load('https://i.ibb.co/ZKsdYSz/p1-g3zb2a.png'),
      star1: loader.load('https://i.ibb.co/F8by6wW/p2-b3gnym.png'),
      star2: loader.load('https://i.ibb.co/yYS2yx5/p3-ttfn70.png'),
      star4: loader.load('https://i.ibb.co/yWfKkHh/p4-avirap.png'),
    }
  }, [])

  const nucleusGeometry = useMemo(() => new IcosahedronGeometry(30, 15), [])
  const nucleusMaterial = useMemo(() => new MeshPhongMaterial({ 
    map: textures.nucleus,
    emissive: '#ff3300',
    emissiveIntensity: 0.8,
    shininess: 100,
    transparent: true,
    opacity: 0.9,
  }), [textures])

  const sphereBgGeometry = useMemo(() => new SphereGeometry(150, 40, 40), [])
  const sphereBgMaterial = useMemo(() => {
    textures.sphereBg.anisotropy = 16
    return new MeshPhongMaterial({
      map: textures.sphereBg,
      side: 1
    })
  }, [textures])

  const starsGeometry = useMemo(() => {
    const geometry = new BufferGeometry()
    const vertices = []
    const phases = [] // For individual particle timing
    const orbits = [] // For orbital radius
    const speeds = [] // For individual speeds

    for (let i = 0; i < 50; i++) {
      const point = randomPointSphere(100 + Math.random() * 50)
      vertices.push(point.x, point.y, point.z)
      
      // Random starting phase for each particle
      phases.push(Math.random() * Math.PI * 2)
      // Random orbit radius
      orbits.push(30 + Math.random() * 20)
      // Random speed multiplier
      speeds.push(0.1 + Math.random() * 0.2)
    }

    geometry.setAttribute('position', new Float32BufferAttribute(vertices, 3))
    geometry.setAttribute('phase', new Float32BufferAttribute(phases, 1))
    geometry.setAttribute('orbit', new Float32BufferAttribute(orbits, 1))
    geometry.setAttribute('speed', new Float32BufferAttribute(speeds, 1))
    return geometry
  }, [])

  useFrame((state) => {
    const time = state.clock.getElapsedTime() * morphSpeed

    // Update nucleus vertices with more dynamic morphing
    if (nucleusRef.current) {
      const positions = nucleusRef.current.geometry.attributes.position
      const vector = new Vector3()
      
      for (let i = 0; i < positions.count; i++) {
        vector.fromBufferAttribute(positions, i)
        vector.normalize()
        
        // Create multiple layers of noise with different frequencies
        const baseNoise = noise3D(
          vector.x * 0.5 + time * 0.2,
          vector.y * 0.5 + time * 0.2,
          vector.z * 0.5 + time * 0.3
        )
        
        const detailNoise = noise3D(
          vector.x * 2 + time * 0.4,
          vector.y * 2 + time * 0.4,
          vector.z * 2 + time * 0.5
        )
        
        const highFreqNoise = noise3D(
          vector.x * 4 + time * 0.6,
          vector.y * 4 + time * 0.6,
          vector.z * 4 + time * 0.7
        )
        
        // Add pulsing effect with multiple frequencies
        const pulse = Math.sin(time * pulseFrequency) * 0.5 + 0.5
        const fastPulse = Math.sin(time * pulseFrequency * 2) * 0.25 + 0.25
        
        // Combine different noise layers for more organic movement
        const totalDeformation = 
          baseNoise * deformationStrength * 1.2 + 
          detailNoise * (deformationStrength * 0.8) +
          highFreqNoise * (deformationStrength * 0.4) +
          pulse * 3 +
          fastPulse * 2
        
        // Base radius with varying deformation
        const distance = 30 + totalDeformation * blobScale
        
        vector.multiplyScalar(distance)
        positions.setXYZ(i, vector.x, vector.y, vector.z)
      }
      
      positions.needsUpdate = true
      nucleusRef.current.rotation.y += 0.001
      nucleusRef.current.rotation.x += 0.0005
      nucleusRef.current.rotation.z += 0.0002
    }

    // Update moving stars with bubble-like motion
    if (starsRef.current) {
      const positions = starsRef.current.geometry.attributes.position
      const phases = starsRef.current.geometry.attributes.phase
      const orbits = starsRef.current.geometry.attributes.orbit
      const speeds = starsRef.current.geometry.attributes.speed
      
      for (let i = 0; i < positions.count; i++) {
        const i3 = i * 3
        const phase = phases.array[i]
        const orbit = orbits.array[i]
        const speed = speeds.array[i]
        
        // Calculate orbital motion
        const angle = time * speed + phase
        
        // Create a spiral-like motion pattern
        const radius = orbit * (1 + Math.sin(time * 0.2) * 0.2)
        const heightOffset = Math.sin(angle * 0.5) * 15
        
        // Update position with smooth circular motion
        positions.array[i3] = Math.cos(angle) * radius
        positions.array[i3 + 1] = heightOffset + Math.sin(time * 0.3 + i) * 10
        positions.array[i3 + 2] = Math.sin(angle) * radius
      }
      
      positions.needsUpdate = true
    }

    // Update background sphere with very slow rotation
    if (sphereBgRef.current) {
      sphereBgRef.current.rotation.x += 0.0002
      sphereBgRef.current.rotation.y += 0.0002
      sphereBgRef.current.rotation.z += 0.0002
    }
  })

  const starsMaterial = useMemo(() => {
    return new PointsMaterial({
      size: 4,
      color: '#ffffff',
      transparent: true,
      opacity: 0.8,
      map: textures.star,
      blending: AdditiveBlending,
      depthWrite: false
    })
  }, [textures])

  return (
    <>
      <pointLight position={[0, 0, 0]} intensity={2} color="#ff3300" distance={80} decay={2} />
      <pointLight position={[40, 0, 0]} intensity={1.5} color="#ff5500" distance={60} decay={2} />
      <pointLight position={[-40, 0, 0]} intensity={1.5} color="#ff5500" distance={60} decay={2} />
      <pointLight position={[0, 40, 0]} intensity={1} color="#ff8800" distance={60} decay={2} />
      <pointLight position={[0, -40, 0]} intensity={1} color="#ff8800" distance={60} decay={2} />
      <mesh ref={nucleusRef} geometry={nucleusGeometry} material={nucleusMaterial} />
      <mesh ref={sphereBgRef} geometry={sphereBgGeometry} material={sphereBgMaterial} />
      <points ref={starsRef} geometry={starsGeometry} material={starsMaterial} />
      
      {/* Fixed stars */}
      <points>
        <bufferGeometry>
          {Array(20).fill(null).map((_, i) => {
            const point = randomPointSphere(70 + Math.random() * 79)
            return <bufferAttribute
              key={i}
              attach="attributes-position"
              count={1}
              array={new Float32Array([point.x, point.y, point.z])}
              itemSize={3}
            />
          })}
        </bufferGeometry>
        <pointsMaterial
          size={15}
          map={textures.star1}
          transparent
          blending={AdditiveBlending}
        />
      </points>
    </>
  )
}

export default function Scene() {
  return (
    <div className="fixed inset-0 h-screen w-screen bg-[#000000] overflow-hidden">
      <Canvas
        camera={{ position: [0, 0, 200], fov: 55 }}
        style={{ width: '100%', height: '100%' }}
      >
        <ambientLight intensity={1} position={[0, 20, 20]} />
        <directionalLight intensity={2} position={[0, 50, -20]} />
        <fog attach="fog" args={['#000000', 100, 200]} />
        <CameraController />
        <CosmicBubble />
      </Canvas>
    </div>
  )
} 