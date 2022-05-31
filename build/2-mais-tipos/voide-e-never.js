"use strict";
//todas funcoes retornam undefined se nao houver um retorno = void
function principal() {
    console.log('executando');
}
// lacoes de repeticao infinitos ou funcoes que disparam error = never
function funcaoNuncaRetorna() {
    throw new Error('erro');
}
