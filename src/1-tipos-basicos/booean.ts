let estaAtivo: boolean;

estaAtivo = true

function mapearStatusDeUsuario  (status: boolean){
    if(status){
        return 'Usuario esta ativo'
    }else {
        return 'Usuario não está ativo'
    }
}

mapearStatusDeUsuario(false);