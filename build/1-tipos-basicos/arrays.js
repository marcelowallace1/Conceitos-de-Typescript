"use strict";
const gatos = [
    'grigia',
    'bianco',
    'nina'
];
function exibeGatos(gatos) {
    return `Os gatos sao: ${gatos.join(', ')}`;
}
console.log(exibeGatos(gatos));
