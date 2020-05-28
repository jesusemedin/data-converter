var boton;

var datoDeEntrada;
var datoDeSalida;
var valorDeEntrada;
var valorDeSalida;

function diferencia(entrada, salida, operador)
{
    var resultado = valorDeEntrada
    var diferencia = salida - entrada

    console.log("Diferencia " + diferencia)
    
    // if ( entrada == 1 )
    // {
    //     resultado = resultado / 8 / operador
    // }
        if(diferencia == 0)
        {
         resultado = resultado
        }

        if( diferencia >= 1)
           {
             for ( i = 0; i < diferencia; i++)
                {
                 resultado = resultado / operador
                 console.log("Se dividio por 1024 ")
                }  
           }

        if( diferencia <= -1 )
        {
            for ( i = 0; i > diferencia; i--)
            {
             resultado = resultado * operador
             console.log("Se multiplico por 1024")
            }
        }

      return resultado
}

function calculo ()
{
   datoDeEntrada = parseInt(document.getElementById("DatoE").value)
   datoDeSalida = parseInt(document.getElementById("DatoS").value)
   valorDeEntrada = document.getElementById("ValorEntrada").value

   //console.log(diferencia(datoDeEntrada, datoDeSalida))
   
   valorDeSalida = diferencia(datoDeEntrada, datoDeSalida, 1024)
   document.getElementById("ValorSalida").value = valorDeSalida  
}

function iniciar()
{
  boton = document.getElementById("boton")
  boton.addEventListener("click", calculo)
}


    // if (diferencia == 1)
    // {
    //     final = valorDeEntrada / 1024
    //     return final
    // }
    // if (diferencia == 2)
    // {
    //     final = valorDeEntrada / 1024 / 1024
    //     return final
    // }
    // if (diferencia == 3)
    // {
    //     final = valorDeEntrada / 1024 / 1024 / 1024
    //     return final
    // }
    // if (diferencia == 4)
    // {
    //     final = valorDeEntrada / 1024 / 1024 / 1024 / 1024
    //     return final
    // }