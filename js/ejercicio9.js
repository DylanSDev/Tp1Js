let frase = prompt("Ingrese una frase: ");
let vocales = ["a","e","i","o","u"];
for(let i=0; i < frase.length; i++)
{
   if(vocales.includes(frase.substring(i, i+1))) document.write(frase.substring(i, i+1));
}