import React, { Component } from 'react';
import './Card.css'

class Card extends Component {
  constructor(props){
    super(props);
    this.state = {}
    
  }


  async componentDidMount(){  
    this.getPokemon();
  }

  async getPokemon(){
    const pokemon = await this.props.pokemon;
    console.log(pokemon.name);
    let types = pokemon.types.map(type => type.type.name);
    
    this.setState({
      name: pokemon.name[0].toUpperCase() + pokemon.name.slice(1),
      number: '#' + pokemon.id.toString().padStart(3, '0'),
      types: types[1] ? types[0] + ', ' + types[1] : types[0],
      typeColor: types[0],
      weight: pokemon.weight/10,
      image: `https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`
    }) 
  }

  render() {
    const colors = {
      fire: '#FDDFDF',
      grass: '#DEFDE0',
      electric: '#FCF7DE',
      water: '#DEF3FD',
      ground: '#f4e7da',
      rock: '#d5d5d4',
      fairy: '#fceaff',
      poison: '#98d7a5',
      bug: '#f8d5a3',
      dragon: '#97b3e6',
      psychic: '#eaeda1',
      flying: '#F5F5F5',
      fighting: '#E6E0D4',
      normal: '#F5F5F5'
    };

    let {typeColor, image, name, number, types, weight} = this.state;
    console.log(name);
    return (      
      <div className="card" style={{backgroundColor: colors[typeColor]}}>
        <div className="card-image">    
          <img src={image} alt={name}/>
        </div>
        <div className="card-body">
          <p className="card-number">{number}</p>	
          <h5 className="card-name">{name}</h5>
          <p className="card-type"><strong>Type(s): </strong>{types}</p>
          <p className="card-weight"><strong>Weight: </strong>{weight} kg.</p>
        </div>
      </div>      
    );
  }
}
export default Card;
