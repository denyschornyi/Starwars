import React, { Component } from 'react';

import Header from '../Header';
import ItemList from '../ItemList';
import PersonDetails from '../PersonDetails';
import RandomPlanet from '../RandomPlanet';

import './App.css';
import SwapiService from '../../service/SwapiService';

class App extends Component{

  swapiService = new SwapiService();

  state = {
    selectedPerson: null
  }

  onPersonSelected = (id) => {
    this.setState({
      selectedPerson: id
    });
  }

  render(){
    return (
      <div className="container">
        <Header />
        <RandomPlanet/>
        <div className="row mb2">
          <div className="col-md-6">
            <ItemList onItemSelected={this.onPersonSelected}
                      getData={this.swapiService.getAllPeople}/>
          </div>
          <div className="col-md-6">
              <PersonDetails personId={this.state.selectedPerson}/>
          </div>
        </div>
      </div>
    );
  }
};

export default App;