let campoTarefa = document.querySelector(".adicionar-tarefa input");
let botaoAdicionar = document.querySelector(".adicionar-tarefa button");
let listaDeTarefas = document.querySelector(".listar-tarefa");

let tarefa = JSON.parse(localStorage.getItem("@listaTarefas")) || [];

botaoAdicionar.onclick = adicionarTarefa;

function adicionarTarefa() {
  if (!!!campoTarefa.value.trim()) {
    alert("Você não digitou uma tarefa");
    return false;
  } else {
    tarefa.push(campoTarefa.value);
    campoTarefa.value = "";
    listarTarefa();

    salvarDados();
  }
}

function removerTarefa(posicao) {
  tarefa.splice(posicao, 1);
  listarTarefa();

  salvarDados();
}

function listarTarefa() {
  listaDeTarefas.innerHTML = "";

  tarefa.map((item) => {
    let novaTarefa = document.createElement("div");
    novaTarefa.classList.add("tarefa");

    let textoTarefa = document.createElement("p");
    textoTarefa.appendChild(document.createTextNode(item));

    let botaoRemover = document.createElement("button");
    botaoRemover.classList.add("btn-remover");
    let icone = document.createElement("img");
    icone.setAttribute("src", "./imagem/lixeira.svg");
    botaoRemover.appendChild(icone);
    botaoRemover.setAttribute(
      "onclick",
      `removerTarefa(${tarefa.indexOf(item)})`,
    );

    novaTarefa.appendChild(textoTarefa);
    novaTarefa.appendChild(botaoRemover);
    listaDeTarefas.appendChild(novaTarefa);
  });
}

listarTarefa();

function salvarDados() {
  localStorage.setItem("@listaTarefas", JSON.stringify(tarefa));
}
