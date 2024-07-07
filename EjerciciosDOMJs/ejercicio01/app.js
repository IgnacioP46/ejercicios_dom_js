document.addEventListener('DOMContentLoaded', () => {
//1.1 Usa querySelector para mostrar por consola el botón con la clase .showme
    const button = document.querySelector('.showme');
    console.log(button);

//1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado
const h1 = document.querySelector('#pillado');
console.log(h1);



//1.3 Usa querySelector para mostrar por consola todos los p
const P = document.querySelectorAll('p');
console.log(P);

//1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon
const h4 = document.querySelectorAll('.pokemon');
console.log(h4);

//1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo data-function="testMe".
const testMe = document.querySelectorAll('[data-function="testMe"]');
console.log(testMe)




//1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo data-function="testMe".
const testMe3 =  document.querySelectorAll('[data-function="testMe"]')[3];
console.log(testMe3);

});