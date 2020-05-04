import React, { Component } from 'react'
import request from 'superagent';

export default class PokemonDetail extends Component {
    state = {
        pokemon: null
    }

    componentDidMount = async () => {
        const pokemonId = this.props.match.params.id
        const fetchedData = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex/${pokemonId}`)
        this.setState({
            pokemon: fetchedData.body
        })

    }

    render() {
        return this.state.pokemon ?
            <div>
                <div>{this.state.pokemon.pokemon}</div>
                <img src ={this.state.pokemon.url_image} alt={this.state.pokemon.pokemon} />
                <p>TYPE: {this.state.pokemon.type_1}</p>
                <p>{(this.state.pokemon.type_2 === 'NA')
                ? null
                : 'SECONDARY TYPE: ' + this.state.pokemon.type_2}</p>
                <p>Ability: {this.state.pokemon.ability_1}</p>
                <p>Hidden Ability: {this.state.pokemon.ability_2}</p>
                <p>HP: {this.state.pokemon.hp}</p>
                <p>Speed: {this.state.pokemon.speed}</p>
                <p>Attack: {this.state.pokemon.attack}</p>
                <p>Special Attack: {this.state.pokemon.special_attack}</p>
                <p>Defense: {this.state.pokemon.defense}</p>
                <p>Special Defense: {this.state.pokemon.special_defense}</p>
            </div>
            :
            <p>LOADING . . .</p>
    }
}
