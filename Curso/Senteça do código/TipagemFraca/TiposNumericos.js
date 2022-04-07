const peso1 = 1.0;
const peso2 = Number("2.0");
console.log(peso1, peso2);
console.log(Number.isInteger(peso1)); // .isInteger Para sabaer se a variavel é numero inteiro ou não. Resultado (True)

const avaliacao1 = 9.871;
const avaliacao2 = 6.871;

const total = avaliacao1 * peso1 + avaliacao2 * peso2;
const media = total / (peso1 + peso2);

console.log(media.toFixed(2)); // .ToFixed(2) é para determinar a quantidade de casas decimais Resultado (7.87)
console.log(media.toString(2)); // .toString(2) para converter o valor inteiro em binario Resultado (111.11011110111110011101101100100010110100001110010101)
console.log(typeof Number);