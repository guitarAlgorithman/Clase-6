//Desafio impares
impares = (a, b) => {
    if (b >= a) {
        for (i = a; i <= b; i++) {
            if (i % 2 != 0) {
                console.log(i);
            }
        }
    }
    else {
        console.log("error");
    }
}

impares(2, 10);

//Desafio tablas de multiplicar
tabla = (n) => {
    for (i = 1; i <= 10; i++) {
        console.log(n + "*" + i + "=" + (n * i));
    }
}

tabla(5);
tabla(9);



//Ordenar arreglo
arreglo = [1, 2, 45, 5, 6, 3, 1, 8]

//Metodo con ciclos normales
ordenar = (arreglo) => {

    for (i = 0; i < arreglo.length; i++) {
        for (j = i; j < arreglo.length; j++) {
            if (arreglo[i] > arreglo[j]) {
                let aux = arreglo[j];
                arreglo[j] = arreglo[i];
                arreglo[i] = aux;
            }
        }
    }

    return arreglo;
}

console.log(ordenar(arreglo));


//Recursivo
var arreglo = [100,5,5,8,3,7,8];
n=arreglo.length;
recursivo=(arreglo, n)=>{
  
    //Un contador
    let k = 0;
      
    // si llegamos al ultimo elemento se acava
    if (n == 1){
        return;
    }
  
    //comparamos un elemento con el siguiente y asi sucesivamentede a pares
    for (var i = 0; i < n - 1; i++)
        if (arreglo[i] > arreglo[i + 1])
        {
          
            let aux = arreglo[i];
            arreglo[i] = arreglo[i + 1];
            arreglo[i + 1] = aux;
            k++;
        }
  
    //Si no hubo alguna cambio... 
    if (k == 0){
        return;
    }
        
  
    //va al siguiente, avanzo al anterior... dado que es recursivo es hacia atras...

    recursivo(arreglo, n - 1);
}
recursivo(arreglo,arreglo.length);
console.log(arreglo);

//mas alla

fizzbuzz=()=>{
    for(i=1;i<=100;i++){
        if(i%3==0 && i%5==0){

            console.log("FizzBuzz");
        }
        else if(i%3==0){
            console.log("Fizz");
        }
        else if(i%5==0){
            console.log("Buzz");
        }
        else{
            console.log(i);
        }
    }

}

fizzbuzz();