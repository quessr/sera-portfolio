import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { FC, Suspense } from "react";
import Loader from "./Loader";

interface BallCanvasProps {
  icon: string;
}

type BallProps = BallCanvasProps;

const Ball: FC<BallProps> = ({ icon }) => {
  const [decal] = useTexture([icon]);
  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas: FC<BallCanvasProps> = ({ icon }) => {
  return (
    <Canvas>
      <Suspense fallback={<Loader />}>
        <OrbitControls enableZoom={false} />
        <Ball icon={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
