// const scene = new THREE.Scene();

// const geometry = new THREE.BoxGeometry(1, 1, 1);
// const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
// const mesh = new THREE.Mesh(geometry, material);

// scene.add(mesh);

// const sizes = {
//   width: 800,
//   height: 600,
// };

// const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
// camera.position.z = 3;

// scene.add(camera);

// const canvas = document.querySelector(".webgl");
// const renderer = new THREE.WebGLRenderer({
//   canvas: canvas,
// });

// renderer.setSize(sizes.width, sizes.height);

// renderer.render(scene, camera);

// scene
const scene = new THREE.Scene();

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: "red" });
const mesh = new THREE.Mesh(geometry, material);

scene.add(mesh);

const sizes = {
  width: 400,
  height: 400,
};

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;

scene.add(camera);

const canvas = document.querySelector(".webgl");
const canvas2 = document.querySelector(".webgl2");
const canvas3 = document.querySelector(".webgl3");

const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});

const renderer2 = new THREE.WebGLRenderer({
  canvas: canvas2,
});

const renderer3 = new THREE.WebGLRenderer({
  canvas: canvas3,
});

renderer.setSize(sizes.width, sizes.height);
renderer2.setSize(sizes.width, sizes.height);
renderer3.setSize(sizes.width, sizes.height);

renderer.render(scene, camera);
renderer2.render(scene, camera);
renderer3.render(scene, camera);

// mesh
// camera
// renderer
