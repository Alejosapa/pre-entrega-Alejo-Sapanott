function convertir(){
    var valore = parseInt(document.getElementById("valor").value)
    var resultado = 0;
    var dólar = 365;
    var euro = 373
    if(document.getElementById("uno").checked){
        resultado = valore/dólar;
        alert("El cambio de pesos a dólares es " + resultado)
    }else if(document.getElementById("dos").checked){
        resultado = valore/euro;
        alert("el cambio de pesos a euro es " + resultado);
    }else{
        alert("tienes que poner un numero")
    }
}