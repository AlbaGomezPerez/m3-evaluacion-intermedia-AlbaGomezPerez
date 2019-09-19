import React from 'react'; 
import './../styles/Pokemon.css';
import PropTypes from 'prop-types';
import { createSecureContext } from 'tls';

// la clase fav (con el background de otro color) tiene que salir en los Lis 

class Pokemon extends React.Component { 
	constructor(props){
		super(props); 
		this.state = {
			favourite:'fav', 
		}; 
		
		this.handleClick=this.handleClick.bind(this);
	}
	
	handleClick(){
		this.setState((prevState, props) => ({
			handleClick: prevState.handleClick === 'fav' ? 'InfoImg' : 'fav'
		}));  
	}	

	render() {
	  return (
		  <React.Fragment>
			  <li className="InfoCharacter"> 
			  	  <div className={`InfoImg ${this.state.handleClick}`} onClick={this.handleClick}>
						<img alt={this.props.name} src={this.props.url}></img> 
				  </div>
				  <div className="InfoName"> {this.props.name} </div>
				  <div className="Infotypes"> {this.props.types} </div>
			  </li> 
		  </React.Fragment>
	  );
	}
	}

	Pokemon.propTypes = {
		name : PropTypes.string,
		url : PropTypes.string,
		types : PropTypes.array
	}; 
  
export default Pokemon; 