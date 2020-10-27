import React, {Component} from 'react';
import Card from './Card';
import './CardList.css'

class CardList extends Component {
  
  async searchPokemon(name) {    
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const pokemon = await response.json();
    return pokemon;
  }


  render() {
    console.log(this.props.pokemons)
    return (
      <div className="container">
        {
          this.props.pokemons.map((pokemon) => {
            console.log(pokemon.name);
            return (
            <Card key={pokemon.name} pokemon = { this.searchPokemon(pokemon.name)}
            />
            
            )  
          })
        }        
      </div>        
    );
  }
}



export default CardList;