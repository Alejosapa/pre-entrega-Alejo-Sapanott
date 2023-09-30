function convertir() {
    let valore;
    let resultado = 0;
    let valorDOM;
    let valor1;
    let valor2;

    while (true) {
        valorDOM = document.getElementById("valor");
        valor1 = document.getElementById("uno");
        valor2 = document.getElementById("dos");

        valore = parseFloat(valorDOM.value);

        if (!isNaN(valore)) {  
            break;
        }

        alert("Por favor, ingresa un valor numérico válido.");
    }

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