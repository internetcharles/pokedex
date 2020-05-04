import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class QuoteList extends Component {
    render() {
        return (
            <div className='quotelist'>
                <ul>{this.props.pokeList.map(pokemon => 
                    <li key={pokemon.id} className='list-item'>
                        <Link to={`/pokemon/${pokemon._id}`}>
                            <h2>{pokemon.pokemon}</h2>
                        </Link>
                        <img src={pokemon.url_image} alt={pokemon.pokemon}/>
                        <p>Type: {pokemon.type_1}/{pokemon.type_2}</p>
                        {/* <p>Ability: {pokemon.ability_1}</p>
                        <p>Secondary Ability: {pokemon.ability_2}</p>
                        <p>Hidden Ability: {pokemon.ability_hidden}</p>
                        <p>HP: {pokemon.hp}</p>
                        <p>Attack: {pokemon.attack}</p>
                        <p>Defense: {pokemon.defense}</p>
                        <p>Special Attack: {pokemon.special_attack}</p>
                        <p>Special Defense: {pokemon.special_defense}</p>
                        <p>Speed: {pokemon.speed}</p> */}
                    </li>
                    )}
                </ul>
            </div>
        )
    }
}
