const num = parseInt(prompt("Ingrese un número entero: "));
const divisores = [2, 3, 5,7];

for(let i = 0; i <4; i++)
{
    if (!(num % divisores[i])) {
        document.write("El número " + num + " es divisible por " + divisores[i]);
        break;
    }
}

