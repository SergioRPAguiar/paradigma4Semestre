// Função original com múltiplos parâmetros
function soma(a, b, c) {
    return a + b + c;
  }
  
  // Função curry para a função de soma
  function soma(a) {
    return function(b) {
      return function(c) {
        return a + b + c;
      };
    };
  }
  
  // Uso da função curried
  let chamadaSoma = soma(1)(2)(3);
  console.log(chamadaSoma); 