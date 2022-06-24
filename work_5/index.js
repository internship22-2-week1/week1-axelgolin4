//CREAMOS EL OBJERO CALCULADORA CON 2 ATRIBUTOS CADENA Y RESULTADO
class Calculadora {

    constructor(){
        this.cadena = ''
        this.resultado = ''
    }

    setCadena(c){
        this.cadena = c
    }
    setResultado(r){
        this.resultado = r
    }
    
    //FUNCION PARA INVERTIR UNA CADENA
    invertirCadena(cad) {
        var separarCadena = cad.split("");
        var invertirArreglo = separarCadena.reverse(); 
        var unirArreglo = invertirArreglo.join(""); 
        return unirArreglo;
    }

    //FUNCION PARA VERIFICAR QUE TODOS LOS * / fueran procesados 
    verificarm(){
        for (var i=0;i<this.cadena.length-1;i++) { 
            if(this.cadena.charAt(i) == '*' || this.cadena.charAt(i) == '/'){
                calculadora.calcular()
            }
        }
    }
    //FUNCION PARA VERIFICAR QUE TODOS LOS + - fueran procesados 
    verificars(){
        for (var i=0;i<this.cadena.length-1;i++) { 
            if(this.cadena.charAt(i) == '+'|| this.cadena.charAt(i) == '-'){
                calculadora.calcular()
            }
        }
    }

    //FUNCION PARA VERIFICAR QUE TODOS LOS p r fueran procesados 
    verificarp(){
        for (var i=0;i<this.cadena.length-1;i++) { 
            if(this.cadena.charAt(i) == '+'|| this.cadena.charAt(i) == '-'){
                calculadora.calcular()
            }
        }
    }

    //FUNCION PARA QUITARLES LAS i y f que eran los parametros para la cadena 
    resultadofinal(){
        var cadenan = '' 
        var separarCadena = this.cadena.split("");

        for (var i=1;i<this.cadena.length-1;i++) { 
            cadenan = cadenan + separarCadena[i]
        }

        this.resultado = cadenan
        console.log("La respuesta es: " + this.resultado)

    }
    
   
    // Funcion utilizada para quitar la operacion que se proceso de la cadena.
    QuitarTexto(inicioq,finq,totalq){
        var miString = this.cadena
        var cadenan = '' 
        var separarCadena = miString.split("");


        for (var i=0;i<inicioq+2;i++) { 
            cadenan = cadenan + separarCadena[i]
        }
        cadenan= cadenan+totalq

        for (var i=finq+1;i<miString.length;i++) { 
            cadenan = cadenan + separarCadena[i]
        }
        this.cadena= cadenan
        console.log(this.cadena)
    }

    // Funcion utilizada para quitar la operacion que se procesa de la cadena si el resultado es negativo.
    QuitarTextoNegativo(inicioq,finq,totalq){
        var miString = this.cadena
        var cadenan = '' 
        var separarCadena = miString.split("");


        for (var i=0;i<inicioq+2;i++) { 
            cadenan = cadenan + separarCadena[i]
        }
        
        for (var i=finq+2;i<miString.length-1;i++) { 
            cadenan = cadenan + separarCadena[i]
        }

        cadenan= cadenan+totalq
        cadenan= cadenan+"f"

        this.cadena= cadenan
        console.log(this.cadena)
    }


    //CALCULAR LAS POTENCIAS  Y RAICES
    potenciacalculator(){
        //RECOREMOS LA CADENA EN BUSQUEDA DE POTENCIS Y RAICES
        for (var i=0;i<this.cadena.length-1;i++) { 

            //si se encuentra una raiz o potencia guardamos el puntero.
            if(this.cadena.charAt(i) == 'p' || this.cadena.charAt(i) == 'r'){
                var indice = i
                var indiceb = i
                var bandera = true
                var banderab = true
                var pp = ''
                var sp = ''
                var qi,qf
                var multot = 0 

                //MIRAMOS LA PARTE DERECHA DE LA MULTIPLICACION
                while(bandera == true){
                    indice= indice + 1
                    if(this.cadena.charAt(indice) != '*' && this.cadena.charAt(indice) != 'f' && this.cadena.charAt(indice) != '/' && this.cadena.charAt(indice) != '+' && this.cadena.charAt(indice) != '-' && this.cadena.charAt(indice) != 'p' && this.cadena.charAt(indice) != 'r'){
                        pp= pp + this.cadena.charAt(indice)
                    }
                    else{
                        bandera=false
                        qf = indice -1
                    }
                }

                //MIRAMOS LA PARTE IZQUIERDA DE LA MULTIPLICACION
                while(banderab == true){
                    indiceb= indiceb - 1
                    if(this.cadena.charAt(indiceb) != '*' && this.cadena.charAt(indiceb) != 'i' && this.cadena.charAt(indiceb) != '/' && this.cadena.charAt(indiceb) != '+' && this.cadena.charAt(indiceb) != '-' && this.cadena.charAt(indice) != 'p' && this.cadena.charAt(indice) != 'r'){
                        sp= sp + this.cadena.charAt(indiceb)
                    }
                    else{
                        banderab=false
                        qi = indiceb -1
                        sp = calculadora.invertirCadena(sp)
                       
                    }
                }

                //HACEMOS LA OPERACION
                if(this.cadena.charAt(i) == "p")
                {
                   
                    multot =  Math.pow(parseFloat(sp), parseFloat(pp));
                }
                else{
                    multot = Math.pow(parseFloat(pp), 1/parseFloat(sp));
                }
                //BORRAMOS LA OPERACION Y DEJAMOS EL RESULTADO
                console.log(sp + " "+this.cadena.charAt(i)+" "+ pp + " = " +multot)
                console.log("")
                calculadora.QuitarTexto(qi,qf,multot)
                calculadora.verificarp()
        
            }
      }
    }



