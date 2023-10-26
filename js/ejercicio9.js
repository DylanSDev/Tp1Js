let frase = prompt("Ingrese una frase: ");
frase = frase.toLowerCase();
let vocales = ["a","e","i","o","u"];

document.write("Las vocales que aparecen en la frase son: ");
for(let i=0; i < frase.length; i++)
{
   if(vocales.includes(frase.substring(i, i+1))) document.write(frase.substring(i, i+1));
}