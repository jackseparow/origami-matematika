// Setup Three.js Engine
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, (window.innerWidth/2) / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });

renderer.setSize(window.innerWidth / 2, window.innerHeight);
renderer.setClearColor(0xecf0f1);
document.getElementById('visual-area').appendChild(renderer.domElement);

// Membuat objek kertas 3D (Plane)
const geometry = new THREE.PlaneGeometry(3, 3, 1, 2);
const material = new THREE.MeshNormalMaterial({ side: THREE.DoubleSide });
const paper = new THREE.Mesh(geometry, material);
scene.add(paper);

// Pencahayaan
const light = new THREE.PointLight(0xffffff, 1, 100);
light.position.set(5, 5, 5);
scene.add(light);

camera.position.z = 5;
camera.position.y = 1;
camera.lookAt(0, 0, 0);

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

// Fungsi numerasi untuk mengubah derajat menjadi rotasi visual
function updateFold(deg) {
    const rad = (deg * Math.PI) / 180;
    // Rotasi pada sumbu X
    paper.rotation.x = rad;
}

// Menyesuaikan ukuran jika jendela browser berubah
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth / 2, window.innerHeight);
    camera.aspect = (window.innerWidth/2) / window.innerHeight;
    camera.updateProjectionMatrix();
});

animate();
