/*challenge 20*/
let cantidad= parseInt(prompt('ingrese la cantidad de numeros'));
let mayor = 0;
let menor = 0;
let suma = 0;

if(isNaN(cantidad) || cantidad < 0)
{
  alert('la cantidad de numeros que ingreso no es un numero valido, intentelo nuevamente');
} 
else
{
  for(let i = 0; i < cantidad; i++){
    let numero= parseInt(prompt('ingrese un numero'));
    if (i == 0){
      mayor = numero;
      menor = numero;
    }

    if(mayor < numero){
       mayor = numero; 
    }
    
    if(menor > numero){
        menor = numero; 
     }
    suma = suma + numero;
  };    
}
document.write('Challenge 20<br/>');
document.write(`el mayor numero es ${mayor}, el menor numero es  ${menor} y la media aritmetica es ${(suma/cantidad).toFixed(2)} <br/>`);  

/*challenge 21-A*/
let vida = parseInt(prompt('ingrese la vida restante de su personaje'));

if(isNaN(vida))
{
  alert('valor de vida incorrecto, por favor ingrese un valor de vida valido');
} 
else {
  if(vida < 1){
    alert('valor de vida incorrecto, por favor ingrese un valor de vida mayor que cero');
  }
  else {
    if(vida > 100){
      alert('valor de vida incorrecto, por favor ingrese un valor de vida menor o igual a 100');
    }
    else {
      document.write('<br/>Challenge 21 - A <br/>');
      switch (true) {
      case (vida > 80):
          document.write('tu personaje paso a modo ofensivo <br/>');
          break;
      case (vida > 50):
          document.write('tu personaje paso a modo moderado <br/>');
          break;
      case (vida > 20):
          document.write('tu personaje paso a modo defensivo <br/>');
          break;
      case (vida <= 20):
          document.write('tu personaje debe huir por su vida <br/>');
          break;
      }
    }
  }
}

/*challenge 21-B*/
if(isNaN(vida) || vida < 1 || vida > 100)
{
  alert('valor de vida incorrecto, por favor ingrese un valor de vida valido, un numero mayor a cero y menor o igual a 100');
} 
else {
  document.write('<br/>Challenge 21 - B <br/>');
  switch (true) {
    case (vida > 80):
      document.write('tu personaje paso a modo ofensivo <br/>');
      break;
    case (vida > 50):
      document.write('tu personaje paso a modo moderado <br/>');
      break;
    case (vida > 20):
      document.write('tu personaje paso a modo defensivo <br/>');
      break;
    case (vida <= 20):
      document.write('tu personaje debe huir por su vida <br/>');
      break;
  }
}