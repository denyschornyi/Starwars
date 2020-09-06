import React, { Component } from 'react';

import './ItemList.css';

import SwapiService from '../../service/SwapiService'
import Spiner from '../Spiner'

export default class ItemList extends Component {

  swapiService = new SwapiService();
  
  state = {
    peopleList: null
  }

  renderItems(arr){
    return arr.map(({id, name}) => {
      return(
        <li key={id}
             className="list-group-item"
             onClick={() => this.props.onItemSelected(id)}>
          {name}
      </li>
      );
    });
  }

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