import React, { Component } from 'react'

export default class SearchBar extends Component {
    render() {
        return (
            <div>
                <input value={this.props.pokemonName} onChange={this.props.handleNameChange}/>
                <select onChange={this.props.handleTypeChange}>
                    {
                    this.props.pokemonType.map(type =>
                        <option onChange={this.handleTypeChange} key={type.toString()} value={type}>{type}</option>)
                    }
                </select>
                <input value={this.props.pokemonAttack} onChange={this.props.handleAttackChange}></input>
                <button className='search-button' onClick={this.props.handleClick}>SUBMIT</button>
            </div>
        )
    }
}
