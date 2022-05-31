// classes e interfaces e herança e modificadores de acesso

class User1 {
    public nome;
    public idade;

    constructor(nome: string, idade: number){
        this.nome = nome;
        this.idade = idade;
    }
}
// static e extends
class Player extends User1 {
    public jogo;
    constructor(nome: string, idade: number, jogo: string){
        super(nome, idade);
        this.jogo = jogo;
    }
 dizerJogoAtual(){
    return `estou jogando, no momento: ${this.jogo}`;
}

 static queHoras(){
    return Date();
}

}
const jogador = new Player('Marcelo', 25, 'valorant');


//console.log(jogador.dizerJogoAtual())
//console.log(Player.queHoras())



// private, protected, public
// public: acessível de forma geral, dentro e fora da classe
// private: é acessivel apenas dentro da classe onde o campo foi criado
// protected: é acessivel apenas dentro da classe (e subclasses ) onde o campo foi criado
class Jogo {
    protected nome;

    constructor(nome: string){
        this.nome = nome;
    }

    dizerNome(){
        return `O nome do jogo é: ${this.nome}`;
    }
}

//class JogoComDescricao extends Jogo{
//    private descricao;
//
//    constructor(nome: string, descricao: string){
//        super(nome);
//
//        this.descricao = descricao;
//    }
//
//    dizerNomeComDescricao(){
//        return `O nome do jogo é: ${this.nome}`
//    }
//}
//
//const vava = new JogoComDescricao('Valorant', 'jogo de tiro com poderzinho')
//console.log(vava.dizerNome())


// interfaces
interface IjogoComDescricao {
    //nome: string;
    descricao: string;
    dizerNomeComDescricao(): string;



}
/ implements
class JogoComDescricao extends Jogo implements IjogoComDescricao{
    public descricao;

    constructor(nome: string, descricao: string){
        super(nome);

        this.descricao = descricao;
    }

    dizerNomeComDescricao(){
        return `O nome do jogo é: ${this.nome}`
    }
}

