function somatorio(n) {
  if (n === 0) {
    return 0;
  } else if (n < 0) {
    return n + somatorio(n + 1);
  } else {
    return n + somatorio(n - 1);
  }
}

console.log(somatorio(-2));
console.log(somatorio(2));
console.log(somatorio(-5));
console.log(somatorio(5));
console.log(5 + 4 + 3 + 2 + 1);
