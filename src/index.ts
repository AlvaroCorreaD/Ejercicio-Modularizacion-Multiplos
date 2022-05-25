let numero1: number;
let numero2: number;
let resultado: number;

function esMultiplo(num1: number, num2: number) {
  let resto = num1 % num2;
  return resto;
}

numero1 = Number(prompt("Ingrese el primer parámetro:"));
numero2 = Number(prompt("Ingrese el segundo parámetro:"));

resultado = esMultiplo(numero1, numero2);

if (resultado !== 0) {
  console.log("El número", numero1, "no es múltiplo de", numero2);
} else {
  console.log(
    "El número",
    numero1,
    "es múltiplo de",
    numero2,
    "dado que el resto de la división es",
    resultado
  );
}
