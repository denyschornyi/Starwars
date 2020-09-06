import React, { Component } from 'react';

import './ItemList.css';

import SwapiService from '../../service/SwapiService'
import Spiner from '../Spiner'

export default class ItemList extends Component {

  state = {
    peopleList: null
  }

  renderItems(arr){
    return arr.map(person => {
      return(
        <li key={person.id} className="list-group-item">
          {person.name}
      </li>
      );
    });
  }

  swapiService = new SwapiService();

  componentDidMount(){
    this.swapiService
            .getAllPeople()
            .then(peopleList => {
              this.setState({peopleList : peopleList})
            })
  }

  render() {
    const { peopleList } = this.state;
    if(!peopleList){
      return <Spiner/>;
    }
    const data = this.renderItems(peopleList);
    return (
      <ul className="item-list list-group">
        {data}
      </ul>
    );
  }
}