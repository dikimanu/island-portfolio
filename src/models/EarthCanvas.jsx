import React, { Suspense, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import Loader from "../components/Loader";

// Responsive breakpoints
const useIsMobile = () => {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkSize = () => setIsMobile(window.innerWidth <= 768);
    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  return isMobile;
};

// Stars background
const Stars = (props) => {
  const ref = React.useRef();

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
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial transparent color="#f272c8" size={0.002} sizeAttenuation depthWrite={false} />
      </Points>
    </group>
  );
};

// Earth model
const EarthModel = ({ scale }) => {
  const { scene } = useGLTF("/planet/scene.gltf");
  return <primitive object={scene} scale={scale} />;
};

// Main Canvas
const EarthCanvas = () => {
  const isMobile = useIsMobile();

  // Responsive settings
  const cameraPos = isMobile ? [0, 0, 5] : [0, 0, 7];
  const earthScale = isMobile ? 2.0 : 1.6;

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas
        shadows
        frameloop="always"
        dpr={[1, 2]}
        gl={{ preserveDrawingBuffer: true }}
        camera={{ fov: 45, near: 0.1, far: 200, position: cameraPos }}
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
          <Stars scale={5} />
          <EarthModel scale={earthScale} />
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default EarthCanvas;
