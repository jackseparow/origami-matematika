// 1. Definisi Bentuk Blok
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

// 2. Definisi Logika Penerjemah (Generator)
// Menggunakan standar objek javascript.javascriptGenerator untuk versi terbaru
javascript.javascriptGenerator.forBlock['fold_paper'] = function(block, generator) {
    var value_angle = generator.valueToCode(block, 'ANGLE', javascript.Order.ATOMIC) || '0';
    // Menghasilkan instruksi pemanggilan fungsi global
    return 'window.updateFold(' + value_angle + ');\n';
};
