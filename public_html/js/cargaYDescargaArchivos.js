

// Mostrar el texto del archivo seleccionado en el primer textArea
document.getElementById("abrirArchivo").addEventListener('change', function(){
    var fr = new FileReader();
    fr.onload = function () {
        document.getElementById("primerTextArea").textContent = this.result;
    }
    fr.readAsText(this.files[0]);
});

////////////////////////////////////////////////////////////////////////////////

window.onload = function () {
    var txt = document.getElementById('primerTextArea');
    document.getElementById('opcionDescargar').onclick = function (code) {
        this.href = 'data:text/plain;charset=utf-8,'
                + encodeURIComponent(txt.value);
    };
};



























///////////////////////////////////////////////////////////////////////


// Funcion para abrir un archivo una vez selecconado
//document.getElementById("abrirArchivo").onchange = function () {
//    var  = document.getElementById("abrirArchivo").files[0];
//    var fr = new FileReader();
//    fr.onload = function (e) {
//        var text = e.target.resutl;
//        document.getElementById("primerTextArea").value = text;
//    }
//    fr.readAsText(file,"UTF-8");
//}

// Funcion para guardar archivos
//function guardarArchivo() {
//    var guardarTexto = document.getElementById("primerTextArea").value;
//    var textoBLOB = new Blob([guardarTexto], {type: "text/palin"});
//    var nombreArchivo = prompt("Introduzca el nombre del archivo");
//    var link = document.createElement("a");
//    link.donwload = nombreArchivo;
//    link.innerHTML = "Donwload File";
//
//    if (window.URL !== null) {
//        link.href = window.URL.createObjectURL(textoBLOB);
//    } else {
//        link.href = window.URL.createObjectURL(textoBLOB);
//        link.onclick = destroy;
//        link.style.display = "none";
//        document.body.appendChild(link);
//    }
//
//    link.click();
//}
//
//
//function destroy(e) {
//    document.body.removeChild(e.target);
//}
//
//
//function editarArchivo() {
//    var fh = fopen("/home/james/Escritorio/prueba.txt", 3); // Open the file for writing
//
//    if (fh !== -1) // If the file has been successfully opened
//    {
//        var str = document.getElementById("primerTextArea").value;
//        fwrite(fh, str); // Write the string to a file
//        fclose(fh); // Close the file 
//        alert("Guardado");
//    } else {
//        alert("No se pudo abrir el archivo");
//    }
//
//}

