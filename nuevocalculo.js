var boton;

var datoDeEntrada;
var datoDeSalida;
var valorDeEntrada;
var valorDeSalida;

function diferencia(entrada, salida)
{
    alert("Hola mundo")
}

function calculo ()
{

   diferencia()
   datoDeEntrada = document.getElementById("DatoE").value
   datoDeSalida = document.getElementById("DatoS").value
   valorDeEntrada = document.getElementById("ValorEntrada").value




   valorDeSalida = 1
   document.getElementById("ValorSalida").value = valorDeSalida  
}

function iniciar()
{
//   datoDeEntrada = document.getElementById("DatoE").value
//   datoDeSalida = document.getElementById("DatoS").value
//   valorDeEntrada = document.getElementById("ValorEntrada").value
//   valorDeSalida = document.getElementById("ValorSalida").value


  boton = document.getElementById("boton")
  boton.addEventListener("click", calculo)
}