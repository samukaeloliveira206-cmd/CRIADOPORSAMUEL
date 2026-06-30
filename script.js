let campoTarefa = document.querySelector(".adicionar-tarefa input");
let botaoAdicionar = document.querySelector(".adicionar-tarefa button");
let listaDeTarefas = document.querySelector(".listar-tarefa");
let tarefa = JSON.parse(localStorage.getItem("@listaDeTarefas")) ||[];

botaoAdicionar.onclick = adicionarTarefa;

function adicionarTarefa() {
  if (!campoTarefa.value.trim()) {
    alert("Você não digitou uma tarefa");
    return false;
  } else {
    tarefa.push(campoTarefa.value);
    campoTarefa.value = "";
    listarTarefa();
    salvardados();
  }
}

function removerTarefa(posicao) {
  tarefa.splice(posicao, 1);
  listarTarefa();
  salvardados();
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
function salvardados() {
  localStorage.setItem("@listaDeTarefas", JSON.stringify(tarefa));
}
