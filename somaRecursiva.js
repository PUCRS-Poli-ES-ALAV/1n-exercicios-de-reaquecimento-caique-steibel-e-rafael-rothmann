function somaRecursiva(numero1, numero2, soma = 0) {
  if (numero1 === 0) return soma;
  return somaRecursiva(numero1 - 1, numero2, soma + numero2);
}

// Teste
console.log(somaRecursiva(6, 4)); // 24
console.log(somaRecursiva(3, 5)); // 15
console.log(somaRecursiva(7, 0)); // 0
