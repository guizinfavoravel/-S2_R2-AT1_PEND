function adicionarItem() {

    let input = document.getElementById("itemInput");

    let lista = document.getElementById("minhaLista");
    
    if (input.value.trim() !== "") {
        let novoItem = document.createElement("li");
        novoItem.innerText = input.value;
        lista.appendChild(novoItem);
        input.value = "";

    } else {
        alert("Por favor, digite algo antes de adicionar!");
    }
}