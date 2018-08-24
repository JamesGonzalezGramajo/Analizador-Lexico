function buscarPalabra(){
    var palabraABuscar = obtenerPalabraABuscar();
    alert("La palabra a buscar es: " + palabraABuscar);
    llenarTextArea2();
}

function obtenerPalabraABuscar(){
    var palabraABuscar = document.getElementById("inputPalabraBuscar").value;
    return palabraABuscar;
}

function llenarTextArea2(){
    var texto = document.getElementById("primerTextArea").value;
    document.getElementById("segundoTextArea").textContent = texto;
}

