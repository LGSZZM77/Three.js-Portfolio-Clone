import {Suspense} from "react";
import {Canvas} from "@react-three/fiber";
import {Decal, Float, OrbitControls, Preload, useTexture, useCursor} from "@react-three/drei";
import CanvasLoader from "../Loader";
import {useState} from "react";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);
  const [hovered, setHovered] = useState(false);
  useCursor(hovered);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh
        castShadow
        receiveShadow
        scale={2.75}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial color="#fff8eb" polygonOffset polygonOffsetFactor={-5} flatShading />
        <Decal position={[0, 0, 1]} rotation={[Math.PI * 2, 0, 6.25]} flatShading map={decal} />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({icon}) => {
  return (
    <Canvas frameloop="always" gl={{preserveDrawingBuffer: true}}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
