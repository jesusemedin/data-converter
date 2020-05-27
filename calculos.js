function calculo()
{
function unidades(name, equibit, equibyte, equikilo, equimega, equigiga, equitera) 
{
 this.nombre = name,
 this.bit = equibit,
 this.byte = equibyte,
 this.kilobyte = equikilo,
 this.megabyte = equimega,
 this.gigabyte = equigiga,
 this.terabyte = equitera,

 this.conversion = function(numeroAConvertir)
 {
     var resultado = (numeroAConvertir * 1024) / 1
     return resultado
 }
};

var TB = new unidades ("TeraByte", 8796093022208, 1099511627776, 1073741824, 1048576, 1024, 1)
var GB = new unidades ("GigaByte", 8589934592, 1073741824, 1048576, 1024, 1, 0.0009765625)
var MB = new unidades ("MegaByte", 8388608, 1048576, 1024, 1, 0.0009765625, 0.0000009537)
var KB = new unidades ("KiloByte", 8192, 1024, 1, 0.0009765625, 0.0000009537, 0.0000000009)
var B = new unidades ("Byte", 8, 1, 0.0009765625, 0.0000009537, 0.0000000009, 8.7890625e-13)
var b = new unidades ("bit", 1, 0.128, 0.000125, 0.0000001221,0.0000000001, 9.765625e-14)

//Para dato de entrada
// var opciones = [b, B, KB, MB, GB, TB]
var opcionUsuario = document.getElementById("DatoE").value
//var resultado = opcionUsuario.kilobyte
 
var resultado = "123"

//Para valor de entrada

//Para dato de salida


//Para valor de salida
document.getElementById("resultado").value = resultado
}

function inicio ()
{

}