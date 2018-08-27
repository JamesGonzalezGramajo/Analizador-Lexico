
// se define el objeto "error" y representa a una palabra no valida para el analizado
function error(lexema, fila, columna) {
    this.lexema = lexema;
    this.fila = fila;
    this.columna = columna;
}


// se define el objeto "valido" y representa a una palabra valida para el analizador
function valido(token, lexema, fila, columna) {
    this.token = token;
    this.lexema = lexema;
    this.fila = fila;
    this.columna = columna;
}

// Separa en lineas el parrafo de texto contenido en el primer textArea, devolviendo un listado que contiene todas las lineas del texto
function separarEnLineas() {
    var texto = document.getElementById("primerTextArea").value;
    var listaLineas = texto.split("\n");
    return listaLineas;
}


// Separa una linea de texto en las palabras que la contienen, asi retornando un listado de palabras de una linea
function separarEnPalabras(linea) {
    var listaPalabras = linea.split(" ");
    return listaPalabras;
}


// Evalua palabra por palabra para verificar que la palabra sea valida para el alfabeto
function analizar(listaPalabras) {

    //for (var i = 0; i < listaPalabras.length; i++) {

/////////////////////////////// Con inicial con letra seguda de letras y/o numeros

    if (listaPalabras.charAt(0) === "a" || listaPalabras.charAt(0) === "A" ||
            listaPalabras.charAt(0) === "b" || listaPalabras.charAt(0) === "B" ||
            listaPalabras.charAt(0) === "c" || listaPalabras.charAt(0) === "C" ||
            listaPalabras.charAt(0) === "d" || listaPalabras.charAt(0) === "D" ||
            listaPalabras.charAt(0) === "e" || listaPalabras.charAt(0) === "E" ||
            listaPalabras.charAt(0) === "f" || listaPalabras.charAt(0) === "F" ||
            listaPalabras.charAt(0) === "g" || listaPalabras.charAt(0) === "G" ||
            listaPalabras.charAt(0) === "h" || listaPalabras.charAt(0) === "H" ||
            listaPalabras.charAt(0) === "i" || listaPalabras.charAt(0) === "I" ||
            listaPalabras.charAt(0) === "j" || listaPalabras.charAt(0) === "J" ||
            listaPalabras.charAt(0) === "k" || listaPalabras.charAt(0) === "K" ||
            listaPalabras.charAt(0) === "l" || listaPalabras.charAt(0) === "L" ||
            listaPalabras.charAt(0) === "m" || listaPalabras.charAt(0) === "M" ||
            listaPalabras.charAt(0) === "n" || listaPalabras.charAt(0) === "N" ||
            listaPalabras.charAt(0) === "o" || listaPalabras.charAt(0) === "O" ||
            listaPalabras.charAt(0) === "p" || listaPalabras.charAt(0) === "P" ||
            listaPalabras.charAt(0) === "q" || listaPalabras.charAt(0) === "Q" ||
            listaPalabras.charAt(0) === "r" || listaPalabras.charAt(0) === "R" ||
            listaPalabras.charAt(0) === "s" || listaPalabras.charAt(0) === "S" ||
            listaPalabras.charAt(0) === "t" || listaPalabras.charAt(0) === "T" ||
            listaPalabras.charAt(0) === "u" || listaPalabras.charAt(0) === "U" ||
            listaPalabras.charAt(0) === "v" || listaPalabras.charAt(0) === "V" ||
            listaPalabras.charAt(0) === "w" || listaPalabras.charAt(0) === "W" ||
            listaPalabras.charAt(0) === "x" || listaPalabras.charAt(0) === "X" ||
            listaPalabras.charAt(0) === "y" || listaPalabras.charAt(0) === "Y" ||
            listaPalabras.charAt(0) === "z" || listaPalabras.charAt(0) === "Z") {

        for (var j = 1; j < listaPalabras.length; j++) {

            if (listaPalabras.charAt(j) === "a" || listaPalabras.charAt(j) === "A" ||
                    listaPalabras.charAt(j) === "b" || listaPalabras.charAt(j) === "B" ||
                    listaPalabras.charAt(j) === "c" || listaPalabras.charAt(j) === "C" ||
                    listaPalabras.charAt(j) === "d" || listaPalabras.charAt(j) === "D" ||
                    listaPalabras.charAt(j) === "e" || listaPalabras.charAt(j) === "E" ||
                    listaPalabras.charAt(j) === "f" || listaPalabras.charAt(j) === "F" ||
                    listaPalabras.charAt(j) === "g" || listaPalabras.charAt(j) === "G" ||
                    listaPalabras.charAt(j) === "h" || listaPalabras.charAt(j) === "H" ||
                    listaPalabras.charAt(j) === "i" || listaPalabras.charAt(j) === "I" ||
                    listaPalabras.charAt(j) === "j" || listaPalabras.charAt(j) === "J" ||
                    listaPalabras.charAt(j) === "k" || listaPalabras.charAt(j) === "K" ||
                    listaPalabras.charAt(j) === "l" || listaPalabras.charAt(j) === "L" ||
                    listaPalabras.charAt(j) === "m" || listaPalabras.charAt(j) === "M" ||
                    listaPalabras.charAt(j) === "n" || listaPalabras.charAt(j) === "N" ||
                    listaPalabras.charAt(j) === "o" || listaPalabras.charAt(j) === "O" ||
                    listaPalabras.charAt(j) === "p" || listaPalabras.charAt(j) === "P" ||
                    listaPalabras.charAt(j) === "q" || listaPalabras.charAt(j) === "Q" ||
                    listaPalabras.charAt(j) === "r" || listaPalabras.charAt(j) === "R" ||
                    listaPalabras.charAt(j) === "s" || listaPalabras.charAt(j) === "S" ||
                    listaPalabras.charAt(j) === "t" || listaPalabras.charAt(j) === "T" ||
                    listaPalabras.charAt(j) === "u" || listaPalabras.charAt(j) === "U" ||
                    listaPalabras.charAt(j) === "v" || listaPalabras.charAt(j) === "V" ||
                    listaPalabras.charAt(j) === "w" || listaPalabras.charAt(j) === "W" ||
                    listaPalabras.charAt(j) === "x" || listaPalabras.charAt(j) === "X" ||
                    listaPalabras.charAt(j) === "y" || listaPalabras.charAt(j) === "Y" ||
                    listaPalabras.charAt(j) === "z" || listaPalabras.charAt(j) === "Z" ||
                    listaPalabras.charAt(j) === "0" || listaPalabras.charAt(j) === "1" ||
                    listaPalabras.charAt(j) === "2" || listaPalabras.charAt(j) === "3" ||
                    listaPalabras.charAt(j) === "4" || listaPalabras.charAt(j) === "5" ||
                    listaPalabras.charAt(j) === "6" || listaPalabras.charAt(j) === "7" ||
                    listaPalabras.charAt(j) === "8" || listaPalabras.charAt(j) === "9"
                    ) {

                //NO HACER NADA Y PASAR A LA SIGUIENTE ITERACION



            } else {

                return "error";


            }


        }
        return "okIdentificador";

///////////////////////////////// Con numeros enteros y decimales ///////////////////////////////

    } else if (listaPalabras.charAt(0) === "0" || listaPalabras.charAt(0) === "1" ||
            listaPalabras.charAt(0) === "2" || listaPalabras.charAt(0) === "3" ||
            listaPalabras.charAt(0) === "4" || listaPalabras.charAt(0) === "5" ||
            listaPalabras.charAt(0) === "6" || listaPalabras.charAt(0) === "7" ||
            listaPalabras.charAt(0) === "8" || listaPalabras.charAt(0) === "9") {

        for (var j = 1; j < listaPalabras.length; j++) {

            if (listaPalabras.charAt(j) === "0" || listaPalabras.charAt(j) === "1" ||
                    listaPalabras.charAt(j) === "2" || listaPalabras.charAt(j) === "3" ||
                    listaPalabras.charAt(j) === "4" || listaPalabras.charAt(j) === "5" ||
                    listaPalabras.charAt(j) === "6" || listaPalabras.charAt(j) === "7" ||
                    listaPalabras.charAt(j) === "8" || listaPalabras.charAt(j) === "9") {

                //NO HACER NADA Y PASAR A LA SIGUIENTE ITERACION

            } else if (listaPalabras.charAt(j) === ".") {

                if (listaPalabras.charAt(j + 1) === "") {
                    return "error";
                } else {

                }

            }

        }
        return "okNumero";


/////////////////////////////// Con simbolos de puntuacion, de agrupacion y aritmeticos /////////////////////////////// 


    } else if ((listaPalabras.charAt(0) === "." || listaPalabras.charAt(0) === "," ||
            listaPalabras.charAt(0) === ":" || listaPalabras.charAt(0) === ";"
            ) && listaPalabras.charAt(1) === "") {

        return "okPuntuacion";

    } else if ((listaPalabras.charAt(0) === "+" || listaPalabras.charAt(0) === "-" ||
            listaPalabras.charAt(0) === "*" || listaPalabras.charAt(0) === "/" ||
            listaPalabras.charAt(0) === "%") && listaPalabras.charAt(1) === "") {

        return "okAritmetico";

    } else if ((listaPalabras.charAt(0) === "(" || listaPalabras.charAt(0) === ")" ||
            listaPalabras.charAt(0) === "[" || listaPalabras.charAt(0) === "]" ||
            listaPalabras.charAt(0) === "{" || listaPalabras.charAt(0) === "}") && listaPalabras.charAt(1) === "") {

        return "okAgrupacion";

    } else if (listaPalabras.charAt(0) === "\n") {

        return "salto";


    } else {
        return "error";

    }

    //}

}

