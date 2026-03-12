function adicionarItem() {

            var input = document.getElementById("itemInput");
            var lista = document.getElementById("minhaLista");
}if (input.value.trim() !== "") {
                var novoItem = document.createElement("li");
                novoItem.innerText = input.value;
                lista.appendChild(novoItem);
                input.value = "";
                input.focus();
                
            } else {
                alert("Por favor, digite algo antes de adicionar!");
            }