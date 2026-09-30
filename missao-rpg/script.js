function gerarMissao() {

    let nome = document.getElementById("nome").value;
    let idade = Number(document.getElementById("idade").value);
    let classe = document.getElementById("classe").value;
    let risco = Number(document.getElementById("risco").value);

    if (nome === "" || idade <= 0 || classe === "") {
        alert("Preencha todos os campos!");
        return;
    }

    let missao = "";
    let item = "";

    switch (classe) {

        case "mago":
            missao = "Investigar uma torre abandonada";
            item = "Cajado mágico";
            break;

        case "guerreiro":
            missao = "Proteger uma vila de criaturas";
            item = "Espada";
            break;

        case "arqueiro":
            missao = "Encontrar uma criatura escondida na floresta";
            item = "Arco e flecha";
            break;

        case "curandeiro":
            missao = "Buscar uma planta rara para criar uma poção";
            item = "Kit de cura";
            break;
    }

    let dificuldade = "";

    if (risco === 1) {
        dificuldade = "Fácil";
    } else if (risco === 2) {
        dificuldade = "Média";
    } else {
        dificuldade = "Difícil";
    }

    document.getElementById("resultado").innerHTML =
        "<h2>" + nome + "</h2>" +
        "<p><b>Missão:</b> " + missao + "</p>" +
        "<p><b>Item:</b> " + item + "</p>" +
        "<p><b>Dificuldade:</b> " + dificuldade + "</p>";
}