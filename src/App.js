import React, { Component } from 'react';
import request from 'superagent';
import './App.css';


export default class App extends Component {
  state = {
    searchQuery: null,
  }

  handleChange = (e) => {
    const value = e.target.value;
    this.setState({ searchQuery: value });
    console.log(value);
  }

  handleClick = async () => {
    const query = this.state.searchQuery;
    const data = await request.get(query)
    console.log(data);
    
  }


  render() {
    return(
      <main>
        <input onChange={this.handleChange} name="searchQuery" />
      </main>
    )

  }
}