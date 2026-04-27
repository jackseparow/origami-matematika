// 1. Definisi Tampilan Blok
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

// 2. Definisi Logika Generator
Blockly.JavaScript['fold_paper'] = function(block) {
    var value_angle = Blockly.JavaScript.valueToCode(block, 'ANGLE', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    // Memanggil fungsi global yang ada di origami-engine.js
    return 'window.updateFold(' + value_angle + ');\n';
};
