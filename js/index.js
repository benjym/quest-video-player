import css from "../css/main.css";
console.debug(`Using Three.js revision ${THREE.REVISION}`);
import v from "../resources/test.mp4"
// import * as THREE from 'three';
// // import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
// import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
// import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
// import ImmersiveControls from '@depasquale/three-immersive-controls';
// import { GUI } from 'three/examples/jsm/libs/lil-gui.module.min.js';
// import { Lut } from 'three/examples/jsm/math/Lut.js';
// import { VRButton } from 'three/examples/jsm/webxr/VRButton.js';

// import * as PHYSICS from './physics.js';
// import * as CONTROLLERS from './controllers.js';

import manifest from '../manifest.webmanifest';
// import beach from '../resources/beach-1.jpeg';

// import * as VRGUI from './datguivr/datguivr.min.js';
// import * as VRGUI from './guivr.js';

// let group = new THREE.Group();
// let beam;
// let left_support, right_support;
// let load_position_gui;
// let font;
// export let BMD, SFD, box;

let urlParams = new URLSearchParams(window.location.search);

//<video id="video" loop muted crossOrigin="anonymous" playsinline style="display:none">
//    <!-- <source src="resources/MaryOculus.webm"> -->
//    <source src="resources/test.mp4">
//</video>

// import * as THREE from 'three';
import { VRButton } from 'three/addons/webxr/VRButton.js';

let camera, scene, renderer;

init();
animate();

function init() {

    const container = document.getElementById('container');
    container.addEventListener('click', function () {

        video.play();

    });

    camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 2000);
    camera.layers.enable(1); // render left view when no stereo available

    // video

    // const video = document.getElementById('video');
    let video = document.createElement('video');
    if (urlParams.has('video')) { video.src = urlParams.get('video') }
    else { video.src = 'test.mp4' }
    video.loop = true;
    video.crossOrigin = "anonymous";
    video.style = "display:none";
    video.controls = "controls";
    window.setTimeout(() => { video.play() }, 1000);

    const texture = new THREE.VideoTexture(video);

    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x101010);

    // left

    const geometry1 = new THREE.SphereGeometry(500, 60, 40);
    // invert the geometry on the x-axis so that all of the faces point inward
    geometry1.scale(- 1, 1, 1);

    // const uvs1 = geometry1.attributes.uv.array;

    // for (let i = 0; i < uvs1.length; i += 2) {

    //     // uvs1[i] *= 0.5; // NOTE: was in original code, seemed weird

    // }

    const material1 = new THREE.MeshBasicMaterial({ map: texture });

    const mesh1 = new THREE.Mesh(geometry1, material1);
    mesh1.rotation.y = - Math.PI / 2;
    mesh1.layers.set(1); // display in left eye only
    scene.add(mesh1);

    // right

    const geometry2 = new THREE.SphereGeometry(500, 60, 40);
    geometry2.scale(- 1, 1, 1);

    // const uvs2 = geometry2.attributes.uv.array;

    // for (let i = 0; i < uvs2.length; i += 2) {

    //     // uvs2[i] *= 0.5; // NOTE: was in original code, seemed weird
    //     // uvs2[i] += 0.5; // NOTE: was in original code, seemed weird

    // }

    const material2 = new THREE.MeshBasicMaterial({ map: texture });

    const mesh2 = new THREE.Mesh(geometry2, material2);
    mesh2.rotation.y = - Math.PI / 2;
    mesh2.layers.set(2); // display in right eye only
    scene.add(mesh2);

    //

    renderer = new THREE.WebGLRenderer();
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.xr.enabled = true;
    renderer.xr.setReferenceSpaceType('local');
    container.appendChild(renderer.domElement);

    document.body.appendChild(VRButton.createButton(renderer));

    //

    window.addEventListener('resize', onWindowResize);

}

function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);

}

function animate() {

    renderer.setAnimationLoop(render);

}

function render() {

    renderer.render(scene, camera);

}