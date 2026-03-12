function adicionarItem() {
    const input = document.getElementById("itemInput");
    const lista = document.getElementById("listaDinamica");
    const texto = input.value.trim();

    if (texto !== "") {
        const elemento = document.createElement("li");
        elemento.className = "list-group-item d-flex justify-content-between align-items-center mt-2 shadow-sm";

        const conteudoTarefa = document.createElement("span");
        conteudoTarefa.innerText = texto;

        const btnRemover = document.createElement("button");
        btnRemover.innerText = "Remover";
        btnRemover.className = "btn btn-danger btn-sm";

        btnRemover.onclick = function() {
            elementoLista.remove();
        };

        elemento.appendChild(conteudoTarefa);
        elemento.appendChild(btnRemover);
        lista.appendChild(elemento);

        input.value = "";
        input.focus();
    } else {
        alert("Por favor, digite uma tarefa!");
    }
}