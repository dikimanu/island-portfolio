import React, { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import Loader from "../components/Loader";

// Starfield Component
const Stars = () => {
  const ref = useRef();

  const sphere = useMemo(
    () => random.inSphere(new Float32Array(5000), { radius: 1.2 }),
    []
  );

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled>
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.002}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

// Earth GLTF Model
const EarthModel = () => {
  const { scene } = useGLTF("/planet/scene.gltf");
  return <primitive object={scene} scale={2} />;
};

// Main Canvas
export default function EarthCanvas() {
  return (
    <div
      id="earth-wrapper"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <Canvas
        shadows
        dpr={[1, 2]}
        gl={{ preserveDrawingBuffer: true }}
        camera={{ fov: 45, near: 0.1, far: 200, position: [0, 0, 5] }}
      >
        <ambientLight intensity={1} />
        <directionalLight position={[5, 3, 5]} intensity={2.5} />

        <Suspense fallback={<Loader />}>
          <OrbitControls
            autoRotate
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Stars />
          <EarthModel />
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
}
