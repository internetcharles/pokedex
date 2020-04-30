import React, { Component } from 'react';
import request from 'superagent';
import './App.css';
import QuoteList from './QuoteList.js';

export default class App extends Component {

  state = {
    searchQuery: null,
    pokemonName: '',
    pokemonType: '',
    pokemonAttack: '',
    pokemon: []
  }

// checks if input data has been change and updates value
  handleChange = (e) => {
    const value = e.target.value;
    this.setState({ searchQuery: value });
  }

  handleClick = async () => {
    const fetchedData = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.state.searchQuery}`)
    this.setState ({ pokemon: fetchedData.body.results });
    console.log(fetchedData);
    console.log(fetchedData.body);
    
  }


  render() {
    return(
      <main>
        <input onChange={this.handleChange} name="searchQuery" />
        <button onClick={this.handleClick}/>
        <h1>{this.pokemonName}</h1>
        <QuoteList pokeList={this.state.pokemon} />
      </main>
    )

  }
}