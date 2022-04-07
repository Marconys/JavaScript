const resultado = nota => nota >=7 ? 'Aprovado' : nota >=6 && nota <=6.9 ? 'Recuperação' : 'Reprovado';

console.log(resultado(7,1));
console.log(resultado(5.5));
console.log(resultado(6.5));