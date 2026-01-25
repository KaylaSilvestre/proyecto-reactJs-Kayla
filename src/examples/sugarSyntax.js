//Spread operador
const numeros =[1,2,3]

//Sin sugar
const numerosConcat = numeros.concat([4,5,6])

const numeroSpread =[...numeros,4,5,6]

//Destructuring
const colores = ['rojo', 'verde', 'azul'] //Saco por orden

//Sin sugar
const primero = colores[1] //verde

const [primeroColor, segundo,Color] = colores

//Objeto sacar por nombre

const persona = {
    nombre:'Ana',
    curso:'React',
    edad:25
}

//Sin sugar
console.log(persona.nombre)

const {nombre, edad} = persona

//Operador ternario 

//Sin sugar
let mensaje; 

if (edad>= 18){
    mensaje= 'Sos mayor de edad '
} else {
    mensaje= 'Sos menor de edad'
}

 const mensajeSugar = edad>= 18 ? 'Sos mayor de edad' : 'Sos menor de edad'

 //Funciones

 function sumar (a,b) {
    return a+b
 }
 console.log(sumar(2.5))

 const sumarArrow = (a,b)=> {
    return a+b
 }

 const superArrow = (a,b)=> a+b







