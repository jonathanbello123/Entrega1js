// Trabajo n1 de js
// Ejercicio 1
// Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.

// const Numeroparoimpar = (n) => {
//     if (n % 2 == 0)
//         console.log(n + " " + "es un numero par");
//     else console.log(n + " " + "es un numero impar")
// }

// Numeroparoimpar(2)
// Numeroparoimpar(3)

// Ejercicio 2
// Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales.
// const numeroMayorono = (a, b) => {
//     if (a > b) console.log(a + " es mayor que " + b);
//     else if (b > a) console.log(b + " es mayor que " + a)
//     else console.log("ambos numeros son iguales")
// }
// numeroMayorono(2, 5)
// numeroMayorono(5, 3)
// numeroMayorono(3, 3)


// Ejercicio 3
// Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.
// const multiplo5 = (a) => {
//     if (a % 5 == 0) console.log(a + "  es multiplo de 5")
//     else console.log(a + " no es multiplo de 5")
// }


// multiplo5(5)
// multiplo5(9)
// multiplo5(15)

// Ejercicio 4
// Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número.
// const imprimirNumero = (a) => {
//     for (let index = 0; index <= a; index++) {
//         console.log(index)

//     }
// }
// imprimirNumero(10)

// Ejercicio 5
// Crear una función que reciba una palabra y un número por parámetro e imprima por consola  esa palabra la cantidad correspondiente al número indicado.
// const nyp = (a, b) => {
//     for (let index = 1; index <= b; index++) {
//         console.log(a + b)
//     }
// }
// nyp("casa", 8)

// Ejercicio 6
// Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array.
// const equipos = ["boca", "river", "independiente", "racing", "velez"]
// const imprimirEquipos = (clubes) => {
//     for (let index = 0; index < equipos.length; index++) {
//         console.log(equipos[index])
//     }
// }
// imprimirEquipos(equipos)

// Ejercicio 7
// Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, menos el que se encuentre en la 5ta posición del mismo.
// Ayuda: Recuerden que el primer índice de un array es "0".

// const arraynumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const imprimirNumeros = (a) => {
//     for (let index = 0; index < arraynumeros.length; index++) {
//         if (index === 5) {
//             continue
//         }
//         console.log(arraynumeros[index])
//     }
// }

// imprimirNumeros(arraynumeros)


// Ejercicio 8
// Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada número del array multiplicado por el número pasado por parámetro.
// const arrayN = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const imprimirAyn = (a, b) => {
//     for (let index = 0; index < arrayN.length; index++) {
//         console.log(arrayN[index] * b)
//     }
// }

// imprimirAyn(arrayN, 3)