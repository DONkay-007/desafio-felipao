const prompt = require("prompt-sync")(); // usar no terminal

let nome = prompt("Entre com seu nome de Aventureiro!!: ");
let nivel = 0;
let rank = null;

console.log("Você iniciou sua jornada como herói agora");

let next = true;

while (next === true) {
    console.log("Está treinando......");

    nivel += 1000;

    console.log("Você treinou e evoluiu muito!!!");

    let resposta = prompt("Deseja treinar para evoluir de nível? (Sim/Não): ");
    if (resposta === "Sim") {
        next = true;
    } else {
        next = false;
    }
}

// Classificação por nível
if (nivel <= 1000) {
    rank = "Ferro";
} else if (nivel <= 2000) {
    rank = "Bronze";
} else if (nivel <= 5000) {
    rank = "Prata";
} else if (nivel <= 7000) {
    rank = "Ouro";
} else if (nivel <= 8000) {
    rank = "Platina";
} else if (nivel <= 9000) {
    rank = "Ascendente";
} else if (nivel <= 10000) {
    rank = "Imortal";
} else {
    rank = "Radiante";
}

console.log("\n|O seu nível após esse tempo treinando foi|");
console.log(`|Herói: ${nome} | Rank: ${rank}|`);
console.log(`|Nível: ${nivel} |`);
console.log("Continue treinando para evoluir mais!");
console.log("Boa sorte na sua jornada, Aventureiro!");