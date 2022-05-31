"use strict";
const marsc = {
    name: 'Marcelo',
    lastName: 'Wallace',
    birthday: '10/08/1999',
};
function logMessage(message, level) {
    console.log(`[${level}] - ${message}`);
}
logMessage('Uma mensagem linda', 'info');
logMessage('Uma mensagem linda', 'error');
logMessage('Uma mensagem linda', 'debug');
const userWithProfile = {
    name: 'Marcelo',
    lastName: 'Wallace',
    birthday: '10/08/1999',
    bio: 'Ola, meu nome é Marcelo',
    interests: ['gatos', 'animes', 'programação']
};
