import React from 'react'; 
import PropTypes from 'prop-types';
import './../styles/PokemonList.css';
import Pokemon from './Pokemon'; 

class PokemonList extends React.Component {
	render() {
		return (
			<ol className="Info">
		  		{this.props.PokemonInfo.map(character => {
					return (
						<Pokemon key={character.id} name={character.name} url={character.url} types={character.types}/>
					);
		  		})}
			</ol>	
	  	);
	}
}
  
 PokemonList.propTypes = {
 	PokemonInfo : PropTypes.array
 }; 
  
  export default PokemonList;