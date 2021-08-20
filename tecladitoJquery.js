var expresion = '';//creo la variable y almaceno un valor vacio

//Cuando el documento se carge, cuando este listo--ready--
// se agraga una funcion que haga los manejadores de eventos
$(document).ready(function(){

 
    //referencia a todos los botones
    $('button').click(function(){//la funcion de todos los botones hara lo siguiente   
      var caracter = $(this).text(); // en la variable caracter almaceno el texto del boton


      //Condiciones: 1) Si caracter(el texto que se guarde) es el '='
      // calcule lo que esta en pantalla, es decir, el caracter que ha ingresado.
      // el calculo se hace atraves del metodo "eval" pasando por parametro lo que esta en pantalla representado
      //por la variable "expresion". Y al mismo resultado lo guardo en "expresion" para que muestre en pantalla.
      if(caracter == '='){
        expresion = eval(expresion);

        //Condiciones: 2) sino, si el texto que se guarde en caracte es igual a 'C', la celda de la pantalla,
        //otra forma de decirlo. Queda vacia.
      }else if(caracter == 'C'){
         expresion = '';
      }
      else{//Condiciones: 3) Sino, seguira incrementando caracteres en expresion, representacion de la celda "Pantalla"
         expresion += caracter;
      }

      // expresion += caracter;//le agregamos los caracteres

      $('#pantalla').text(expresion);//agregamos a la celda #pantalla(id) el texto de expresion
    });

   
});

//e = representa el evento en si mismo
$(document).keypress(function(e){// documento cargado, creamos funcion "keypress" la cual
  //se encarga de tomar los valores que entre por teclado.
    var codigo= e.charCode;// varriable que guardara los codigos de caracteres que entren por teclado// cada caracter o tecla tiene un codigo(podria decirse, ascii)
    var caracter = String.fromCharCode(codigo);//variable que guardara una cadena creada mediante el uso de valores Unicode especificada.
    var posibles_caracteres= ["+","/", "-", "*","1", "2","3","4","5","6","7","8","9","0"];// Creo un arreglo el cual tiene la lista de caracteres que pueden ser posibles en esta calculadora


    //Condiciones: 1) Si caracter(la cadena mediante unicode) es el '=' o codigo 61(control + 0)
     // calcule lo que esta en pantalla, es decir, el caracter que ha ingresado.
      // el calculo se hace atraves del metodo "eval" pasando por parametro lo que esta en pantalla representado
      //por la variable "expresion". Y al mismo resultado lo guardo en "expresion" para que muestre en pantalla.
    if(caracter == '=' || caracter == 61 ){
      expresion = eval(expresion);
     

      //Condiciones: 2) sino, si el texto que se guarde en caracter es igual a 'C', la celda de la pantalla,
        //otra forma de decirlo. Queda vacia
    }else if ( caracter == 'C' || caracter == 'c'){
      expresion = '';
    
      //Condiciones: 3) Sino, seguira incrementando caracteres en expresion, representacion de la celda "Pantalla"
    }else if(posibles_caracteres.includes(caracter)){
      expresion += caracter;
      
    }

    ////agregamos a la celda #pantalla(id) el texto de expresion
    $('#pantalla').text(expresion);

});