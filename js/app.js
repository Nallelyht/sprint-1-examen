var estudiantes = [];

function obtenerListaEstudiantes() {
    // TO DO: Retornar la lista de estudiantes
    return estudiantes; //retornar a los estudiantes
}

function agregarEstudiante() {
    // TO DO: Preguntar al usuario por el nombre, puntos técnicos y puntos de HSE de un estudiante
    // Hint: El estudiante debe ser agregado a la lista de estudiantes
    // TO DO: Retornar el estudiante recientemente creado
    var nombreEstudiante = prompt("Nombre de la estudiante"); //ingresar el nombre de la estudiante.
    var porcentajeTecnico = prompt("Porcentaje Técnico"); //ingresar el porcentaje tecnifo
    var porcentajeHabilidadesSE = prompt("Porcentaje de Habilidades Socio-Emocionales");//ingresar porcentaje de habilidades socioeconomicas
    var estudiante = {  //guardar en el objeto los datos
      nombre:nombreEstudiante,
      porcentajeT:porcentajeTecnico,
      porcentajeHSE:porcentajeHabilidadesSE,
    };
    estudiantes.push(estudiante); //guardar en el array el objeto (estudiante)
    return estudiante;  //retornar el array
}


function mostrar(estudiante) {
    // TO DO: Completar el template para que muestre las propiedades correctas del estudiante
    var resultado = ""; //guardar en esta variable el estilo y mostrar las propiedades de la estudiante
    resultado += "<div class='row'>";
    resultado += "<div class='col m12'>";
    resultado += "<div class='card blue-grey darken-1'>";
    resultado += "<div class='card-content white-text'>";
    resultado += "<p><strong>Nombre:</strong> " + estudiante.nombre + "</p>"; //mostrar el nombre de la estudiante
    resultado += "<p><strong>Puntos Técnicos:</strong> " + estudiante.porcentajeT + "</p>";// mostrar el porcentaje tecnico de la estudiante
    resultado += "<p><strong>Puntos HSE:</strong> " + estudiante.porcentajeHSE + "</p>"; // mostrar el porcentaje de habilidades socio-emocionales de la estudiante
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    return resultado;
}

function mostrarLista(estudiantes) {
    // TO DO: Iterar la lista del estudiantes para devolverlos en el formato que usa la función mostrar(estudiante)
    // Retornar el template de todos los estudiantes
    // var largoEstudiantes = estudiantes.length; //saber el largo del array estudiantes
    // var resultado = ""; //variable donde se guardara el estilo y las propiedades a mostrar
    // for ( var i = 0; i < largoEstudiantes; i++){ //iterrar para mostrar la lista de las estudiantes
    //   resultado += "<div class='row'>";
    //   resultado += "<div class='col m12'>";
    //   resultado += "<div class='card blue-grey darken-1'>";
    //   resultado += "<div class='card-content white-text'>";
    //   resultado += "<p><strong>Nombre:</strong> " + estudiantes[i].nombre + "</p>"; //mostrara el nombre del indice que se le pide
    //   resultado += "<p><strong>Puntos Técnicos:</strong> " + estudiantes[i].porcentajeT + "</p>";//mostrar el porcentaje tenico del indice que le piden
    //   resultado += "<p><strong>Puntos HSE:</strong> " + estudiantes[i].porcentajeHSE + "</p>"; // mostrar el porcentaje de habilidades socio-emocionales del indice que le pide
    //   resultado += "</div>";
    //   resultado += "</div>";
    //   resultado += "</div>";
    //   resultado += "</div>";
    //   }
    //   return resultado;
    var resultado = "";
    estudiantes.forEach(function(estudiante){ // se pasa por la funcion para agregar en la variable suma los estudiantes y muestre la lista
      resultado += mostrar(estudiante);
    });
    return resultado
}

function buscar(nombre, estudiantes) {
    // TO DO: Buscar el nombre en la lista de estudiantes que se recibe por parámetros
    // Retornar el objeto del estudiante buscado
    // Nota: NO IMPORTA SI EL USUARIO ESCRIBE EL NOMBRE EN MAYÚSCULAS O MINÚSCULAS
    // var largoEstudiantes = estudiantes.length;//saber el largo del array estudiantes
    // var minusculas = nombre.toLowerCase();// convertir el nombre ingresado por el usuario en minusculas
    // var resultado = ""; //variable donde se guardara el estilo y las propiedades a mostrar
    // for ( var i = 0; i < largoEstudiantes; i++){//iterar para buscar en el arreglo de objetos el nombre
    //   if (estudiantes[i].nombre == minusculas){// si el nombre que esta en el arreglo de posicion i es igual al ingresado por el usuario dehe agregar estos elemenentos a resultado
    //     resultado += "<div class='row'>";
    //     resultado += "<div class='col m12'>";
    //     resultado += "<div class='card blue-grey darken-1'>";
    //     resultado += "<div class='card-content white-text'>";
    //     resultado += "<p><strong>Nombre:</strong> " + estudiantes[i].nombre + "</p>"; //mostrara el nombre del indice que se le pide
    //     resultado += "<p><strong>Puntos Técnicos:</strong> " + estudiantes[i].porcentajeT + "</p>";//mostrar el porcentaje tenico del indice que le piden
    //     resultado += "<p><strong>Puntos HSE:</strong> " + estudiantes[i].porcentajeHSE + "</p>"; // mostrar el porcentaje de habilidades socio-emocionales del indice que le pide
    //     resultado += "</div>";
    //     resultado += "</div>";
    //     resultado += "</div>";
    //     resultado += "</div>";
    //
    //
    var buscarEstudiante = estudiantes.filter(function(estudiante){
      return estudiante.nombre.toLowerCase() === nombre.toLocaleLowerCase();//se ocupa el metodo filter para buscar el estudiante
    });
    return buscarEstudiante;
       //devolver el resultado


    }
    // return estudiantes.filter(if (nombreEstudiante==estudiantes[0].nombre) );


    function topTecnico(estudiantes) {
        // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje técnico de mayor a menor
       return estudiantes.sort(function (a, b) {//se utiliza el metodo .sort para ordenar los porcentajes tecnicos
         return a.porcentajeT < b.porcentajeT;
       });
     }

     function topHSE(estudiantes) {
         // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje de HSE de mayor a menor
         return estudiantes.sort(function (a, b) { //se utiliza el metodo .sort para ordenar los porcentajes tecnicos
            return a.porcentajeHSE < b.porcentajeHSE;
        });
     }
