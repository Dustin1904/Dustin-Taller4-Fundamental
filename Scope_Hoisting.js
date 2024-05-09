// SCOPE Y HOISTING
// SCOPE---------------------------------------------------------
    //El scope se refiere al contexto en el que puede trabajar una variable o una funcion
    //Exiten 3 tipos de principales de scope


    // 1. Global Scope
    var descripcionCanal = "1 Que tal amigos de YouTube, como estan"
    function saludo(){
        console.log(descripcionCanal);
    }
    saludo(); //En este caso la variable se puede llamar desde cualquier parte del codigo



    // 2. Local Scope
    function saludo2(){
        var descripcionCanal2 = "2 Que tal amigos de YouTube, como estan"
        console.log(descripcionCanal2);
    }
    saludo2(); //En este caso la variable solo se puede llamar desde la funcion



    // 3. Block Scope
    {
        let descripcionCanal3 = "3 Que tal amigos de YouTube, como estan"
        console.log(descripcionCanal3);
    }
    console.log(descripcionCanal3); //En este caso la variable solo se puede llamar desde el bloque de codigo por lo que si se llama a la variable fuea del bloque, la consola imprimirá un mensaje de error
//

// HOISTING-----------------------------------------------------
    // Es el proceso de mover las declaraciones de variables y funciones a la parte superior de su scope

    // 1. Hoisting de variables
    console.log(mensajeCanal); // Imprimirá Undefined y no imprimirá error
    var mensajeCanal = "Que tal amigos de YouTube, como estan";




    // 2. Hoisting de funciones
    saludoCanal()
    function saludoCanal(){
        console.log("Que tal amigos de YouTube, como estan");
    } // En este caso, aunque la funcion sea llamada antes de su declaración, el programa no arroja un error, sino que gracias al hoisting, el programa lo interpreta como si la funcion se encuentrara antes de su llamada
//