import React, { useState } from 'react';
import Search from './components/Search';
import Preloader from './components/Preloader';
import Planets from './components/Planets';
import Movies from './components/Movies';
import { ListGroup } from 'react-bootstrap';

import { getPlanets, getCharacters } from './requests.js';

function HomeWork12() {
  const [isFetching, setIsFetching] = useState(false);

  const [planetsPageActive, setPlanetsPageActive] = useState(false);
  const [moviesPageActive, setMoviesPageActive] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [currentMovie, setCurrentMovie] = useState(1);

  const [planets, setPlanets] = useState([]);
  const [characters, setCharacters] = useState([]);
  //const [wookiee, setWookiee] = useState(true);

  const requestPlanets = async (page) => {
    setCurrentPage(page);
    if (page > 6) {
      setCurrentPage(6);
      return;
    } else if (page < 1) {
      setCurrentPage(1);
      return;
    }
    setIsFetching(true);
    setMoviesPageActive(false);
    await getPlanets(page).then((data) => {
      setPlanets(data.results);
    });
    setIsFetching(false);
    setPlanetsPageActive(true);
  };

  const requestCharacters = async (movie) => {
    setIsFetching(true);
    setPlanetsPageActive(false);

    await getCharacters(movie).then((data) => {
      setCharacters(data);
    });

    setMoviesPageActive(true);
    setIsFetching(false);
  };

  let planetsToShow = planets.map((el) => <ListGroup.Item>{el.name}</ListGroup.Item>);
  let charactersToShow = characters.map((el, i) => (
    <tr>
      <td>{i + 1}</td>
      <td>{el.name}</td>
      <td>{el.birth_year}</td>
      <td>{el.gender}</td>
    </tr>
  ));

  window.characters = characters;
  window.planets = planets;
  window.charactersToShow = charactersToShow;
  window.planetsToShow = planetsToShow;

  return (
    <div>
      <Search
        charactersClickHandler={requestCharacters}
        planetsClickHandler={requestPlanets}
        currentMovie={currentMovie}
        setCurrentMovie={setCurrentMovie}
      />
      {isFetching ? <Preloader /> : ''}
      {moviesPageActive ? (
        <Movies
          //title={`Planets on page ${currentPage}`}
          text={charactersToShow}
          //page={currentPage}
          //clickHandler={requestPlanets}
        />
      ) : (
        ''
      )}
      {planetsPageActive ? (
        <Planets
          title={`Planets on page ${currentPage}`}
          text={planetsToShow}
          page={currentPage}
          clickHandler={requestPlanets}
        />
      ) : (
        ''
      )}
    </div>
  );
}

export default HomeWork12;
