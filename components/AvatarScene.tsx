"use client";

import { Suspense, useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Environment } from "@react-three/drei";
import * as THREE from "three";

function AvatarHead() {
  const meshRef = useRef<THREE.Mesh>(null);
  const { pointer } = useThree();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y = THREE.MathUtils.lerp(
        meshRef.current.rotation.y,
        pointer.x * 0.3,
        0.05
      );
      meshRef.current.rotation.x = THREE.MathUtils.lerp(
        meshRef.current.rotation.x,
        -pointer.y * 0.15,
        0.05
      );
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
      <mesh ref={meshRef} position={[0, 0.2, 0]}>
        <icosahedronGeometry args={[1.5, 4]} />
        <MeshDistortMaterial
          color="#800020"
          roughness={0.2}
          metalness={0.8}
          distort={0.15}
          speed={2}
          envMapIntensity={1}
        />
      </mesh>
    </Float>
  );
}

function OrbitingRing({ radius, speed, color, thickness }: {
  radius: number;
  speed: number;
  color: string;
  thickness: number;
}) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.x = clock.elapsedTime * speed * 0.5;
      ref.current.rotation.y = clock.elapsedTime * speed;
    }
  });

  return (
    <mesh ref={ref}>
      <torusGeometry args={[radius, thickness, 16, 64]} />
      <meshStandardMaterial
        color={color}
        transparent
        opacity={0.3}
        wireframe
      />
    </mesh>
  );
}

function FloatingParticles() {
  const ref = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const arr = new Float32Array(200 * 3);
    for (let i = 0; i < 200; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 8;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 8;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 8;
    }
    return arr;
  }, []);

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.y = clock.elapsedTime * 0.02;
      ref.current.rotation.x = Math.sin(clock.elapsedTime * 0.01) * 0.1;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#800020"
        size={0.03}
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

function HolographicPanel({ position, rotation }: {
  position: [number, number, number];
  rotation: [number, number, number];
}) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.position.y = position[1] + Math.sin(clock.elapsedTime * 0.8 + position[0]) * 0.1;
    }
  });

  return (
    <mesh ref={ref} position={position} rotation={rotation}>
      <planeGeometry args={[0.6, 0.4]} />
      <meshStandardMaterial
        color="#800020"
        transparent
        opacity={0.08}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[5, 5, 5]} intensity={0.8} color="#fff" />
      <pointLight position={[-3, -2, 4]} intensity={0.3} color="#800020" />
      <spotLight
        position={[0, 5, 3]}
        angle={0.4}
        penumbra={1}
        intensity={0.6}
        color="#B8334D"
      />

      <AvatarHead />

      <OrbitingRing radius={2.2} speed={0.3} color="#800020" thickness={0.01} />
      <OrbitingRing radius={2.8} speed={-0.2} color="#5C0015" thickness={0.008} />

      <FloatingParticles />

      <HolographicPanel position={[2.2, 0.5, -0.5]} rotation={[0, -0.5, 0]} />
      <HolographicPanel position={[-2.0, -0.3, 0.5]} rotation={[0, 0.4, 0.1]} />
      <HolographicPanel position={[1.8, -0.8, 0.8]} rotation={[0.1, -0.3, 0]} />

      <Environment preset="city" />
    </>
  );
}

function LoadingFallback() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="relative">
        <div className="w-32 h-32 rounded-full border border-accent/20 animate-pulse-glow" />
        <div className="absolute inset-4 rounded-full border border-accent/10 animate-float" />
      </div>
    </div>
  );
}

export default function AvatarScene() {
  return (
    <div className="w-full h-[500px] lg:h-[600px] relative">
      <Suspense fallback={<LoadingFallback />}>
        <Canvas
          camera={{ position: [0, 0, 5], fov: 45 }}
          dpr={[1, 1.5]}
          gl={{ antialias: true, alpha: true }}
          style={{ background: "transparent" }}
        >
          <Scene />
        </Canvas>
      </Suspense>
    </div>
  );
}
