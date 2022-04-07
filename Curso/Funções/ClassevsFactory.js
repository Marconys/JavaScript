class Pessoa {
    constructor(nome){
        this.nome = nome;
    }
    falar(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa("João")
p1.falar()

const Pessoa2 = nome =>{
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = Pessoa2("Marconys")
p2.falar()