import React from 'react'; 
import './../styles/Pokemon.css';
import PropTypes from 'prop-types';


class Pokemon extends React.Component { 	
	render() {
	  return (
		  <React.Fragment>
			  <li className="InfoCharacter"> 
			  	  <div className="InfoImg">
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