const gatos: string[] = [
    'grigia',
    'bianco',
    'nina'
]

function exibeGatos(gatos:string[]){
    return `Os gatos sao: ${gatos.join(', ')}`
}

console.log(exibeGatos(gatos))