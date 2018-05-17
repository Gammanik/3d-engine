import * as THREE from 'three'

export default class Loading {

    constructor() {
        this.init();
    }

    init() {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(65, window.innerWidth/window.innerHeight, 0.1, 10000);

        const renderer = new THREE.WebGLRenderer({antialias: true});
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(0x00BBAA);
        document.body.appendChild(renderer.domElement);

        camera.position.z = 190;
        
        let rendering = function () {
            requestAnimationFrame(rendering);

            renderer.render(scene, camera);
        };

        rendering();


        const objLoader = new THREE.OBJLoader();
        objLoader.load('objects/teth.obj', function (obj) {
            console.log(obj);
        });
    }
}