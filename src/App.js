import React, { Component } from 'react';
import request from 'superagent';
import './App.css';
import QuoteList from './QuoteList.js';

export default class App extends Component {

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
    console.log(this.state.pokemonName);
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
          <input value={this.state.pokemonName} onChange={this.handleNameChange}/>
          <select value={this.state.selectedPokemonType} onChange={this.handleTypeChange}>
            {
              this.state.pokemonType.map(type =>
                <option onChange={this.handleTypeChange} key={type.toString()} value={type}>{type}</option>)
            }
          </select>
          <input value={this.state.pokemonAttack} onChange={this.handleAttackChange}></input>
          <button className='search-button' onClick={this.handleClick}>SUBMIT</button>
          <QuoteList pokeList={this.state.pokemon} />
      </main>
    )

  }
}