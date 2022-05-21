// defino variables
let numero1: number;
let numero2: number;
let resultado: number = 0;

// No se que poner dentro de la función
function esMultiplo() {}
// No se que poner dentro de la función

// pido al usuario que ingrese parametros
numero1 = Number(prompt("Ingrese el primer parámetro:"));
numero2 = Number(prompt("Ingrese el seugundo parámetro:"));

// la función la llamo antes o dentro del if?
if (resultado === 0) {
  console.log(
    "El número ",
    numero1,
    " es múltiplo de ",
    numero2,
    " dado que la divisón entre los mismos es ",
    resultado
  );

  // si no se cumple la funcion imprimo error por consola
} else {
  console.log("El número ", numero1, " no es múltiplo de ", numero2);
}
