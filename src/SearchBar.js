import React, { Component } from 'react'

export default class SearchBar extends Component {
    render() {
        return (
            <div>
                NAME:
                <input value={this.props.pokemonName} onChange={this.props.handleNameChange}/>
                TYPE:
                <select onChange={this.props.handleTypeChange}>
                    {
                    this.props.pokemonType.map(type =>
                        <option onChange={this.handleTypeChange} key={type.toString()} value={type}>{type}</option>)
                    }
                </select>
                MINIMUM ATTACK:
                <input value={this.props.pokemonAttack} onChange={this.props.handleAttackChange}></input>
                <button className='search-button' onClick={this.props.handleClick}>SUBMIT</button>
                <button onClick={this.props.handlePageClick} value='next'>Next Page</button>
                <button onClick={this.props.handlePageClick} value='prev'>Previous Page</button>
            </div>
        )
    }
}
