//2.1 Inserta dinamicamente en un html un div vacio con javascript.
const div = document.createElement("div");
document.body.appendChild(div)


//2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
const divP = document.createElement("div");
const pDiv = document.createElement("p")
div.appendChild(pDiv)
document.body.appendChild(divP)


//2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.
const div6 = document.createElement("div");
for(let i = 0; i < 6; i++){
    const pDiv6 = document.createElement("p");
    div6.appendChild(pDiv6);
}
document.body.appendChild(div6);


//2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.
const divDin = document.createElement("div");
 divDin.innerHTML = `<p> Soy dinámico! </p>`;
 document.body.appendChild(divDin)


 //2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
const h2 = document.querySelector(".fn-insert-here");
h2.textContent = 'Wubba Lubba dub dub';


//2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const ul = document.createElement("ul");
for (const app of apps) {
    const li = document.createElement("li");
    li.innerText = app;
    ul.appendChild(li);
}
document.body.appendChild(ul);


//2.7 Elimina todos los nodos que tengan la clase .fn-remove-me
const eliminados = document.querySelectorAll('.fn-remove-me');
        eliminados.forEach(element => element.remove());

//2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. Recuerda que no solo puedes insertar elementos con .appendChild.
const divs = document.querySelectorAll('div');
const pEnMedio = document.createElement('p');
pEnMedio.textContent = 'Voy en medio!';
divs[0].parentNode.insertBefore(pEnMedio, divs[1]);


//2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here
const fnInsertHere = document.querySelectorAll('.fn-insert-here');
fnInsertHere.forEach(div => {
    div.insertAdjacentHTML('beforeend', '<p>Voy dentro!</p>');
});