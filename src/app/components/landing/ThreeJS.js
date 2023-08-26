import React, { useState, useRef, Suspense } from "react";
import * as THREE from "three";
import {
  Canvas,
  useLoader,
  useThree,
  useFrame,
  useHelper,
} from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

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

  const width = texture.image.width / 1000;
  const height = texture.image.height / 1000;

  const mesh = useRef();

  const onClickMesh = () => {
    if (mesh.current) {
      camera.position.set(mesh.current.position.x, mesh.current.position.y, 1);
      camera.lookAt(mesh.current.position);
      // window.open(
      //   `https://jinbokk-${props.image.dimension}-${props.image.title}.netlify.app/`
      // );
    }
  };

  const onDoubleClickMesh = () => {
    if (mesh.current) {
      // camera.position.set(mesh.current.position.x, mesh.current.position.y, 1);
      // camera.lookAt(mesh.current.position);
      window.open(
        `https://jinbokk-${props.image.dimension}-${props.image.title}.netlify.app/`
      );
    }
  };

  return (
    <mesh
      ref={mesh}
      position={[width * props.index, 0, 0]}
      onClick={onClickMesh}
      onDoubleClick={onDoubleClickMesh}
      onPointerOver={(e) => {
        e.object.material.emissive = new THREE.Color("#1c1c1c");
        e.object.material.emissiveIntensity = 5;
      }}
      onPointerLeave={(e) => {
        e.object.material.emissiveIntensity = 1;
      }}
      lookAt={new THREE.Vector3(0, 0, 0)}
    >
      <planeGeometry args={[width, height]} />
      <meshPhongMaterial map={texture} />
    </mesh>
  );
};

// https://sketchfab.com/3d-models/gaming-laptop-4e72a2078b3c4a75a821ab09830693fe
// Laptop 3D Model by Blue Odym
const LaptopGLTF = () => {
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  const texture = useLoader(
    THREE.TextureLoader,
    `/images/threejs/${images[0].dimension}-${images[0].title}.png`
  );

  const gltf = useLoader(GLTFLoader, "/3Dmodels/laptop/scene.gltf");

  // useFrame((state, delta, frame) => {
  //   const mesh = gltf.scene.children[0];
  //   mesh.rotation.y = mesh.rotation.z += 0.01;
  //   mesh.rotation.x = state.clock.getElapsedTime();
  // });

  // gltf.scene.traverse((child) => {
  //   if (child.isMesh && child.name === "Object_7") {
  //     child.material.map = useLoader(
  //       THREE.TextureLoader,
  //       `/images/threejs/${images[0].dimension}-${images[0].title}.png`
  //     );
  //   }
  // });

  return (
    <>
      <primitive
        object={gltf.scene}
        // scale={0.01}
        onPointerOver={(e) => setHover(true)}
        onPointerOut={(e) => setHover(false)}
        onClick={(e) => console.log(e.object)}
      />
    </>
  );
};

const CameraControls = () => {
  const {
    camera,
    gl: { domElement },
  } = useThree();

  const controls = useRef();

  useFrame((state) => controls.current.update());

  return (
    <OrbitControls
      ref={controls}
      args={[camera, domElement]}
      onClick={(e) => console.log(e)}
    />
  );
};

const ThreeJS = () => {
  return (
    <Canvas
      camera={{
        position: [0, 0, 10],
        fov: 45,
        near: 0.1,
        far: 2000,
      }}
    >
      <ambientLight intensity={1.2} />
      <directionalLight color="white" position={[0, 5, -3]} intensity={2} />
      <CameraControls />
      {images.map((image, index) => {
        return <MeshComponent key={index} index={index} image={image} />;
      })}
      {/* <axesHelper /> */}
      {/* <Suspense fallback={null}>
        <LaptopGLTF position={[0, 0, 0]} />
      </Suspense> */}
    </Canvas>
  );
};

export default ThreeJS;
