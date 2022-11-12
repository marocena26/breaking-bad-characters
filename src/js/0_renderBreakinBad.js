'use strict';

//--------------------CONSTANTES--------------------//

const charactersList = document.querySelector('.js__characters');
const favouritesList = document.querySelector('.js__favourites');
const searchInput = document.querySelector('.js__search_input');
const searchBtn = document.querySelector('.js__search_btn');

//--------------------VARIABLES--------------------//

let myCharactersList = []; //Array vacío. Necesitamos una variable (let) que guarde los datos que vamos a traernos de la API de BB.

let myFavouritesList = []; //Array vacío. Necesitamos una variable (let) que guarde solo los datos en los que hayamos hecho click y que estén marcados como favoritos.

//--------------------FUNCIONES--------------------//

//Función para pintar cada UNO de los elementos: cada personaje con su correspondiente foto, nombre y estado.

function renderCharacter(character) { //el parámetro 'character' obtiene la información de renderCharacter(myCharactersList[i]). Le pido que recorra el índice de cada uno de los elementos del array que estaba vacío y que llenamos con la información que nos da el servidor.

  let liElement = //Variable vacía dónde voy a ir añadiendo todo lo que me devuelve la función.

    `<li>
    <article class="js__characters_article" id="${character.char_id}"> 
        <img src="${character.img}" alt="" class="characters__ul--img">
        <h3 class="characters__ul--name">${character.name}</h3>
        <p class="characters__ul--status">${character.status}</p>
    </article>
    </li>`;

  return liElement;
}

//Función para que pinte todos los elementos del array.
function renderCharactersList () {
  let liElement = '';

  for (let i = 0; i < myCharactersList.length; i++) { ///i representa cada elemento del array, en este caso cada personaje con su información correspondiente.
    liElement += renderCharacter(myCharactersList[i]);
  }

  charactersList.innerHTML = liElement; //Todo lo acumulado en la variable se pinta en mi array vacío de personajes.
  selectFavouriteCharacters(); //Asigna el evento después de creear todos los elementos. 

}

//Función para asignar un evento a todos los elementos de mi página.
function selectFavouriteCharacters() {
  const charactersArticle = document.querySelectorAll('.js__characters_article'); //Utilizamos querySelectorAll para coger todos los <article> de mi <ul>. Generamos un array de elementos.

  for (const eachCharactersArticle of charactersArticle) { //Tenemos que hacer un bucle for para poder ponerle el evento a cada artículo, ya que no es posible ponerselo directamente a un array.
    eachCharactersArticle.addEventListener('click', handleClickFavourites); //Escuchará el evento cuando haga click sobre un personaje.
  }
}


//---------------------EVENTOS---------------------//

function handleClickFavourites(event) {
  console.log('¡Has hecho cliiiick');
  event.currentTarget.classList.toggle('selected');
  console.log( event.currentTarget.id);
  myCharactersList.find((eachCharacter) => eachCharacter.id === event.currentTarget.id); //find va a ir a cada objeto del array, me devolverá el primero que encuentre con ese id (el que tenga el objeto que he clicado)

 


}

//----CÓDIGO QUE SE EJECUTA AL CARGAR LA PÁGINA----//

renderCharactersList();

fetch('https://breakingbadapi.com/api/characters')
  .then((response) => response.json())
  .then((jsonData) => {
    myCharactersList = jsonData; //Guardo la informacion que me da el JSON en mi variable global, en este array vacío se guardarán todos los elementos que he seleccionado de la API(foto, nombre y estado).
    renderCharactersList();//los mando pintar.
  });
