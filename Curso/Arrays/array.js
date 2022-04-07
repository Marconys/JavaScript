const array = [7.7, 8.9, 9.9, 10.0];
console.log(array[0], array[2]);
console.log(array[4]); // nesse caso ele nos retornar com a mensagem indefinido pois não existe esse indice no nosso array


array[4] = 11; // acrescentando indice no nosso array
console.log(array);
console.log(array.length);

// acrescentando mais de uma informação no indice

array.push({id: 3}, false, null, "teste");
console.log(array);

// para sacar o ultimo  valor do array

console.log(array.pop());

// Para deletar um indice no array

delete array [0];
console.log(array);

console.log(typeof array);
