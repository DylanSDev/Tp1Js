
let num1 = parseInt(prompt("Ingrese el primer número: "));
let num2 = parseInt(prompt("Ingrese el segundo número: "));
let num3 = parseInt(prompt("Ingrese el tercer número: "));

if(num1 >= num2 && num1 >= num3)document.write("El " + num1 + " es el número más grande ingresado.");
if(num2 > num1  && num2 > num3)document.write("El " + num2 + " es el número más grande ingresado.");
if(num3 > num1  && num3 > num2)document.write("El " + num3 + " es el número más grande ingresado.");