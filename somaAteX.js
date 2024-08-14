function soma() {
    const entrada = document.getElementById("numero")
    let soma = 0
    for (let i = 0; i <= parseInt(entrada.value); i++) {
        soma += i;
    }

    const p = document.getElementById("result")
    p.innerText = `Resultado: ${soma}`
}

document.getElementById("botao").addEventListener("click", soma)