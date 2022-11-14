'use strict';

function localStorageInformation(data, parameter) {
  localStorage.setItem(parameter, JSON.stringify(data));
}