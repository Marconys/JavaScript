const prod1 = {};
prod1.nome = "Celular Ultra Mega";
prod1.preco = 4998.90;
prod1["desconto legal"] = 0.40; // evitar atributos com espaço

console.log(prod1);

// outra opção de declar objeto é:

const prod2 = {
    nome: "Camia polo",
    preco: 79.90,
};

console.log(prod2);