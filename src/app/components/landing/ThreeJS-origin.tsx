import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const ThreeJS = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    if (canvasRef.current) {
      const renderer = new THREE.WebGLRenderer({
        canvas: canvasRef.current,
        alpha: true,
        antialias: true,
      });
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(canvasRef.current.parentElement.clientWidth, canvasRef.current.parentElement.clientHeight)

      const scene = new THREE.Scene();

      const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 2000);
      camera.position.set(0, 0, 5);

      const controls = new OrbitControls(camera, renderer.domElement);
      // controls.enableZoom = false;

      const manager = new THREE.LoadingManager();

      manager.onLoad = function () {
        console.log("All resources loaded.");
      };
      manager.onProgress = function (url, itemsLoaded, itemsTotal) {
        console.log(
          "Loading: " +
          url +
          "\nLoaded " +
          itemsLoaded +
          " of " +
          itemsTotal +
          " files."
        );
      };
      manager.onError = function (url) {
        console.log("Error loading: " + url);
      };

      const ambientLight = new THREE.AmbientLight("white", 20);
      ambientLight.position.set(3, 3, 5);
      scene.add(ambientLight);
      scene.add(new THREE.AxesHelper());

      /** Image */
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

      let meshes: THREE.Mesh[] = [];

      const makePlane = async () => {
        const loader = new THREE.TextureLoader()
        const promises = images.map(image => {
          return loader.loadAsync(`/images/threejs/${image.dimension}-${image.title}.png`)
        });
        const textures = await Promise.all(promises)
        return textures
      }


      makePlane().then(textures => {
        console.log(textures)
        textures.forEach((texture, index) => {
          let imageAspect = texture.image.width / texture.image.height;
          let planeHeight = 2;
          let planeWidth = planeHeight * imageAspect;

          let geometry = new THREE.PlaneGeometry(planeWidth, planeHeight);
          let material = new THREE.MeshBasicMaterial({ map: texture });
          let mesh = new THREE.Mesh(geometry, material);
          mesh.position.set(0, 0, index)
          scene.add(mesh);
        });
      });


      const raycaster = new THREE.Raycaster();
      const mouse = new THREE.Vector2();

      canvasRef.current.addEventListener('click', (event) => {
        // canvas 내에서의 마우스 좌표를 -1에서 1 사이의 값으로 변환
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

        raycaster.setFromCamera(mouse, camera);

        const intersects = raycaster.intersectObjects(scene.children);

        if (intersects.length > 0) {
          const firstIntersected = intersects[0].object;
          console.log('Clicked on', firstIntersected);
        }
      });

      const animate = () => {
        renderer.render(scene, camera);
        controls.update();
        requestAnimationFrame(animate);
      };

      animate();
    }
  }, [canvasRef]);

  return <canvas ref={canvasRef} id="canvas" className="w-full h-full" ></canvas>;
};

export default ThreeJS;
