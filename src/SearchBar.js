import React, { Component } from 'react'
import './SearchBar.css'

export default class SearchBar extends Component {
    render() {
        return (
            <div className='search-bar'>
                <p>
                    NAME:
                    <input value={this.props.pokemonName} onChange={this.props.handleNameChange}/>
                </p>
                <p>
                    TYPE:
                    <select onChange={this.props.handleTypeChange}>
                        {
                        this.props.pokemoneType.map(type =>
                            <option onChange={this.handleTypeChange} key={type.toString()} value={type}>{type}</option>)
                        }
                    </select>
                </p>
                <p>
                    MINIMUM ATTACK:
                    <input value={this.props.pokemonAttack} onChange={this.props.handleAttackChange}></input>
                </p>
                <button className='search-button' onClick={this.props.handleClick}>SUBMIT</button>
                <button onClick={this.props.handlePageClick} value='next'>Next Page</button>
                <button onClick={this.props.handlePageClick} value='prev'>Previous Page</button>
            </div>
        )
    }
}
