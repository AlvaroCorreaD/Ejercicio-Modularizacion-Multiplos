let numero1: number;
let numero2: number;
let resultado = 0;
let contador: number;

function esMultiplo() {
  for (contador = 0; contador === 0; contador++) {
    resultado = numero1 % numero2;
  }
}

numero1 = Number(prompt("Ingrese el primer parámetro:"));
numero2 = Number(prompt("Ingrese el segundo parámetro:"));

esMultiplo();
if (resultado !== 0) {
  console.log("El número", numero1, "no es múltiplo de", numero2);
} else if (numero1 % numero2 === 0) {
  console.log(
    "El número",
    numero1,
    "es múltiplo de",
    numero2,
    "dado que el resto de la división es",
    resultado
  );
}
esMultiplo();
