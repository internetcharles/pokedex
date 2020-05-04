import React, { Component } from 'react';
import request from 'superagent';
import './App.css';
import QuoteList from './QuoteList.js';
import SearchBar from './SearchBar.js';

export default class SearchPage extends Component {

  state = {
    displayOrder: 'asc',
    pokemonName: '',
    pokemonType: ['', 'normal', 'fire', 'water', 'electric', 'grass', 'ice', 'fighting', 'poison', 'ground', 'flying', 'psychic', 'bug', 'rock', 'ghost', 'dragon', 'dark', 'steel', 'fairy'],
    selectedPokemonType: '',
    pokemonAttack: 1,
    pokemon: [],

  }

// checks if input data has been change and updates value
  handleNameChange = (e) => {
    this.setState({ 
      pokemonName: e.target.value 
    });
  }

  handleTypeChange = (e) => {
    this.setState({
      selectedPokemonType: e.target.value
    })
  }

  handleAttackChange = (e) => {
    this.setState({
        pokemonAttack: e.target.value
    })
  }


  handleClick = async () => {
    const attackValue = this.state.pokemonAttack;
    const selectedName = this.state.pokemonName;
    let selectedType = this.state.selectedPokemonType;
    if(this.state.selectedPokemonType !== '') {
      const fetchedData = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${selectedName}&type=${selectedType}&attack=${attackValue}`)
      this.setState ({ pokemon: fetchedData.body.results });
    }
      else{
    const fetchedData = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${selectedName}&attack=${attackValue}`)
    this.setState ({ pokemon: fetchedData.body.results });
    }

  }


  render() {
    return(
      <main>
          <SearchBar handlePageClick={this.handlePageClick} handleClick={this.handleClick} handleOrderChange={this.handleOrderChange} handleTypeChange={this.handleTypeChange} handleNameChange={this.handleNameChange} handleAttackChange={this.handleAttackChange} pokemonType={this.state.pokemonType} pokemonName={this.state.pokemonName} pokemonAttack={this.state.pokemonAttack} displayOrder={this.state.displayOrder}/>
          <QuoteList pokeList={this.state.pokemon} />
      </main>
    )

  }
}