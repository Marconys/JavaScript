console.log(Math.ceil(6.1)); // serve para arredondar o numero para cima

const obj1 = {};
obj1.nome = "Bola";
console.log(obj1.nome);

function obj(nome)
{
    this.nome = nome;
    this.exec = function()
    {
        console.log("Exec...");
    }
}
const obj2 = new obj("Cadeira");
const obj3 = new obj("mesa");
console.log(obj2.nome);
console.log(obj3.nome);