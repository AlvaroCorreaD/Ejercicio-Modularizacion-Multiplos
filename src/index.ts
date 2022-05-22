// defino variables
let numero1: number;
let numero2: number;
let resultado = 0;

// No se que poner dentro de la función
// function esMultiplo() {
//   return resultado = numero1 % numero2
// }
// No se que poner dentro de la función

// pido al usuario que ingrese parametros
numero1 = Number(prompt("Ingrese el primer parámetro:"));
numero2 = Number(prompt("Ingrese el seugundo parámetro:"));

// la función la llamo antes o dentro del if?
// resultado = esMultiplo(numero1, numero2);

if (numero1 % numero2 === resultado) {
  // function esMultiplo();
  console.log(
    "El número",
    numero1,
    "es múltiplo de",
    numero2,
    "dado que el resto de la división es",
    resultado
  );
  // function esMultiplo()

  // si no se cumple la funcion imprimo error por consola
} else {
  console.log("El número", numero1, "no es múltiplo de", numero2);
}
