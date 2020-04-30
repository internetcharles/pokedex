import React, { Component } from 'react'

export default class QuoteList extends Component {
    render() {
        return (
            <div className='quotelist'>
                <ul>{this.props.pokeList.length && this.props.pokeList.map(pokemon => 
                    <li key={pokemon.id}>
                        <h1>{pokemon.pokemon}</h1>
                        <img src={pokemon.url_image} alt={pokemon.pokemon}/>
                        <p>Ability: {pokemon.ability_1}</p>
                            <p>Secondary Ability: {pokemon.ability_2}</p>
                            <p>HP: {pokemon.hp}</p>
                            <p>Attack: {pokemon.attack}</p>
                            <p>Defense: {pokemon.defense}</p>
                            <p>Special Attack: {pokemon.special_attack}</p>
                            <p>Special Defense: {pokemon.special_defense}</p>
                            <p>Speed: {pokemon.speed}</p>
                    </li>
                    )}
                    {console.log(this.props.pokeList)}
                </ul>
            </div>
        )
    }
}
