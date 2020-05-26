var conversionTo = this.megabyte

function unidades(name, equikilo, equimega, equigiga, equitera) 
{
 this.nombre = name,
 //  this.bit = equibit,
 //  this.byte = equibyte,
 this.kilobyte = equikilo,
 this.megabyte = equimega,
 this.gigabyte = equigiga,
 this.terabyte = equitera,

 this.conversion = function(cantidad)
 {
     var resultado = ((cantidad * GB.megabyte) / 1)
    
     alert(resultado)
 }
};

var GB = new unidades("GigaByte", 1048576, 1024, 1, 0.0009765625)
var MB = new unidades("MegaByte", 1024, 1, 0.0009765625, 0.0000009537)
var KB = new unidades("KiloByte", 1, 0.0009765625, 0.0000009537, 0.0000000009)

// GB.conversion(1)

var prueba = 2e+34
 alert(prueba)
