// TIPOS DE VARIABLES
    // let
    // las variables de tipo let tienen un caracter de bloque y pueden ser reasigamdas pero no redeeclaradas
    let nombreCanal1 = "Putupau";
    nombreCanal1 = "xd";
    console.log(nombreCanal1); 


    // const
    // las variables const tienen un caracter de bloque y no pueden ser reasignados y redeclarados 
    const suscriptores2 = 5000
    suscriptores2 = 10000 // esto no se puede hacer porque es una variable de tipo const

    const nombres = {
        nombre: "Putupau",
        edad: 20
    }
    nombres.nombre = "xd"
    console.log(nombres); // En el caso de objetos sus valores si pueden ser editados aunque el objeto haya sido declarado con const


    // var
    // las variables declaradas con var tiene un caracter global y pueden ser reasignadas y redeclaradas
    var suscriptores1 = 100
    var suscriptores1 = 200
    console.log(suscriptores1); // imprimirá 200
    
//