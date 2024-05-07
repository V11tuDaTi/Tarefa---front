function validateForm() {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');

    const nameRegex = /^[a-zA-ZÀ-ú\s]{1,100}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\([1-9]{2}\) [2-9][0-9]{3,4}\-[0-9]{4}$/;

    // Limpar mensagens de erro
    clearErrors();

    let isValid = true;

    if (!nameRegex.test(nameInput.value)) {
        displayError('nameError', 'Por favor, insira um nome válido (apenas letras e espaços, até 100 caracteres).');
        isValid = false;
    }

    if (!emailRegex.test(emailInput.value)) {
        displayError('emailError', 'Por favor, insira um email válido.');
        isValid = false;
    }

    if (!phoneRegex.test(phoneInput.value)) {
        displayError('phoneError', 'Por favor, insira um telefone válido (padrão brasileiro: (99) 9999-9999).');
        isValid = false;
    }

    if (isValid) {
        // Se todos os campos forem válidos, continue com o envio do formulário
        alert('Formulário válido! Pode prosseguir com o envio.');
        // Adicione aqui o código para enviar o formulário
    }
}

function displayError(id, message) {
    const errorElement = document.getElementById(id);
    errorElement.innerText = message;

    const inputElement = errorElement.previousElementSibling;
    inputElement.classList.add('error');
}

function clearErrors() {
    const errorElements = document.querySelectorAll('.error');
    errorElements.forEach(element => {
        element.innerText = '';
        element.classList.remove('error');
    });
}
