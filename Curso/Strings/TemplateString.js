const nome = "Rebeca";
const concatenacao = "Olá "  + nome + "!";
const tamplate = `
Olá 
${nome}!`
console.log(concatenacao, tamplate);


// Expressoes...

console.log(`1+1 = ${1+1}`);

//Função para alterar a string para caixa alta
const up = texto => texto.toUpperCase();
console.log(`Ei... ${up("cuidado")}!`);