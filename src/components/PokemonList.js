import React from 'react'; 
import PropTypes from 'prop-types';

class PokemonList extends React.Component {
	render() {
	  return (
		<ol className="Info">
		  {this.props.PokemonInfo.map(character => {
			return (
			  <li className="InfoCharacter" key={character.id}> 
			  	  <div className="InfoImg"> <img alt={character.name} src={character.url}></img>  </div>
				  <div className="InfoName"> {character.name} </div>
				  <div className="Infotypes"> {character.types} </div>
			  </li> 
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