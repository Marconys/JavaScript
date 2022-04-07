// Closure é umescopo criado quando umafunção é declarada
// Esse escopo permite a função acesar e manipular variáveis externas à função

// Contexto léxico em ação

const x = 'Global'

function fora(){
    const x = 'Local'
    function dentro(){
        return x;
    }
    return dentro
}

const MinhaFuncao = fora()
console.log(MinhaFuncao())
