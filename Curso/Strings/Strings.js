const escola = "cod3r";
console.log(escola.charAt(4)) // significa que ele vai me dar a letra que esta no indice 4 da string
console.log(escola .charCodeAt(3)) // retorna o codigo html referente a leta na tabaela unicode 
//nesse caso o numero 3 que esta no indice 3 da nossa string

console.log(escola.indexOf("3"));
console.log(escola.substring(1));
console.log(escola.substring(0, 3));

// para concatenar
console.log("escola " .concat(escola).concat("!"));
console.log("escola " + escola +"!");

//.raplace e regExp
console.log(escola.replace(3, "e")); // para a substituição de caracteres no caso u numero 3 pela letra "e"
console.log(escola.replace(/\w/g, "e")); // substitua todos os digitos do texto pela letra "e"

console.log("Marconys, Carlos, Jose".split(",")); // .split serve para gerar um array