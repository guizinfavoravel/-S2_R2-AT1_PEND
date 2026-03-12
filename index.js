
        function adicionarItem() {
            
            const input = document.getElementById("itemInput");
            const texto = input.value;

            if (texto.trim() !== "") {
                const novo = document.createElement("li");

                novo.innerText = texto;

                
                const lista = document.getElementById("listaDinamica");
                lista.appendChild(novo);

                input.value = "";
                input.focus();
            }
        }