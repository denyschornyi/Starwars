import React, { Component } from 'react';

import './ItemList.css';

import Spiner from '../Spiner'

export default class ItemList extends Component {

  state = {
    itemList: null
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
    const { getData } = this.props;
          getData()
            .then(itemList => {
              this.setState({itemList : itemList})
            })
  }

  render() {
    const { itemList } = this.state;
    if(!itemList){
      return <Spiner/>;
    }
    const data = this.renderItems(itemList);
    return (
      <ul className="item-list list-group">
        {data}
      </ul>
    );
  }
}