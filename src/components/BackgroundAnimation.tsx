import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

function AnimatedShape({ position, color, speed, distort }: { position: [number, number, number], color: string, speed: number, distort: number }) {
  const mesh = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.x = state.clock.getElapsedTime() * 0.2 * speed;
      mesh.current.rotation.y = state.clock.getElapsedTime() * 0.3 * speed;
    }
  });

  return (
    <Float speed={speed} rotationIntensity={1} floatIntensity={2}>
      <Sphere args={[1, 64, 64]} position={position} ref={mesh}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={distort}
          speed={speed}
          roughness={0.2}
          metalness={0.1}
          transparent
          opacity={0.15}
        />
      </Sphere>
    </Float>
  );
}

export function BackgroundAnimation() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none opacity-40">
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        <ambientLight intensity={0.8} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <AnimatedShape position={[-4, 2, 0]} color="#4953bc" speed={1.5} distort={0.4} />
        <AnimatedShape position={[5, -3, -2]} color="#45dfa4" speed={1.2} distort={0.5} />
        <AnimatedShape position={[0, -5, -5]} color="#303e51" speed={0.8} distort={0.3} />
        <AnimatedShape position={[6, 4, -3]} color="#818CF8" speed={2} distort={0.6} />
      </Canvas>
    </div>
  );
}
