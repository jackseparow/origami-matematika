// Inisialisasi Workspace
const workspace = Blockly.inject('blocklyDiv', {
    toolbox: document.getElementById('toolbox'),
    scrollbars: true,
    trashcan: true,
    move: { scrollbars: true, drag: true, wheel: true }
});

// Fungsi untuk menjalankan koding visual
window.runCode = function() {
    // Menggunakan javascriptGenerator untuk memproses blok menjadi teks kode
    const code = javascript.javascriptGenerator.workspaceToCode(workspace);
    
    // Log ke console untuk memastikan kode berhasil dibuat
    console.log("Instruksi dihasilkan:", code);
    
    try {
        // Menjalankan instruksi (evaluasi)
        eval(code);
    } catch (e) {
        alert("Ups! Ada yang salah dengan susunan blokmu.");
        console.error("Kesalahan eksekusi:", e);
    }
};

// Menyesuaikan ukuran jika layar berubah
window.addEventListener('resize', () => {
    Blockly.svgResize(workspace);
});
