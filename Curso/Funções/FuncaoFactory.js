// Factory simples *** Função Factory é uma função que retorna um objeto ***
function criarPessoa(){
    return {
        nome: "Ana",
        sobrenome: "Silva"
    }
}

console.log(criarPessoa())

function criarProduto(nome, preco){
    return{
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto("Notebook", 2199.49))
console.log(criarProduto("SSD 1TB", 980.49))
console.log(criarProduto("RX550", 980.49))