// Asigna si una palabra es valida o no
function colocarEstadoDeValidacion(estado, listadoPalabras, i) {
    if (estado === "ok") {
        var texto2 = document.getElementById("segundoTextArea").value;
        document.getElementById("segundoTextArea").textContent = texto2 + listadoPalabras[i] + "   =====> VALIDO \n";

    } else {
        var texto2 = document.getElementById("segundoTextArea").value;
        document.getElementById("segundoTextArea").textContent = texto2 + listadoPalabras[i] + "   =====> INVALIDO \n";
    }

}

// junta los metodos de separarEnLineas(), separarEnPalabras() y analizar() y los hace trabajar
function procesar() {
    var listaVAlidos = [];

    var listadoLineas = separarEnLineas();// Separa el parrafo en los saltos de linea para dejar lineas de texto

    for (var i = 0; i < listadoLineas.length; i++) {
        var listadoPalabras = separarEnPalabras(listadoLineas[i]);// Cada linea la separa en palabras 
        for (var j = 0; j < listadoPalabras.length; j++) {
            var resultado = analizar(listadoPalabras[j]);
            if (resultado === "okIdentificador" || resultado === "okNumero" || resultado === "okAgrupacion" ||
                    resultado === "okAritmetico" || resultado === "okPuntuacion") {

                var texto2 = document.getElementById("segundoTextArea").value;
                document.getElementById("segundoTextArea").textContent = texto2 + listadoPalabras[j] + "   =====> VALIDO \n";

            } else if (resultado === "error") {

                var texto2 = document.getElementById("segundoTextArea").value;
                document.getElementById("segundoTextArea").textContent = texto2 + listadoPalabras[j] + "   =====> NO VALIDO \n";

            } else {

                var texto2 = document.getElementById("segundoTextArea").value;
                document.getElementById("segundoTextArea").textContent = texto2 + listadoPalabras[j] + "   =====> SALTO \n";

            }
        }
    }
    return listaVAlidos;
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// junta los metodos de separarEnLineas(), separarEnPalabras() y analizar() y los hace trabajar para evaluar las palabras no validas
function procesarParaErrores() {

    var listaErrores = [];

    var listadoLineas = separarEnLineas();// Separa el parrafo en los saltos de linea para dejar lineas de texto

    for (var i = 0; i < listadoLineas.length; i++) {
        var listadoPalabras = separarEnPalabras(listadoLineas[i]);// Cada linea la separa en palabras 
        for (var j = 0; j < listadoPalabras.length; j++) {
            var resultado = analizar(listadoPalabras[j]);
            if (resultado === "ok") {

                // No hacer nada

            } else if (resultado === "error") {

                var errorNuevo = new error(listadoPalabras[j], (i + 1), (j + 1));
                listaErrores.push(errorNuevo);

            } else {

                // No hacer nada
            }
        }
    }
    return listaErrores;
}



// elabora la tabla que muestra los tokens no validos
function elaborarTablaErrores(listaErrores) {
    document.write("<table>");

    document.write("<tr>");
    document.write("<th>CADENA</th>");
    document.write("<th>FILA</th>");
    document.write("<th>COLUMNA</th>");
    document.write("</tr>");

    for (var i = 0; i < listaErrores.length; i++) {

        document.write("<tr>");
        document.write("<td>" + listaErrores[i].lexema + "</td>");
        document.write("<td>" + listaErrores[i].fila + "</td>");
        document.write("<td>" + listaErrores[i].columna + "</td>");
        document.write("</tr>");

    }

    document.write("</table>");
}


//muestra la tabla con las palabras no validas
function mostrarTablaErrores() {
    var listaErrores = procesarParaErrores();
    elaborarTablaErrores(listaErrores);
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// junta los metodos de separarEnLineas(), separarEnPalabras() y analizar() y los hace trabajar para evaluar las palabras validas
function procesarParaValidos() {

    var listaValidos = [];

    var listadoLineas = separarEnLineas();// Separa el parrafo en los saltos de linea para dejar lineas de texto

    for (var i = 0; i < listadoLineas.length; i++) {
        var listadoPalabras = separarEnPalabras(listadoLineas[i]);// Cada linea la separa en palabras 
        for (var j = 0; j < listadoPalabras.length; j++) {

            var resultado = analizar(listadoPalabras[j]);

            if (resultado === "okIdentificador") {

                var validoNuevo = new valido("Identificador", listadoPalabras[j], (i + 1), (j + 1));
                listaValidos.push(validoNuevo);

            } else if (resultado === "okNumero") {

                var validoNuevo = new valido("Numero", listadoPalabras[j], (i + 1), (j + 1));
                listaValidos.push(validoNuevo);

            } else if (resultado === "okAgrupacion") {

                var validoNuevo = new valido("Agrupacion", listadoPalabras[j], (i + 1), (j + 1));
                listaValidos.push(validoNuevo);

            } else if (resultado === "okAritmetico") {

                var validoNuevo = new valido("Aritmetico", listadoPalabras[j], (i + 1), (j + 1));
                listaValidos.push(validoNuevo);

            } else if (resultado === "okPuntuacion") {

                var validoNuevo = new valido("Puntuacion", listadoPalabras[j], (i + 1), (j + 1));
                listaValidos.push(validoNuevo);

            } else if (resultado === "error") {

                //No hacer nada

            } else {

                //No hacer nada

            }
        }
    }
    return listaValidos;
}

// elabora la tabla que muestra los tokens validos
function elaborarTablaValidos(listaValidos) {

  
    document.write("<table>");
    document.write("<tr>");
    document.write("<th> TOKEN </th>");
    document.write("<th> LEXEMA </th>");
    document.write("<th> FILA </th>");
    document.write("<th>COLUMNA</th>");
    document.write("</tr>");
    for (var i = 0; i < listaValidos.length; i++) {
        document.write("<tr>");
        document.write("<td>" + listaValidos[i].token + "</td>");
        document.write("<td>" + listaValidos[i].lexema + "</td>");
        document.write("<td>" + listaValidos[i].fila + "</td>");
        document.write("<td>" + listaValidos[i].columna + "</td>");
        document.write("</tr>");
    }
    document.write("</table>");

}

//muestra la tabla con las palabras validas
function mostrarTablaValidos() {
    var listaValidaciones = procesarParaValidos();
    elaborarTablaValidos(listaValidaciones);
}
