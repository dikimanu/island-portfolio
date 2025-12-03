// Updated Home.jsx with sound button moved to top-left and made smaller
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";

import sakura from "../assets/sakura.mp3";
import { HomeInfo, Loader } from "../components";
import { soundoff, soundon } from "../assets/icons";
import { Bird, Island, Plane, Sky } from "../models";

const Home = () => {
  const audioRef = useRef(new Audio(sakura));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;

  const [currentStage, setCurrentStage] = useState(1);
  const [isRotating, setIsRotating] = useState(false);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  useEffect(() => {
    if (isPlayingMusic) audioRef.current.play();
    return () => audioRef.current.pause();
  }, [isPlayingMusic]);

  const adjustBiplaneForScreenSize = () => {
    if (window.innerWidth < 768) {
      return [[1.2, 1.2, 1.2], [0, -1, 0]];
    }
    return [[3, 3, 3], [0, -4, -4]];
  };

  const adjustIslandForScreenSize = () => {
    if (window.innerWidth < 768) {
      return [[0.75, 0.75, 0.75], [0, -5.5, -40]];
    }
    return [[1, 1, 1], [0, -6.5, -43.4]];
  };

  const [biplaneScale, biplanePosition] = adjustBiplaneForScreenSize();
  const [islandScale, islandPosition] = adjustIslandForScreenSize();

  return (
    <section className="w-full h-screen relative overflow-hidden">
      <div className="absolute top-20 md:top-28 left-0 right-0 z-10 flex items-center justify-center px-2">
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>

      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 5, 10]} intensity={2} />
          <spotLight position={[0, 50, 10]} angle={0.15} penumbra={1} intensity={2} />
          <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1} />

          <Bird />
          <Sky isRotating={isRotating} />
          <Island
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
            position={islandPosition}
            rotation={[0.1, 4.7077, 0]}
            scale={islandScale}
          />
          <Plane
            isRotating={isRotating}
            position={biplanePosition}
            rotation={[0, 20.1, 0]}
            scale={biplaneScale}
          />
        </Suspense>
      </Canvas>

      {/* SOUND BUTTON - moved to top-left & made smaller */}
      <div className="absolute top-4 left-4 z-20">
        <img
          src={!isPlayingMusic ? soundoff : soundon}
          alt="jukebox"
          onClick={() => setIsPlayingMusic(!isPlayingMusic)}
          className="w-6 h-6 md:w-7 md:h-7 cursor-pointer object-contain opacity-90 hover:opacity-100 transition"
        />
      </div>
    </section>
  );
};

export default Home;