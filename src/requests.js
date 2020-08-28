import * as axios from 'axios';

let instance = axios.create({
  baseURL: 'https://swapi.dev/api/',
});

export const getMoviesInfo = {};

let charArr = [];
window.charArr = charArr;

export const getPlanets = (page = 2, wookiee) => {
  return instance
    .get(`planets/?page=${page}${wookiee ? '&format=wookiee' : ''}`)
    .then((response) => response.data);
};

const getList = (num = 4) => {
  return instance.get(`films/${num}/`).then((response) => response.data.characters);
};

const getCharactersInfo = (charLink) => {
  return axios.get(`${charLink}`).then((response) => response.data);
};

export const getCharacters = async (num) => {
  let temp = await getList(num);
  let result = Promise.all(temp.map((link) => getCharactersInfo(link)));
  return result;
};

//https://swapi.dev/api/planets/?page=1&format=wookiee
