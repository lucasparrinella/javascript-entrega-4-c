const valorCasa = Number(prompt("¿Querés calcular cuánto va a valer tu casa dentro de 10 años? Ingresa el precio abajo:"));

let resultadoMultiplicar = valorCasa * 10;
let resultadoIva = resultadoMultiplicar * 0.21 + resultadoMultiplicar;
let resultadoMultiplicarVeinte = resultadoIva * 10;

function multiplicar( x, y ) {
    alert("Tu casa dentro de 10 años va a valer: $" + resultadoMultiplicar);
}
multiplicar();

function iva(a, b ,c) {
    alert("El valor final de tu casa con IVA dentro de 10 años es de: $" + resultadoIva);
}
iva();

function multiplicarVeinte(a, b) {
    alert("Dentro de 20 años valdrá: $" + resultadoMultiplicarVeinte + " con IVA incluido");
}
multiplicarVeinte();