import React, { useRef } from "react";
import * as THREE from "three";
import { Canvas, useLoader, useThree, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const images = [
  {
    dimension: "2d",
    title: "confetti",
  },
  {
    dimension: "2d",
    title: "countdown",
  },
  {
    dimension: "2d",
    title: "firework",
  },
  {
    dimension: "2d",
    title: "minigame",
  },
  {
    dimension: "2d",
    title: "rope-physics",
  },
  {
    dimension: "3d",
    title: "card",
  },
  {
    dimension: "3d",
    title: "cube",
  },
  {
    dimension: "3d",
    title: "origami-boat",
  },
  {
    dimension: "3d",
    title: "text",
  },
];

const MeshComponent = (props) => {
  const { camera } = useThree();

  const texture = useLoader(
    THREE.TextureLoader,
    `/images/threejs/${props.image.dimension}-${props.image.title}.png`
  );

  const mesh = useRef();

  const onClickMesh = () => {
    if (mesh.current) {
      camera.position.set(
        mesh.current.position.x,
        mesh.current.position.y,
        1
      );
      camera.lookAt(mesh.current.position);
      window.open(
        `https://jinbokk-${props.image.dimension}-${props.image.title}.netlify.app/`
      );
    }
  };

  return (
    <mesh
      ref={mesh}
      position={[props.index, 0, 0]}
      onClick={onClickMesh}
      onPointerOver={(e) => {
        e.object.material.emissive = new THREE.Color("#1c1c1c");
        e.object.material.emissiveIntensity = 5;
      }}
      onPointerLeave={(e) => {
        e.object.material.emissiveIntensity = 1;
      }}
    >
      <planeGeometry />
      <meshPhongMaterial map={texture} />
    </mesh>
  );
};

const CameraControls = () => {
  const {
    camera,
    gl: { domElement },
  } = useThree();

  const controls = useRef();

  useFrame((state) => controls.current.update());

  return <OrbitControls ref={controls} args={[camera, domElement]} />;
};

const ThreeJS = () => {
  return (
    <Canvas
      camera={{
        position: [0, 0, 2],
        near: 0.1,
        far: 100,
      }}
    >
      <ambientLight intensity={5} />
      <CameraControls />
      {images.map((image, index) => {
        return <MeshComponent key={index} index={index} image={image} />;
      })}
      <axesHelper />
    </Canvas>
  );
};

export default ThreeJS;
