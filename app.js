// Inisialisasi Workspace
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

// Fungsi untuk mengeksekusi kode
function runCode() {
    // Menghasilkan kode JavaScript dari workspace
    window.LoopTrap = 1000;
    Blockly.JavaScript.INFINITE_LOOP_TRAP = 'if (--window.LoopTrap == 0) throw "Infinite loop.";\n';
    
    var code = Blockly.JavaScript.workspaceToCode(workspace);
    
    try {
        // Menjalankan kode (memanggil fungsi updateFold)
        eval(code);
    } catch (e) {
        console.log("Menunggu input lengkap...");
    }
}

// Jalankan otomatis setiap kali ada perubahan pada blok atau angka
workspace.addChangeListener(function(event) {
    if (event.type == Blockly.Events.BLOCK_MOVE || 
        event.type == Blockly.Events.BLOCK_CHANGE || 
        event.type == Blockly.Events.BLOCK_DELETE) {
        runCode();
    }
});
