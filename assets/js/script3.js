
function verificarPassword() {
    const selector1 = document.getElementById("selector1").value;
    const selector2 = document.getElementById("selector2").value;
    const selector3 = document.getElementById("selector3").value;
    const resultadoParrafo = document.getElementById("resultado");

    const password = selector1 + selector2 + selector3;

    if (password === "911") {
        resultadoParrafo.textContent = "Password 1 correcto";
    } else if (password === "714") {
        resultadoParrafo.textContent = "Password 2 es correcto";
    } else {
        resultadoParrafo.textContent = "Password incorrecto";
    }
}
