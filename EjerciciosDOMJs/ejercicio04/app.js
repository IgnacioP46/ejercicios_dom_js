//1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el evento click que ejecute un console log con la información del evento del click
const button = document.getElementById('btnToClick');
button.addEventListener('click', (event) => {
  console.log('Button clicked', event);
});

const clickInput = document.querySelector('.click');
      clickInput.addEventListener('click', (event) => {
    console.log('Input clicked:', event.target.value);
  });

//1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.
const focusInput = document.querySelector('.focus');
  focusInput.addEventListener('focus', (event) => {
    console.log('Input focused:', event.target.value);
  });

//1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.
const valueInput = document.querySelector('.value');
valueInput.addEventListener('input', (event) => {
  console.log('Input value:', event.target.value);
});


//Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los albums.

const albums = [
  "De Mysteriis Dom Sathanas",
  "Reign of Blood",
  "Ride the Lightning",
  "Painkiller",
  "Iron Fist",
];

const ul = document.createElement("ul");
for (const album of albums) {
    const li = document.createElement("li");
    li.innerText = album;
    ul.appendChild(li);
}
document.body.appendChild(ul);