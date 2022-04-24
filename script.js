import * as THREE from 'https://cdn.skypack.dev/three@v0.128';
import { GLTFLoader } from 'https://cdn.skypack.dev/three@v0.128/examples/jsm/loaders/GLTFLoader.js';


//three js components
let scene, camera, renderer
let cameraPosition = new THREE.Vector3(0,0,10)

function init(){
  scene = new THREE.Scene()
  camera = new THREE.PerspectiveCamera(25, window.innerWidth / window.innerHeight, 0.1, 1000)
  camera.position.set(cameraPosition.x, cameraPosition.y, cameraPosition.z)
  //set up renderer
  renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#three'),
    antialias: true,
    alpha: true
  })
  renderer.setClearColor(0x000000, 0)
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setSize(window.innerWidth, window.innerHeight)

  //add lights
  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8)
  directionalLight.position.set(0, 1, 0.3)
  const ambientLight = new THREE.AmbientLight(0x808080)
  scene.add(directionalLight, ambientLight)
  
  //add a cube
  const geometry = new THREE.BoxGeometry( 1, 1, 1 )
  const material = new THREE.MeshBasicMaterial( {color: 0x66ffff} )
  const cube = new THREE.Mesh( geometry, material )
  scene.add( cube )
  
  
  window.onresize = function () {  
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
  }
}

function animate () {
  requestAnimationFrame(animate)
  renderer.render(scene, camera)
}

init()
animate()