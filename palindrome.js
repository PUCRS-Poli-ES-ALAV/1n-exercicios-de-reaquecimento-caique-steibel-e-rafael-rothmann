// 1. boolean ePalindrome(string palavra)
// True se palavra é palindrome, false caso contrário

// 2. Erro
// palavra === null -> Erro

// 3. Casos de parada
// tam(s) = 0 -> true
// tam(s) = 1 -> true
// char(0)! = char(tam(s) -1) -> false

// 4. Recursivo
// char(0) == char(tam(s)- 1) -> ePalindrome(sub(s) sem 1º e último char)

function ePalindrome(palavra) {
  if (palavra === null) {
    return console.log('Palavra inválida');
  } else if (palavra.lenght() === 0 || palavra.lenght === 1) {
    return true;
  } else if (palavra[1] != palavra[palavra.lenght() - 1]) {
  }
}
