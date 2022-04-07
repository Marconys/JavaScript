// novo recurso ES2015

const pessoa = {
    nome: "Ana",
    idade: 5,
    endereco: {
        logradouro: "Rua A",
        numero: 1000
    }
}

const { nome, idade } = pessoa;
console.log(nome, idade);

const { nome: n, idade: i } = pessoa;
console.log(n, i);

const { endereco: { logradouro, numero } } = pessoa;
console.log(logradouro, numero);



// exemplo dentro do array

const [a] = [10];
console.log(a);

const [n1, , n3, , n5, n6 =0] = [10, 7, 9, 8];
console.log(n1, n3, n5, n6);