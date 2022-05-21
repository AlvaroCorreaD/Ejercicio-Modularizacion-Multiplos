let numero1: number;
let numero2: number;

function calcularMultiplo(numero1: number, numero2: number) {
  while (numero1 & numero2) {
    numero1 = Number(prompt("Ingrese el primer parámetro: "));
    numero2 = Number(prompt("Ingrese el segundo parámetro: "));

    if (numero1 % numero2 == 0) {
      console.log("El número ", numero1, " es múltiplo de ", numero2);
    } else {
      console.log("El nnúmero ", numero1, " no es múltiplo de ", numero2);
    }