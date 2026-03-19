function adicionarItem() {
    const input = document.getElementById("itemInput");
    const lista = document.getElementById("listaDinamica");
    const valor = input.value.trim();

    if (valor !== "") {
        const novoItem = document.createElement("li");
        novoItem.className = "list-group-item d-flex align-items-center justify-content-between mt-2";

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = "form-check-input me-3";

        const span = document.createElement("span");
        span.innerText = valor;
        span.className = "flex-grow-1";

        const btnRemover = document.createElement("button");
        btnRemover.innerText = "Remover";
        btnRemover.className = "btn btn-danger btn-sm";

        checkbox.addEventListener('change', function() {
        });

        btnRemover.onclick = function() {
            novoItem.remove();
        };

        novoItem.appendChild(checkbox);
        
        novoItem.appendChild(span);
        novoItem.appendChild(btnRemover);
        lista.appendChild(novoItem);

        input.value = "";
    } else {
        alert("Digite algo antes de adicionar!");
    }
}