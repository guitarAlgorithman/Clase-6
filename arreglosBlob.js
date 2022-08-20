//1
tabla = (n) => {
    for (i = 1; i <= 10; i++) {
        console.log(n + "*" + i + "=" + (n * i));
    }
}

tabla(2);

//2


mayusculaNombre = (arreglo) => {
    arreglos = [];
    arreglo.forEach(element => {
        arreglos.push(element.toUpperCase());
    });
    return arreglos;
}
const nombres = ['alberto', 'paty', 'Jose', 'daniel', 'luis', 'antonio', 'Luis', 'paty', 'luis'];

console.log(mayusculaNombre(nombres));


const nombres2 = ['jendelin', 'weiscely', 'luciano', 'miguel'];
console.log(mayusculaNombre(nombres2));

//3
nombresMayusculas = mayusculaNombre(nombres);
minusculaNombre = (arreglo) => {
    arreglo.map((e, i) => {

        arreglo[i] = e.toLowerCase();
    })
    return arreglo;
}
let nombreMinusculas = minusculaNombre(nombresMayusculas);
console.log(nombreMinusculas);


//4
filtrados = nombreMinusculas.filter(e => e === 'luis' );

console.log(filtrados);


//5

const numeros = [2,4,6,8,10]
sumar = (numeros) =>{
    
    let acum = numeros.reduce( (acum,i) => {
        return acum+i
    })
    return acum;
}
console.log(sumar(numeros));