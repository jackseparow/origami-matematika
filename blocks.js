// --- 1. DEFINISI TAMPILAN BLOK ---
Blockly.defineBlocksWithJsonArray([
    {
        "type": "fold_paper",
        "message0": "Lipat Kertas Sumbu X: %1 derajat",
        "args0": [
            { "type": "input_value", "name": "ANGLE", "check": "Number" }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 160,
        "tooltip": "Masukkan angka derajat untuk melipat kertas secara visual."
    }
]);

// --- 2. DEFINISI GENERATOR (SESUAI VERSI TERBARU) ---
javascript.javascriptGenerator.forBlock['fold_paper'] = function(block, generator) {
    // Mengambil nilai dari input angka yang dipasang
    var value_angle = generator.valueToCode(block, 'ANGLE', javascript.Order.ATOMIC) || '0';
    // Menghasilkan perintah yang memanggil fungsi di origami-engine.js
    return 'window.updateFold(' + value_angle + ');\n';
};
