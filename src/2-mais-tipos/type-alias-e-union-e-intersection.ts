type User = {
    name: string;
    lastName: string;
    birthday: string;
    age?: number; //opcional

}

const marsc: User = {
    name: 'Marcelo',
    lastName: 'Wallace',
    birthday: '10/08/1999',

}


// union types
// | (como se fosse o ||)

type logLevel = 'info' | 'error' | 'debug';

function logMessage(message: string, level: logLevel){
    console.log(`[${level}] - ${message}`)
}

logMessage('Uma mensagem linda', 'info')
logMessage('Uma mensagem linda', 'error')
logMessage('Uma mensagem linda', 'debug')

// intersection types: & agrupa varios tipos


type About = {
    bio: string;
    interests: string[];
}

type Profile = User & About;
const userWithProfile: Profile = {
    name: 'Marcelo',
    lastName: 'Wallace',
    birthday: '10/08/1999',
    bio: 'Ola, meu nome é Marcelo',
    interests: ['gatos', 'animes', 'programação']
}





