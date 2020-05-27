var boton;

var datoDeEntrada;
var datoDeSalida;
var valorDeEntrada;
var valorDeSalida;

function diferencia(entrada, salida)
{
    var final;
    var diferencia = salida - entrada
    if (diferencia == 0)
    {
        final = valorDeEntrada
        return final
    }
    if (diferencia == 1)
    {
        final = valorDeEntrada / 1024
        return final
    }
    if (diferencia == 2)
    {
        final = valorDeEntrada / 1024 / 1024
        return final
    }
    if (diferencia == 3)
    {
        final = valorDeEntrada / 1024 / 1024 / 1024
        return final
    }
    if (diferencia == 4)
    {
        final = valorDeEntrada / 1024 / 1024 / 1024 / 1024
        return final
    }


        

    // if (diferencia > 0)
    // {
    // for( contador = 1; contador <= diferencia; contador ++)
    // {
    //     if (diferencia > 1)
    //     {
    //     final = entrada / 1024
    //     }
    // }
    // return final
    // }
    // if (diferencia == 0)
    // {
    //     final = 
    // }

}

function calculo ()
{
   datoDeEntrada = parseInt(document.getElementById("DatoE").value)
   datoDeSalida = parseInt(document.getElementById("DatoS").value)
   valorDeEntrada = document.getElementById("ValorEntrada").value

   //console.log(diferencia(datoDeEntrada, datoDeSalida))
   
   valorDeSalida = diferencia(datoDeEntrada, datoDeSalida)
   document.getElementById("ValorSalida").value = valorDeSalida  
}

function iniciar()
{
  boton = document.getElementById("boton")
  boton.addEventListener("click", calculo)
}