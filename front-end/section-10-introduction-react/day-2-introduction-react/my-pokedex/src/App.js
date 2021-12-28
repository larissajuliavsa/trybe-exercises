
import './App.css';
import React from 'react';
import pokemons from './data';
import Pokedex from './Pokedex';

class App extends React.Component{
  render () {
    return (
      <>
        <h1>Pokedex</h1>
        <Pokedex pokemons={pokemons} />
      </>
    );
  }
}

export default App;
