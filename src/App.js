import React, { Component } from 'react';
import PokemonInfo from './PokemonInfo'; 
import PokemonList from './components/PokemonList'; 
import './App.css';

class App extends Component {
	constructor(props) {
	  super(props);
	  this.state = {
		  PokemonInfo : PokemonInfo, 
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


	// 4. Meter primero el nombre y luego la imagen (por la gente que 
	// no puede ver) y luego por estilos subimos la imagen.

	// 5. cuando queremos que el apartado evolution no pinte el div 
	// si este es nullo, hayq qeu poner lo siguinte (se le llama
	// cortocircuito)
	// {props.evolution && <di 
	// className="card-evolution"> {propr.evolution}</di>}
	

export default App;
