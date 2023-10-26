const num = parseInt(prompt("Ingrese un número entero: "));
const divisores = [2, 3, 5,7];

document.write("El número " + num + " es divisible por: ");

let salida = "";
for(let i = 0; i <4; i++)
{  
    if (!(num % divisores[i])) {
        salida = salida + divisores[i] + "-";
    }
}

document.write(salida.substring(0, (salida.length-1)) + ".");
