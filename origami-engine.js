// Setup Scene, Camera, Renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, (window.innerWidth/2) / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });

renderer.setSize(window.innerWidth / 2, window.innerHeight);
renderer.setClearColor(0xecf0f1);
document.getElementById('visual-area').appendChild(renderer.domElement);

// --- NAVIGASI PERSPEKTIF ---
const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

// --- PEMBANTU VISUAL (GRID) ---
const gridHelper = new THREE.GridHelper(10, 10);
scene.add(gridHelper);

// --- SISTEM LIPATAN (ENGSEL) ---
const hinge = new THREE.Group();
scene.add(hinge);

const geometry = new THREE.PlaneGeometry(3, 1.5);
const material = new THREE.MeshNormalMaterial({ side: THREE.DoubleSide });

const upperPaper = new THREE.Mesh(geometry, material);
upperPaper.position.y = 0.75; // Titik pusat rotasi ada di pinggir bawah kertas atas
hinge.add(upperPaper);

const lowerPaper = new THREE.Mesh(geometry, material);
lowerPaper.position.y = -0.75;
scene.add(lowerPaper);

scene.add(new THREE.AmbientLight(0xffffff, 0.8));
camera.position.set(3, 3, 5); // Sudut pandang awal 3D
camera.lookAt(0, 0, 0);

function animate() {
    requestAnimationFrame(animate);
    controls.update(); 
    renderer.render(scene, camera);
}

// Fungsi yang dipanggil dari Blockly
window.updateFold = function(deg) {
    const rad = (deg * Math.PI) / 180;
    hinge.rotation.x = -rad; 
};

window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth / 2, window.innerHeight);
    camera.aspect = (window.innerWidth/2) / window.innerHeight;
    camera.updateProjectionMatrix();
});

animate();
