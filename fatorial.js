function fatorial(n) {
  if (n < 0) {
    return null;
  } else if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * fatorial(n - 1);
  }
}
console.log(fatorial(-3));
console.log(fatorial(0));
console.log(fatorial(1));
console.log(fatorial(5));
