import React, { Component } from 'react'; 

class PokemonList extends React.Component {
	render() {
	  return (
		<ul className="Info">
		  {this.props.PokemonInfo.map(character => {
			return (
			  <li className="InfoCharacter"> 
			  	  <div className="InfoImg"> <img src={character.url}></img>  </div>
				  <div className="InfoName"> {character.name} </div>
				  <div className="Infotypes"> {character.types} </div>
			  </li> 
			);
		  })}
		</ul>	
	  );
	}
	}
  
//  PokemonList.propTypes = {
//  	PokemonInfo : PropTypes.array
//  }; 
  
  export default PokemonList;