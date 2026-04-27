// Inisialisasi Workspace
const workspace = Blockly.inject('blocklyDiv', {
    toolbox: document.getElementById('toolbox'),
    scrollbars: true,
    trashcan: true,
    move: { scrollbars: true, drag: true, wheel: true }
});

// Fungsi untuk menjalankan koding visual
window.runCode = function() {
    // Generate kode JS dari workspace
    const code = Blockly.JavaScript.workspaceToCode(workspace);
    try {
        // Eksekusi kode secara langsung
        eval(code);
    } catch (e) {
        alert("Ups! Ada yang salah dengan susunan blokmu.");
        console.error(e);
    }
};

// Pastikan Blockly melakukan resize otomatis saat jendela browser berubah
window.addEventListener('resize', () => {
    Blockly.svgResize(workspace);
});
