import React, { Component } from 'react';
import PokemonInfo from './PokemonInfo'; 
import PokemonList from './components/PokemonList'; 
import './App.css';

class App extends Component {
	constructor(props) {
	  super(props);
	  this.state = {
		  PokemonInfo : PokemonInfo 
	  } 
	}
 
	render() {
		return (
		  <div className="app">
			<PokemonList PokemonInfo={this.state.PokemonInfo} />
		  </div>
		);
	  }
	}

	
	

export default App;
