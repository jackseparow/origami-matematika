// Setup Scene, Camera, Renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, (window.innerWidth/2) / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });

renderer.setSize(window.innerWidth / 2, window.innerHeight);
renderer.setClearColor(0xecf0f1);
document.getElementById('visual-area').appendChild(renderer.domElement);

// --- LOGIKA ENGSEL LIPATAN ---
// Kita buat grup sebagai "garis lipatan" (engsel)
const hinge = new THREE.Group();
scene.add(hinge);

// Bagian kertas yang akan melipat (Atas)
const geometry = new THREE.PlaneGeometry(3, 1.5);
const material = new THREE.MeshNormalMaterial({ side: THREE.DoubleSide });
const upperPaper = new THREE.Mesh(geometry, material);

// Geser posisi kertas agar pinggir bawahnya tepat di titik pusat grup (0,0)
upperPaper.position.y = 0.75; 
hinge.add(upperPaper);

// Bagian kertas yang diam (Bawah) sebagai referensi
const lowerPaper = new THREE.Mesh(geometry, material);
lowerPaper.position.y = -0.75;
scene.add(lowerPaper);

// Lampu & Kamera
scene.add(new THREE.AmbientLight(0xffffff, 0.8));
camera.position.z = 5;
camera.lookAt(0, 0, 0);

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

// --- FUNGSI GLOBAL UNTUK BLOCKLY ---
window.updateFold = function(deg) {
    const rad = (deg * Math.PI) / 180;
    // Putar engselnya, maka upperPaper yang ada di dalamnya ikut terlipat
    hinge.rotation.x = -rad; 
};

window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth / 2, window.innerHeight);
    camera.aspect = (window.innerWidth/2) / window.innerHeight;
    camera.updateProjectionMatrix();
});

animate();
