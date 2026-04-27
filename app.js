// Inisialisasi Workspace
const workspace = Blockly.inject('blocklyDiv', {
    toolbox: document.getElementById('toolbox'),
    scrollbars: true,
    trashcan: true,
    move: { scrollbars: true, drag: true, wheel: true }
});

// Fungsi untuk mengeksekusi kode hasil koding visual
function runCode() {
    // Generate kode JS dari workspace
    const code = Blockly.JavaScript.workspaceToCode(workspace);
    try {
        // Eksekusi kode secara langsung
        eval(code);
    } catch (e) {
        // Abaikan error jika susunan blok belum sempurna
    }
}

// Jalankan otomatis setiap kali blok dipindah atau angka diubah
workspace.addChangeListener((event) => {
    if (event.type === Blockly.Events.BLOCK_MOVE || 
        event.type === Blockly.Events.BLOCK_CHANGE || 
        event.type === Blockly.Events.BLOCK_DELETE) {
        runCode();
    }
});
