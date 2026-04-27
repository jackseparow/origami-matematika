// Inisialisasi Workspace Blockly
const workspace = Blockly.inject('blocklyDiv', {
    toolbox: document.getElementById('toolbox'),
    scrollbars: true,
    trashcan: true,
    move: { scrollbars: true, drag: true, wheel: true }
});

// Fungsi Eksekusi
window.runCode = function() {
    // Generate kode JavaScript dari blok di workspace
    const code = javascript.javascriptGenerator.workspaceToCode(workspace);
    
    console.log("Menjalankan instruksi:", code);
    
    try {
        // Eksekusi kode yang dihasilkan generator
        eval(code);
    } catch (e) {
        alert("Ups! Susunan blok belum lengkap.");
        console.error(e);
    }
};

// Pastikan workspace Blockly menyesuaikan ukuran saat browser di-resize
window.addEventListener('resize', () => {
    Blockly.svgResize(workspace);
});
