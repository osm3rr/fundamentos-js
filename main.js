// Variables
// let MyName;
// MyName = "josefino";

// let MyAge = 15;

// let MyName = "josefino2",
//     MyAge = 15,
//     MyMessage = "hello :)";

// // alert(MyName);
// // alert(MyAge);
// // alert(MyMessage);

// // constantes
// const MyBirthDay = "Apr-21-2014";

// // alert(MyBirthDay);

// // tipos de datos
// let MyAge2 = 33;
// let IsActive = true;
// let IsBlue = false;

// let MyHeight = null;
// let MyHeight2 = undefined;

// // ingreso de argumentos
// let year = prompt('año actual:');
// // alert(year);

// // confirm
// let isBoss = confirm("Eres el jefe?");
// // alert(isBoss);

// // operadores matematicos
// let Num1 = 10;
// let Num2 = 20;

// // suma
// // alert( Num1 + Num2 );

// // // resta
// // alert( Num1 - Num2 );

// // // multiplicación
// // alert( Num1 * Num2 );

// // // división
// // alert( Num1 / Num2 );

// // incremento
// let Num3 = 2;
// Num3++;
// // alert(Num3);

// operadores de comparación
// alert( 2 > 1 ); 
// alert( 2 < 1 );
// alert( 2 == 1 );
// alert( 2 !=  1);

// condicionales
// let year = prompt("ingrese el año actual:");

// if ( year == 2024 ) {
//     alert("Muy bien");
//     alert("eres genial");
// }

// else
// let year = prompt("ingrese el año actual:");

// if ( year == 2024 ) {
//     alert("Muy bien");
//     alert("eres genial");
// } else {
//     alert("No es correcto");
// }

// condicionales encadenados
// let year = prompt("ingrese el año actual:");

// if ( year == 2024 ) {
//     alert("Muy bien");
//     alert("eres genial");
// } else if ( year > 2024 ) {
//     alert("Muy alto");
// } else if ( year < 2024 ) {
//     alert("Muy bajo")
// } else {
//     alert("No es correcto");
// }

// operadores logicos
// or ||
// alert( true || true ); // true 
// alert( true || false); // true
// alert( false || true ); // true
// alert( false || false ); // false


// let hour = 12;
// let isWeekend = false;

// if ( hour < 9 || hour > 18 || isWeekend){
//     alert("La oficina esta cerrada");
// } else {
//     alert("Open!");
// }

// and &&
// alert( true && true ); // true
// alert( true && false ); // false
// alert( false && true ); // false
// alert( false && false ); // false

// solution n
let userName = prompt('Quién eres tú?', '');

if (userName == "Admin" ) {
    
    let passWord = prompt('clave?', '');

    if ( passWord == "TheMaster" ) {
        alert("Welcome");
    } else if ( passWord == '' || passWord == null) {
        alert( "Cancelado" )
    } else {
        alert( "Clave incorrepta" );
    }
} else if ( userName == "" || userName == null) {
    alert( "Cancelado" );
} else {
    alert("no se quien eres :b");
}


