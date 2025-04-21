import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js'; // orbit control


// CAMERA
//const fov = 45;
//const aspect = 2;  // the canvas default
//const near = 0.1;
//const far = 100;

const scene = new THREE.Scene();
//const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
//camera.position.set(0, 10, 20);
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

// ORBIT CONTROL
//const controls = new OrbitControls(camera, canvas);
//controls.target.set(0, 5, 0);
//controls.update();

// RENDERING
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setAnimationLoop( animate );
document.body.appendChild( renderer.domElement );

// load the tamagotchi gltf file
/*const loader = new GLTFLoader();
loader.load( '../static/tamagotchi.gltf', function ( gltf ) {
  scene.add( gltf.scene );
} , undefined, function ( error ) {
  console.error( error );

} );*/



const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube ); 

camera.position.z = 5;

function animate() {

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render( scene, camera );

}