"use strict";
let estaAtivo;
estaAtivo = true;
function mapearStatusDeUsuario(status) {
    if (status) {
        return 'Usuario esta ativo';
    }
    else {
        return 'Usuario não está ativo';
    }
}
mapearStatusDeUsuario(false);
