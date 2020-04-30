import React, { Component } from 'react'

export default class QuoteList extends Component {
    render() {
        return (
            <div className='quotelist'>
                <ul>{this.props.pokeList.length && this.props.pokeList.map(pokemon => 
                    <li key={pokemon.id}>
                        <h1>{pokemon.pokemon}</h1>
                    </li>
                    )}
                    {console.log(this.props.pokeList)}
                </ul>
            </div>
        )
    }
}
