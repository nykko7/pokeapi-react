import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import Title from '../components/Title'
import './App.css'


class App extends Component {
  constructor(){
    super();
    this.state = {
      pokemonsArray: [],
      searchfield: ''
    }
  }

  async componentDidMount() {
    
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=150');
    const pokemons = await response.json();
    this.setState({ pokemonsArray: pokemons.results});
    console.log(this.state.pokemonsArray);
    
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  render() {
    const { pokemonsArray, searchfield } = this.state;
    const filteredPokemons = pokemonsArray.filter(pokemon =>
      pokemon.name.toLowerCase().includes(searchfield.toLowerCase())
    )
    
    let content;
    if(!filteredPokemons.length){
      content = <h2 
                  style={{
                    textAlign:'center',
                    color: 'white', 
                    fontSize: '40px'
                  }}
                >
                  Loading...
                </h2> 
    }else{
      content = <Scroll>
                  <CardList pokemons={filteredPokemons} />
                </Scroll>  
    }

    return (
      <>
        <Title/>
        <SearchBox searchChange={this.onSearchChange}/>
        {content}
      </>
    );
    
  }
}

export default App;


