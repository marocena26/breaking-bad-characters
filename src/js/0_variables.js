'use strict';

//--------------------CONSTANTES--------------------//

const charactersList = document.querySelector('.js__characters');
const favouritesList = document.querySelector('.js__favourites');
const searchInput = document.querySelector('.js__search_input');
const sectionFavourites = document.querySelector('.js__favourites_section');
const searchBtn = document.querySelector('.js__search_btn');
const resetBtn = document.querySelector('.js__reset_btn');

//--------------------VARIABLES--------------------//

let myCharactersList = [];

let myFavouritesList = [];

let favouritesListLS = JSON.parse(localStorage.getItem('myFavouritesList'));

let filteredCharacters = [];



