// Inisialisasi Workspace Blockly
const workspace = Blockly.inject('blocklyDiv', {
    toolbox: document.getElementById('toolbox'),
    scrollbars: true,
    trashcan: true,
    move: {
        scrollbars: true,
        drag: true,
        wheel: true
    }
});

// Listener: Setiap ada perubahan blok, jalankan kode secara otomatis
workspace.addChangeListener(() => {
    const code = Blockly.JavaScript.workspaceToCode(workspace);
    try {
        // Mengeksekusi kode hasil susunan blok
        eval(code);
    } catch (e) {
        console.error("Error dalam logika lipatan:", e);
    }
});
