const inputNomeAluno = document.querySelector(".inputNomeAluno");
const inputNotaAluno = document.querySelector(".inputNotaAluno");
const btnAdd = document.querySelector(".botaoAdd");
const divNomeTable = document.querySelector(".divNomeTable");
const divNotaTable = document.querySelector(".divNotaTable");
const inputNotaText = document.querySelector(".inputNotaText");
const inputNomeText = document.querySelector(".inputNomeText");
const inputFiltroAlunos = document.querySelector(".inputFiltroAlunos");
const tabelaNome = document.querySelector(".tabelaNome");
const tabelaNota = document.querySelector(".tabelaNota");
const tableText = document.querySelector(".tableText");

btnAdd.addEventListener("click", (e) => {
  
  verificaDados();
});

function criaP() {
  const p = document.createElement("p");
  return p;
}

function criaTd() {
  const td = document.createElement("td");
  return td;
}

function returnNota() {
  const notaAluno = parseFloat(inputNotaAluno.value);
  return notaAluno;
}

function verificaDados() {
  const nomeAluno = inputNomeAluno.value;
  const notaAluno = returnNota();
  const tdNome = criaTd();
  const tdNota = criaTd();
  
if (nomeAluno === "") {
    inputNotaText.innerHTML = "";
    inputNomeText.innerHTML = "";
    inputNomeText.innerHTML = "Digite um nome Valido!";
} else if (notaAluno >= 0 && notaAluno <= 10) {
    
    inputNotaText.innerHTML = "";
    inputNomeText.innerHTML = "";
    tdNota.innerText = notaAluno;
    tabelaNota.appendChild(tdNota);
    tdNome.innerText = nomeAluno;
    tabelaNome.appendChild(tdNome);
} else {
    inputNotaText.innerHTML = "";
    inputNomeText.innerHTML = "";
    inputNotaText.innerHTML = "Digite uma nota valida de 0 a 10!";
  }
}

inputFiltroAlunos.addEventListener("keyup", () => {
  let armazena = inputFiltroAlunos.value.toLowerCase();
  let nomes = Array.from(tabelaNome.getElementsByTagName("td"));
  let notas = Array.from(tabelaNota.getElementsByTagName("td"));

  
    let conteudoTabela = nomes.map((nome, index) => {
        let conteudoDosNomes = nome.innerHTML.toLowerCase();
        let conteudoDasNotas = notas[index].innerHTML;
        return {
            nome: conteudoDosNomes,
            nota: conteudoDasNotas,
            index
        }
    });

    let filtro = conteudoTabela.filter((elemento) => {
        return elemento.nome.includes(armazena) || elemento.nota.includes(armazena);
    });
    
    let qtdFiltrados = filtro.reduce((count, resultado) => {
        return count + 1;
    }, 0)

    conteudoTabela.forEach((elemento) => {
        nomes[elemento.index].style.display = "none";
        notas[elemento.index].style.display = "none";
    });
    
    filtro.forEach((elemento) =>{
        nomes[elemento.index].style.display = "";
        notas[elemento.index].style.display = "";
    });

    console.log(`O Número de resultados filtrados é: ${qtdFiltrados}`);

})
        
    

// inputFiltroAlunos.addEventListener("keyup", () => {
//   let armazena = inputFiltroAlunos.value.toLowerCase();
//   let nomes = tabelaNome.getElementsByTagName("td");
//   let notas = tabelaNota.getElementsByTagName("td");

//   for (let posicao in nomes) {
//     if (true === isNaN(posicao)) {
//       continue;
//     }

//     let conteudoDosNomes = nomes[posicao].innerHTML.toLowerCase();
//     let conteudoDasNotas = notas[posicao].innerHTML;
//     if (
//       true === conteudoDosNomes.includes(armazena) ||
//       true === conteudoDasNotas.includes(armazena)
//     ) {
//       nomes[posicao].style.display = "";
//       notas[posicao].style.display = "";
//     } else {
//       nomes[posicao].style.display = "none";
//       notas[posicao].style.display = "none";
//     }
//   }
// });

// function salvarAluno(){
//     const nomeAluno  = inputNomeAluno.value
//     const notaAluno = inputNotaAluno.value
//     if (notaAluno === ""){
//         inputNomeText.innerHTML = ("Digite uma nota Valida")
//     }else{
//         const td = criaTd()
//         td.innerText = nomeAluno
//         tabelaNome.appendChild(td)
//     }
// }

// function verificaNota(){
//     const notaAluno = returnNota()
//     const td = criaTd()
//         if(notaAluno >= 0 && notaAluno <= 10){
//             inputNotaText.innerHTML = ("")
//             td.innerText = notaAluno
//             tabelaNota.appendChild(td)
//         } else {
//             inputNotaText.innerHTML = ("Digite uma nota Valida")
//         }

// }
