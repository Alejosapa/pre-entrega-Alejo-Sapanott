function convertir() {
    const valorDOM = document.getElementById("valor");
    const valor1 = document.getElementById("uno");
    const valor2 = document.getElementById("dos");

    let valore = parseFloat(valorDOM.value);
    let resultado = 0;

    if (valor1.checked) {
        resultado = valore / 365;
        alert("El cambio de pesos a dólares es " + resultado);
    } else if (valor2.checked) {
        resultado = valore / 373;
        alert("El cambio de pesos a euros es " + resultado);
    } else {
        alert("Debes seleccionar una moneda");
    }
}
