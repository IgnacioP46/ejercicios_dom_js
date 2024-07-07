//1.1 Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los paises.
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
const ul = document.createElement("ul");
for (const countrie of countries) {
    const li = document.createElement("li");
    li.innerText = countrie;
    ul.appendChild(li);
}
document.body.appendChild(ul);
//1.2 Elimina el elemento que tenga la clase .fn-remove-me.
const eliminados = document.querySelectorAll('.fn-remove-me');
        eliminados.forEach(element => element.remove());

//1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
const divCars = document.querySelector('div[data-function="printHere"]');
const ul2 = document.createElement('ul');
for (const car of cars){
  const li = document.createElement('li');
  li.textContent = car;
  ul2.appendChild(li);
};
divCars.appendChild(ul2);

//1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento h4 para el titulo y otro elemento img para la imagen.
const imagenes = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];
for (const imagen of imagenes) {
    const divImg = document.createElement("div");
    const h4 = document.createElement("h4");
    h4.textContent = imagen.title;
    const img = document.createElement("img");
    img.src = imagen.imgUrl;
    divImg.appendChild(h4);
    divImg.appendChild(img);

    document.body.appendChild(divImg);
}

//1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último elemento de la serie de divs.
const Button = document.createElement('button');
Button.textContent = 'Eliminar último div';
Button.addEventListener('click', () => {
  const allDivs = document.querySelectorAll('body > div');
  if (allDivs.length > 0) {
    const lastDiv = allDivs[allDivs.length - 1];
    lastDiv.remove();
  }
});
document.body.appendChild(Button);

//1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los divs que elimine ese mismo elemento del html.

for (const imagen of imagenes) {
    const divImg = document.createElement("div");
    const h4 = document.createElement("h4");
    h4.textContent = imagen.title;
    const img = document.createElement("img");
    img.src = imagen.imgUrl;
    const delButton = document.createElement("button");
    delButton.textContent = "borrar";
    delButton.addEventListener("click", () => {
        divImg.remove();
    })
    divImg.appendChild(h4);
    divImg.appendChild(img);
    divImg.appendChild(delButton);

    document.body.appendChild(divImg);
}