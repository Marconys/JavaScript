let valor; // não inicializada
console.log(valor);
//Resultado "undefined"

valor = null; // ausência de valor
console.log(valor);
//Resultado Null

const produto = {};
console.log(produto.preco);
//Resultado "undefined"

produto.preco = 3.90;
console.log(produto);

produto.preco = undefined; // evitar usar o atributo undefined
console.log(!!produto.preco);
//delete produto.preco; para retirar um atributo de um objeto devo usar a função "delete" e não o undefined;
console.log(produto);

produto.preco = null;
console.log(!!produto.preco);
console.log(produto);