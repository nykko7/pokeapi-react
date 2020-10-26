import React, { Component } from 'react';
import './Card.css'

class Card extends Component {
  constructor(){
    super();
    this.state = {}
  }

  async componentDidMount(){
    const pokemon = await this.props.pokemon;
    

    let types = pokemon.types.map(type => type.type.name);
    
    this.setState({
      name: pokemon.name[0].toUpperCase() + pokemon.name.slice(1),
      number: '#' + pokemon.id.toString().padStart(3, '0'),
      types: types[1] ? types[0] + ', ' + types[1] : types[0],
      weight: pokemon.weight/10,
      image: `https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`
    })
  }

  render() {
    const pokemon = this.state;
    console.log(pokemon.name);
    return (      
      <div className="card">
        <div className="card-image">    
          <img src={pokemon.image} alt={pokemon.name}/>
        </div>
        <div className="card-body">
          <p className="card-number">{pokemon.number}</p>	
          <h5 className="card-name">{pokemon.name}</h5>
          <p className="card-type"><strong>Type(s): </strong>{pokemon.types}</p>
          <p className="card-weight"><strong>Weight: </strong>{pokemon.weight} kg.</p>
        </div>
      </div>      
    );
  }
}
export default Card;
