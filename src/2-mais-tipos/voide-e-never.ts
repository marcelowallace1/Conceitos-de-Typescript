//todas funcoes retornam undefined se nao houver um retorno = void


function principal (): void
{
    console.log('executando')
}


// lacoes de repeticao infinitos ou funcoes que disparam error = never

function funcaoNuncaRetorna():never {
    throw new Error('erro')

    
}