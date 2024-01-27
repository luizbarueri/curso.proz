// ---------- VALIDAÇÃO USERNAME ---------- //
let usernameInput = document.getElementById("username");
let usernameLabel = document.querySelector('label[for="username"]');
let usernameHelper = document.getElementById("username-helper");

// Mostrar popup de campo obrigatório


// Ocultar popup de campo obrigatório


// Validar valor do input


// Mostrar popup de campo obrigatório
function mostrarPopupObrigatorio() {
    usernameHelper.innerHTML = "Este campo é obrigatório!";
    usernameHelper.style.display = "block";
}

// Ocultar popup de campo obrigatório
function ocultarPopupObrigatorio() {
    usernameHelper.style.display = "none";
}

// Chame a função quando o formulário for enviado
seuFormulario.addEventListener("submit", function(event) {
    if (usernameInput.value.trim() === "") {
        mostrarPopupObrigatorio();
        event.preventDefault(); // Impede o envio do formulário se o campo estiver vazio
    }
});

// Ou chame a função quando o campo perde o foco
usernameInput.addEventListener("blur", function() {
    if (usernameInput.value.trim() === "") {
        mostrarPopupObrigatorio();
    }
});



// Chame a função para ocultar o popup quando o usuário começar a preencher o campo novamente
usernameInput.addEventListener("input", function() {
    ocultarPopupObrigatorio();
});

// Validar valor do input
function validarInput() {
    // Obtém o valor do input e remove espaços em branco no início e no fim
    const usernameValue = usernameInput.value.trim();

    if (usernameValue === "") {
        // Se o valor estiver vazio, mostra o popup de campo obrigatório
        mostrarPopupObrigatorio();
    } else {
        // Se o valor estiver preenchido, oculta o popup de campo obrigatório
        ocultarPopupObrigatorio();

        // Aqui você pode adicionar lógica adicional conforme necessário
        // Por exemplo, verificar se o formato do nome de usuário é válido
        if (usernameValue.length < 3) {
            // Mostrar algum aviso sobre o comprimento mínimo, se necessário
            console.log("O nome de usuário deve ter pelo menos 3 caracteres.");
        }
    }
}

// Adiciona um ouvinte de evento para chamar a função de validação quando o campo perde o foco
usernameInput.addEventListener("blur", validarInput);