    multiplicacioncalculator(){
        //MULTIPLICACION Y DIVICION 
        for (var i=0;i<this.cadena.length-1;i++) { 
            //VERIFICAMOS SI SE ENCUENTRA UNA * o /
            if(this.cadena.charAt(i) == '*' || this.cadena.charAt(i) == '/'){
                var indice = i
                var indiceb = i
                var bandera = true
                var banderab = true
                var pp = ''
                var sp = ''
                var qi,qf
                var multot = 0 

                //MIRAMOS LA PARTE DERECHA DE LA MULTIPLICACION
                while(bandera == true){
                    indice= indice + 1
                    if(this.cadena.charAt(indice) != '*' && this.cadena.charAt(indice) != 'f' && this.cadena.charAt(indice) != '/' && this.cadena.charAt(indice) != '+' && this.cadena.charAt(indice) != '-' && this.cadena.charAt(indice) != 'p' && this.cadena.charAt(indice) != 'r'){
                        pp= pp + this.cadena.charAt(indice)
                    }
                    else{
                        bandera=false
                        qf = indice -1
                    }
                }

                //MIRAMOS LA PARTE IZQUIERDA DE LA MULTIPLICACION
                while(banderab == true){
                    indiceb= indiceb - 1
                    if(this.cadena.charAt(indiceb) != '*' && this.cadena.charAt(indiceb) != 'i' && this.cadena.charAt(indiceb) != '/' && this.cadena.charAt(indiceb) != '+' && this.cadena.charAt(indiceb) != '-' && this.cadena.charAt(indice) != 'p' && this.cadena.charAt(indice) != 'r'){
                        sp= sp + this.cadena.charAt(indiceb)
                    }
                    else{
                        banderab=false
                        qi = indiceb -1
                        sp = calculadora.invertirCadena(sp)
                       
                    }
                }
                
                //GUARDAMOS EL RESULTADO Y QUITAMOS LA OPERACION
                if(this.cadena.charAt(i) == "*")
                {
                    multot = parseFloat(sp) * parseFloat(pp)
                }
                else{
                    multot = parseFloat(sp) / parseFloat(pp)
                }
                console.log(sp + " "+this.cadena.charAt(i)+" "+ pp + " = " +multot)
                console.log("")
                calculadora.QuitarTexto(qi,qf,multot)
                calculadora.verificarm()
        
            }
      }
    }


    sumacalculator(){
        //SUMA Y RESTA 
        for (var i=0;i<this.cadena.length-1;i++) { 

            //VERIFICAMOS SI ENCONTRAMOS UN + o -
            if(this.cadena.charAt(i) == '+' || this.cadena.charAt(i) == '-'){
                var indice = i
                var indiceb = i
                var bandera = true
                var banderab = true
                var pp = ''
                var sp = ''
                var qi,qf
                var multot = 0 

                //MIRAMOS LA PARTE DERECHA DE LA MULTIPLICACION
                while(bandera == true){
                    indice= indice + 1
                    if(this.cadena.charAt(indice) != '*' && this.cadena.charAt(indice) != 'f' && this.cadena.charAt(indice) != '/' && this.cadena.charAt(indice) != '+' && this.cadena.charAt(indice) != '-' && this.cadena.charAt(indice) != 'p' && this.cadena.charAt(indice) != 'r'){
                        pp= pp + this.cadena.charAt(indice)
                    }
                    else{
                        bandera=false
                        qf = indice -1
                    }
                }

                //MIRAMOS LA PARTE IZQUIERDA DE LA MULTIPLICACION
                while(banderab == true){
                    indiceb= indiceb - 1
                    if(this.cadena.charAt(indiceb) != '*' && this.cadena.charAt(indiceb) != 'i' && this.cadena.charAt(indiceb) != '/' && this.cadena.charAt(indiceb) != '+' && this.cadena.charAt(indiceb) != '-' && this.cadena.charAt(indice) != 'p' && this.cadena.charAt(indice) != 'r'){
                        sp= sp + this.cadena.charAt(indiceb)
                    }
                    else{
                        banderab=false
                        qi = indiceb -1
                        sp = calculadora.invertirCadena(sp)
                       
                    }
                }
                
                //GUARDAMOS EL RESULTADO Y QUITAMOS LA OPERACION
                if(this.cadena.charAt(i) == "+")
                {
                    multot = parseFloat(sp) + parseFloat(pp)
                }
                else{
                    multot = parseFloat(sp) - parseFloat(pp)
                }
                console.log(sp + " "+this.cadena.charAt(i)+" "+ pp + " = " +multot)
                console.log("")
                
                if(multot>0){
                    calculadora.QuitarTexto(qi,qf,multot)
                }else{
                    calculadora.QuitarTextoNegativo(qi,qf,multot)
                    i=0
                }
                
                calculadora.verificars()
            }
        }
    }



    //FUNCION PARA CALCULAR TODO
    calcular(){
        calculadora.potenciacalculator()
        calculadora.multiplicacioncalculator()
        calculadora.sumacalculator()
    }

    resultado(){
        console.log(this.cadena)
    }
}


//INICIO
//CREAMOS UNA NUEVA CALCULADORA
const calculadora = new Calculadora();

console.log("Ingrese una cadena: ")
var a='44-2r9+2p2+9/2*3+1';
console.log(a)
a = "i" +a+"f"

//VERIFICAMOS SI LA CANDENA ES MENOR O IGUAL A 20 CARACTERES
if(a.length < 21 ){
    calculadora.setCadena(a)
    calculadora.calcular()
    calculadora.resultadofinal()
}
else
{   
    console.log("Cadena mayor a 20 Caracteres ")
}






