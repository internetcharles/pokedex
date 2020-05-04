import React, { Component } from 'react';
import request from 'superagent';
import './App.css';
import QuoteList from './QuoteList.js';
import SearchBar from './SearchBar.js';
const pokemonType = ['', 'normal', 'fire', 'water', 'electric', 'grass', 'ice', 'fighting', 'poison', 'ground', 'flying', 'psychic', 'bug', 'rock', 'ghost', 'dragon', 'dark', 'steel', 'fairy'];


export default class SearchPage extends Component {

  state = {
    pokemonName: '',
    selectedPokemonType: '',
    pokemonAttack: 1,
    pokemon: [],
    page: 1,
    body: [],
    searchQuery: '',
    link: 'https://alchemy-pokedex.herokuapp.com/api/pokedex',
  }

  componentDidMount = async () => {
    // grabs content in URL
    const searchParams = new URLSearchParams(window.location.search);
    const query = searchParams.get('pokemon');
    this.setState ({searchQuery: query});
    if (query) {
      let page = 1;
      if (searchParams.get('page')){
        page = searchParams.get('page');
      }
      const fetchedData = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${query}&page=${page}`);
      this.setState ({ body: fetchedData.body, pokemon: fetchedData.body.results });
    }
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

  handlePageChange = (event) => {
    let currentPage = this.state.page;
    if (event.target.value === 'next') {
      currentPage++;
    } else {
      currentPage--;
    }
    this.setState({
      page: currentPage
    })
  }


  handleClick = async (page) => {
    let link = 'https://alchemy-pokedex.herokuapp.com/api/pokedex?' 
    const currentPage = '&page=' + page;
    const searchedPokemon = '&pokemon=' + this.state.pokemonName;
    const minAttack = '&attack=' + this.state.pokemonAttack;
    let wantedType;

    if(this.state.selectedPokemonType !== '') {
      wantedType='&type=' + this.state.selectedPokemonType
    } else {
        wantedType = '';
    // const fetchedData = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${selectedName}&attack=${attackValue}&page=${this.state.page}`)
    // this.setState ({ pokemon: fetchedData.body.results });
    }
    link = `${link}${currentPage}${searchedPokemon}${minAttack}${wantedType}`
    const fetchedData = await request.get(`${link}`)
    this.setState({body: fetchedData.body, pokemon: fetchedData.body.results, link: link })
  }

  handlePageClick = (e) => {
    const currentPage = this.state.page;
    if(e.target.value === 'next' && currentPage < Math.ceil(this.state.body.count / this.state.body.perPage)) {
      this.setState(prevState => ({ page: prevState.page + 1 }))
      this.handleClick(this.state.page + 1);
    }
    if(e.target.value === 'prev' && currentPage > 1) {
      this.setState(prevState => ({ page: prevState.page - 1 }))
      this.handleClick((this.state.page - 1));
    }
  }


  render() {
    return(
      <main>
          <SearchBar handlePageClick={this.handlePageClick} handleClick={this.handleClick} handleOrderChange={this.handleOrderChange} handleTypeChange={this.handleTypeChange} handleNameChange={this.handleNameChange} handleAttackChange={this.handleAttackChange} pokemonType={this.state.pokemonType} pokemonName={this.state.pokemonName} pokemonAttack={this.state.pokemonAttack} pokemoneType={pokemonType}/>
          <QuoteList pokeList={this.state.pokemon} />
      </main>
    )

  }
}