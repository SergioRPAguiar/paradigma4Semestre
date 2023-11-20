function teste() {
    let a = 'Eai';
  
    function teste1() {
      console.log(a);
    }
  
    return teste1;
  }
  
  // Criando uma closure
  let chamada = teste();
  
  // Executando a closure
  chamada(); 