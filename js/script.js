
const totalMomentos = 20;
const momentosVistos = JSON.parse(localStorage.getItem("momentosVistos") || "[]");

function getMomentosRestantes() {
    return [...Array(totalMomentos).keys()]
        .map(i => i + 1)
        .filter(num => !momentosVistos.includes(num));
}

function irParaMomentoAleatorio() {
    const restantes = getMomentosRestantes();
    if (restantes.length === 0) {
        window.location.href = "fim.html";
        return;
        
    }

    const sorteado = restantes[Math.floor(Math.random() * restantes.length)];
    momentosVistos.push(sorteado);
    localStorage.setItem("momentosVistos", JSON.stringify(momentosVistos));
    window.location.href = `momento${sorteado}.html`;
}

function resetarMomentos() {
    localStorage.removeItem("momentosVistos");
    window.location.href = "index.html";
}

