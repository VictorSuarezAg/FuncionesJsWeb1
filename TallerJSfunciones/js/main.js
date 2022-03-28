document.addEventListener("DOMContentLoaded", function() {
    /*-------------------------*/
    /*------ Funciones --------*/
    /*-------------------------*/

    // Funcion ejercicio 1
    function rectangulo () {
        var alto = prompt("Ingrese el alto del rectangulo:");
        var ancho = prompt("Ingrese el ancho del rectangulo:");

        var area = alto * ancho;
        var result = document.querySelector(".res-ejercicio1");

        result.innerHTML = area;
    }

    // Funcion ejercicio 2
    function velocidad () {
        var kms = prompt("Ingrese la velocidad en km/h:");

        var metros = kms * 1000;
        var millas = kms * 0.62;

        var result = document.querySelector(".res-ejercicio2");

        result.innerHTML = "La velocidad en metros/hora es " + metros + " y la velocidad en millas/hora es " + millas;
    }

    // Funcion ejercicio 3
    function circunferencia () {
        var radio = prompt("Ingrese el radio de la circunferencia:");

        var perimetro = 2 * Math.PI * radio;
        var area = Math.PI * Math.pow(radio, 2);

        var result = document.querySelector(".res-ejercicio3");

        result.innerHTML = "El perimetro de la circunferencia es " + perimetro + " y el area de la circunferencia es " + area;
    }

    // Funcion ejercicio 4
    function cubo () {
        var number = prompt("Ingrese el numero:");

        var cubo = Math.pow(number, 3);

        var result = document.querySelector(".res-ejercicio4");

        result.innerHTML = "El cubo del numero " + number + " es: " + cubo;
    }

    // Funcion ejercicio 5
    function nombre () {
        var name = prompt("Ingrese un nombre:");

        if (!isNaN(name)) {
            alert("Ingrese un nombre válido")
        } else {
            var result = document.querySelector(".res-ejercicio5");

            result.innerHTML = "El nombre ingresado es " + name;
        }
    }

    // Funcion ejercicio 6
    function operaciones () {
        var num1 = prompt("Ingrese un numero:");
        var num2 = prompt("Ingrese otro numero:");

        var suma = num1 + num2;
        var resta = num1 - num2;
        var multiplicacion = num1 * num2;
        var division = num1 / num2;
        var result = document.querySelector(".res-ejercicio6");

        result.innerHTML = "La suma de los dos numero ingresados es " + suma + ",\n La resta de los dos numero ingresados es " + resta + 
        ",\n La multiplicación de los dos numeros ingresados es " + multiplicacion + ",\n La división de los dos numero ingresados es " + division;
        
    }

    // Funcion ejercicio 7
    function temperatura () {
        var grados = prompt("Ingrese la temperatura en ºC:");

        var farenheit = (grados * 1.8) + 32;
        var celcius = grados;
        var result = document.querySelector(".res-ejercicio7");

        if (celcius < 0 || farenheit < 32) {
            result.innerHTML = "!Nos Congelamos¡";
        } else if (celcius >= 5 && celcius <= 15 || farenheit >= 37 && farenheit <= 50) {
            result.innerHTML = "!Esta haciendo frio¡";
        } else if (celcius >= 16 && celcius <= 25 || farenheit >= 51 && farenheit <= 77) {
            result.innerHTML = "!Está templado el día¡";
        } else if (celcius >= 38 || farenheit >= 100) {
            result.innerHTML = "!Tiene fiebre o es el apocalipsis¡";
        }
    }

    // Funcion ejercicio 8
    function imc () {
        var estatura = prompt("Ingrese la estatura (cm):");
        var peso = prompt("Ingrese el peso (kg):");

        var altura = estatura * estatura / 10000;

        var imc = peso / altura;

        var result = document.querySelector(".res-ejercicio8");

        if (imc < 18.5) {
            result.innerHTML = "!Bajo peso debe ir al nutricionista¡";
        } else if (imc >= 18.5 && imc <= 24.9) {
            result.innerHTML = "!Normal¡";
        } else if (imc >= 25.0 && imc <= 29.9) {
            result.innerHTML = "!Sobrepeso¡";
        } else if (imc >= 30.0) {
            result.innerHTML = "!Obeso debe ir al nutricionista¡";
        }
    }

    // Funcion 9
    function saludar (nombre) {
        var result = document.querySelector(".res-ejercicio9");

        result.innerHTML = "Hola " + nombre;
    }

    function entrada (callback) {
        var nombre = prompt("Ingrese el nombre: ");
        callback(nombre);
    }

    // Funcion 10
    function iva (producto, cantidad, precio) {
        var result = document.querySelector(".res-ejercicio10");
        
        var precioParcial = (precio * cantidad);

        var iva = precioParcial * 0.19;

        var precioTotal = precioParcial + iva;

        result.innerHTML = "El precio total de " + producto + " con el iva es : $" + precioTotal;
    }

    function producto (callback) {
        var producto = prompt("Ingrese el nombre del producto: ");
        var precio = prompt("Ingrese el valor del producto: ");
        var cantidad = prompt("Cantidad del producto: ");

        callback(producto, cantidad, precio);
    }

    // Funcion 11
    function dateActual (fecha) {
        var result = document.querySelector(".res-ejercicio11");
        var fechafin = new Date("2022-12-31").getTime();

        var dateDiff = fechafin - fecha;

        var dias = dateDiff / (1000*60*60*24);

        var semanas = (dias / 7).toFixed(1);

        result.innerHTML = "Faltan exactamente " + dias + " días, lo cual equivale a " + semanas + " semanas.";
    }

    function dateFinal (callback) {
        var fecha = new Date(prompt("Ingrese la fecha actual (AAAA-MM-DD): ")).getTime();

        callback(fecha);
    }

    // Funcion 12
    function listResult (cantProd, nomPro, numPro, valPro) {
        var result = document.querySelector(".res-ejercicio12");

        result.innerHTML = "<div style='width:100%'>La cantidad de productos a comprar es: " + cantProd + 
        "</div><div style='flex-direction: column; margin-right: 10px;'>" + nomPro + "</div><div style='flex-direction: column; margin-right: 10px;'>" 
        + numPro + "</div><div style='flex-direction: column;'>" + valPro + "</div>";
    }

    function lista (callback) {
        var cantProd = prompt("Ingrese cuantos productos desea comprar: ");
        var nomProducto = [];
        var valProducto = [];
        var numProducto = [];
        var nomPro = "";
        var valPro = "";
        var numPro = "";

        for (let i = 0; i < cantProd; i++) {
            nomProducto.push(prompt("Ingrese el nombre del producto: "));
            valProducto.push(prompt("Ingrese el valor del producto: "));
            numProducto.push(prompt("Cantidad del producto: "));

            nomPro = nomPro + "<br>" + nomProducto[i];
            valPro = valPro + "<br>" + valProducto[i];
            numPro = numPro + "<br>" + numProducto[i];
        }

        callback(cantProd, nomPro, numPro, valPro);
    }


    /*-------------------------*/
    /*------ Ejercicios -------*/
    /*-------------------------*/

    //Ejercicio 1
    var btnEjercicio1 = document.querySelector(".btn-ejercicio1")

    btnEjercicio1.addEventListener("click", function() {
        rectangulo();
    })

    //Ejercicio 2
    var btnEjercicio2 = document.querySelector(".btn-ejercicio2")

    btnEjercicio2.addEventListener("click", function() {
        velocidad();
    })

    //Ejercicio 3
    var btnEjercicio3 = document.querySelector(".btn-ejercicio3")

    btnEjercicio3.addEventListener("click", function() {
        circunferencia();
    })

    //Ejercicio 4
    var btnEjercicio4 = document.querySelector(".btn-ejercicio4")

    btnEjercicio4.addEventListener("click", function() {
        cubo();
    })

    //Ejercicio 5
    var btnEjercicio5 = document.querySelector(".btn-ejercicio5")

    btnEjercicio5.addEventListener("click", function() {
        nombre();
    })

    //Ejercicio 6
    var btnEjercicio6 = document.querySelector(".btn-ejercicio6")

    btnEjercicio6.addEventListener("click", function() {
        operaciones();
    })

    //Ejercicio 7
    var btnEjercicio7 = document.querySelector(".btn-ejercicio7")

    btnEjercicio7.addEventListener("click", function() {
        temperatura();
    })

    //Ejercicio 8
    var btnEjercicio8 = document.querySelector(".btn-ejercicio8")

    btnEjercicio8.addEventListener("click", function() {
        imc();
    })

    //Ejercicio 9
    var btnEjercicio9 = document.querySelector(".btn-ejercicio9")

    btnEjercicio9.addEventListener("click", function() {
        
        entrada(saludar);
    })

    //Ejercicio 10
    var btnEjercicio10 = document.querySelector(".btn-ejercicio10")

    btnEjercicio10.addEventListener("click", function() {
        
        producto(iva);
    })

    //Ejercicio 11
    var btnEjercicio11 = document.querySelector(".btn-ejercicio11")

    btnEjercicio11.addEventListener("click", function() {
        
        dateFinal(dateActual);
    })

    //Ejercicio 12
    var btnEjercicio12 = document.querySelector(".btn-ejercicio12")

    btnEjercicio12.addEventListener("click", function() {
        
        lista(listResult);
    })
})