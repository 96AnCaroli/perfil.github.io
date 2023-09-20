function fibonacci(num) {
    let uno = 0;
    let dos = 1;
    let fibo = "0, 1";

    for (let i = 2; i < num; i++) {
        const next = uno + dos;
        fibo += `, ${next}`;
        uno = dos;
        dos = next;
    }
    return dos;
}

function calcuFibo() {
    const numero = document.getElementById("numero");
    const resultado = document.getElementById("resultado");
    const valor = parseInt(numero.value);
    const dos = fibonacci(valor);
    resultado.textContent = dos;
}
