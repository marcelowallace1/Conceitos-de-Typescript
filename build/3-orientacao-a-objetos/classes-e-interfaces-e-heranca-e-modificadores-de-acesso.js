"use strict";
// classes e interfaces e herança e modificadores de acesso
class User1 {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}
// static e extends
class Player extends User1 {
    constructor(nome, idade, jogo) {
        super(nome, idade);
        this.jogo = jogo;
    }
    dizerJogoAtual() {
        return `estou jogando, no momento: ${this.jogo}`;
    }
    static queHoras() {
        return Date();
    }
}
const jogador = new Player('Marcelo', 25, 'valorant');
//console.log(jogador.dizerJogoAtual())
//console.log(Player.queHoras())
// private, protected, public
class Jogo {
    constructor(nome) {
        this.nome = nome;
    }
    dizerNome() {
        return `O nome do jogo é: ${this.nome}`;
    }
}
class JogoComDescricao extends Jogo {
    constructor(nome, descricao) {
        super(nome);
        this.descricao = descricao;
    }
}
const vava = new JogoComDescricao('Valorant', 'jogo de tiro com poderzinho');
console.log(vava.dizerNome());
