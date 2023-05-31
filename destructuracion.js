//destructuracion
/*
const persona = {
        nombre : "Aron",
        apellido : "Cachago",
        edad : 19
    }

    let{nombre , apellido , edad} = persona; */

//objetos literales
    /*
    let nombre1 = "Aron",edad1 = 7;


    const perro = {
        nombre : nombre ,
        edad : edad,
        ladrar(){
            console.log("hola soy un perro");
        }
    }



    const persona2 = {
        nombre : "Aron",
        apellido : "Cachago",
        comunicar(){
            console.log("Me llamo " + nombre + " " + apellido)
        }
    }

    persona2.comunicar();
*/

//parametros rest
/*
function sumar (a , b , ...c ){
    let resultado =  a + b ;

    c.forEach(function(n){
        resultado += n;
    });

    return resultado;
}


console.log(sumar(1 , 2));
console.log(sumar(1 , 2 , 4));
console.log(sumar(1 , 2 , 4 , 7));*/

//bucles
/*
const arr1 = [1,2,3,4,5],
arr2 = [6,7,8,9];

const arr3 = [...arr1 , ...arr2];
console.log(arr3);

const aron = {
    nombre : "Aron",
    apellido: "Cachago",
    edad : 19
}


for(let dato in arr1 ){
    console.log("nombre: " + dato);
}


for(let dato in aron){
    console.log("Key: " + dato);
}

let cadena = "Hola mundo";

for(let caracter of cadena){
    console.log(caracter);
}
*/

//manejo de errores
/*
try {
    let numero = "Aron";

    if (isNaN(numero)) {
        throw new Error("El caracyer introucuodas nos es un numero");
    }
} catch (error) {
    console.log("El error es " + error);   
}finally{
    console.log("Todo a ido bien");
}*/
//funciones flecha
/*
const saludar = nombre => console.log("Hola " + nombre);
const sumar = (a , b ) => a + b ;
console.log(sumar(9 , 9)); 
saludar("Aron");

const Function = (hola) => {
    console.log("hola 1");
    console.log("hola 2");
    console.log("hola 2");
}*/

//ciclo for each
/*
const numeros = [1,2,3,4,5];

numeros.forEach((elemento , posicion , arreglo)=>{
    let ventasTotales = 0;
    arreglo.forEach((data)=> ventasTotales += data)
    console.log("El elemento " + elemento + " la posicion es " + posicion + " Ventas totales son " + ventasTotales );
})*/


//POO
/*const animal = {
    nombre : "bob",
    sonar(){
        console.log("Hago sonidos por que estpy vivo"); 
    }
}
const animal2 = {
    nombre : "Pequis",
    sonar(){
        console.log("Hago sonidos por que estpy vivo"); 
    }
}

console.log(animal , animal2);*/
/*function Animal(nombre , genero){
    //atributos
    this.nombre = nombre;
    this.genero = genero;
}*/
//Prototipos
/*
Animal.prototype.sonar = function(){
    console.log("hola me llamo " + this.nombre);
}

//Herencia Prototipica
function Perro(nombre , genero , tamanio){
    this.super = Animal;
    this.super(nombre , genero);
    this.tamanio = tamanio;
}

//Perro esta heredando de Animal 
Perro.prototype = new Animal();
Perro.prototype.constructor = Perro;


//sobrescritura de metodo del prototipo padre en el hijo

Perro.prototype.sonar = function(){
    console.log("soy un perro xd");
}

Perro.prototype.ladrar = function(){
    console.log("guauuu guauuu ");
}


const snoopy = new Perro("bob" , "Macho" , "Mediano")
, lolaBunny = new Animal("lola bunny " , "Hembra");


console.log(snoopy);
console.log(lolaBunny);

snoopy.sonar();*/

//Clases y Herencia
/*class Animal{
    constructor(nombre , genero){
        this.nombre = nombre;
        this.genero = genero;
    }

    sonar(){
        console.log("Hago sonidos por que estpy vivo");
    }

    saludar(){
        console.log("hola mi nombre es " + this.nombre);
    } 
}

class Perro extends Animal{
    constructor(nombre , genero  , tamanio){
        super(nombre , genero );
        this.tamanio = tamanio;
        this.raza = null;
    }

    sonar(){
        console.log("Soy el perro " + this.nombre );
    }

    ladrar(){
        console.log("Estoy ladrando xd");
    }
    queEres(){
        console.log("Soy un perro");
    }
    get getRaza(){
        return this.raza;
    }
    set setRaza(raza){
        this.raza = raza;
    }
}



const mimi = new Animal("Mimi" , "Hembra"),
scooby = new Perro("Scobby" , "Macho" , "Gigante");

console.log(mimi);
mimi.saludar();
console.log(scooby);
scooby.sonar();
scooby.saludar();
scooby.ladrar();
scooby.queEres();
scooby.setRaza = "Frances";
console.log(scooby.getRaza);
*/
let input = document.getElementById("pokemonId");
let btnBuscar = document.getElementById("btnBuscar");


btnBuscar.addEventListener("click", function(){
    let id = input.value;

    // Mostrar la animación de carga
    document.getElementById("loader").style.display = "block";
    document.getElementById("loader").style.position = "absolute";

    fetch('https://pokeapi.co/api/v2/pokemon/'+id)
    .then(response => response.json())
    .then(json => {
      const pokemonUrl = json.sprites.other["official-artwork"].front_default;
      const img = document.getElementById("pokemon");
      const nombre = document.getElementById("nombre");
      const habilidades = document.getElementById("poder");
      let poder = `<ul>`;
      
        
      for(let i = 0 ; i< json.abilities.length ; i++){
        poder += `<li>${json.abilities[i].ability.name}</li>`
      }
      poder += `</ul>`;
      habilidades.innerHTML = poder;
      img.src = pokemonUrl;
      img.alt = "Pikachu";
      nombre.innerHTML = json.name;
      // Verificar si la imagen se ha cargado completamente
      img.onload = function() {
        // Ocultar la animación de carga una vez que la imagen se haya cargado
        document.getElementById("loader").style.display = "none";
        document.getElementById("loader").style.position = "none";
      };
    })
})




