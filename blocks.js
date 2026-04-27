// Definisi blok kustom dalam Bahasa Indonesia
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

// Generator kode Javascript untuk menghubungkan ke engine visual
Blockly.JavaScript['fold_paper'] = function(block) {
    const angleValue = Blockly.JavaScript.valueToCode(block, 'ANGLE', Blockly.JavaScript.ORDER_ATOMIC) || 0;
    return `updateFold(${angleValue});\n`;
};
