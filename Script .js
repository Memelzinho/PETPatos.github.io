window.onload = function() {
    alert("Bem-vindo à Minha Loja!");
};

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

document.addEventListener("DOMContentLoaded", function() {
    let botoes = document.querySelectorAll(".produto button");

    botoes.forEach(botao => {
        botao.addEventListener("click", function() {
            alert("Mais informações sobre este cão em breve!");
        });
    });
});


document.getElementById("formPet").addEventListener("submit", function(e) {
    e.preventDefault(); // Impede o envio real

    const nome = document.getElementById("nome").value;
    const descricao = document.getElementById("descricao").value;
    const foto = document.getElementById("foto").value;
    const localizacao = document.getElementById("localizacao").value;
    const endereco = document.getElementById("endereco").value;
    const telefone = document.getElementById("telefone").value;
    const email = document.getElementById("email").value;

    alert(`Pet registrado!\n\nNome: ${nome}\nÚltimo local: ${localizacao}`);

    // Você pode exibir os dados na página também, se quiser:
    console.log({
        nome, descricao, foto, localizacao, endereco, telefone, email
    });

    this.reset();
});


document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const celular = document.getElementById("celular").value;
    const foto = document.getElementById("foto").value;

    // Exibe os dados
    document.getElementById("nomePerfil").innerText = nome;
    document.getElementById("emailPerfil").innerText = email;
    document.getElementById("celularPerfil").innerText = celular;
    document.getElementById("fotoPerfil").src = foto;

    // Alterna visibilidade
    document.getElementById("loginArea").style.display = "none";
    document.getElementById("perfil").style.display = "block";
});
