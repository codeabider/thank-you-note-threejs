import * as THREE from "three";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const threeObj = {
  camera: null,
  renderer: null,
  scene: null,
  textMesh: null,
};

const fonts =
  "https://threejs.org/examples/fonts/helvetiker_regular.typeface.json";

const loadText = (text) => {
  const loader = new FontLoader();

  loader.load(fonts, (font) => {
    const geometry = new TextGeometry(`Thank you, ${text}!`, {
      font: font,
      size: 5,
      height: 1,
      curveSegments: 10,
      bevelEnabled: false,
      bevelOffset: 0,
      bevelSegments: 1,
      bevelSize: 0.3,
      bevelThickness: 1,
    });
    geometry.center();
    const materials = [
      new THREE.MeshPhongMaterial({ color: 0xc8d51e }), // front
      new THREE.MeshPhongMaterial({ color: 0xffffff }), // side
    ];
    threeObj.textMesh = new THREE.Mesh(geometry, materials);

    threeObj.scene.add(threeObj.textMesh);

    animate();
  });
};

const animate = () => {
  if (threeObj.textMesh) threeObj.textMesh.rotation.y += 0.0025;

  threeObj.renderer.render(threeObj.scene, threeObj.camera);
  requestAnimationFrame(animate);
};

const onWindowResize = () => {
  threeObj.camera.aspect = window.innerWidth / window.innerHeight;
  threeObj.camera.updateProjectionMatrix();
  threeObj.renderer.setSize(window.innerWidth, window.innerHeight);
};

const startBasicScene = () => {
  // SCENE
  threeObj.scene = new THREE.Scene();

  // CAMERA
  threeObj.camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  // INIT CAMERA
  threeObj.camera.position.set(0, 0, 50);

  // RENDERER
  threeObj.renderer = new THREE.WebGLRenderer({ antialias: true });
  threeObj.renderer.setSize(window.innerWidth, window.innerHeight);
  threeObj.renderer.setPixelRatio(window.devicePixelRatio);

  // CONTROLS
  const controls = new OrbitControls(
    threeObj.camera,
    threeObj.renderer.domElement
  );
  controls.target = new THREE.Vector3(0, 0, 0);
  controls.update();

  // RESIZE HANDLER
  window.addEventListener("resize", onWindowResize);

  // INIT HEMISPHERE LIGHT
  threeObj.scene.add(new THREE.AmbientLight(0xffffff, 1));

  // SCENE
  threeObj.scene.background = new THREE.Color(0x000000);

  document.body.appendChild(threeObj.renderer.domElement);
};

export { loadText, startBasicScene };
