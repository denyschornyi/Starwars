import React, { Component } from 'react';

import './RandomPlanet.css';

export default class RandomPlanet extends Component {

    state = {
        name: null,
        population:  null,
        rotationPeriod: null,
        diametr: null
    }

  render() {

    const {name, population, rotationPeriod, diametr} = this.state;

    return (
      <div className="random-planet jumbotron rounded">
        <img className="planet-image"
             src="https://starwars-visualguide.com/assets/img/planets/5.jpg"  alt='planet'/>
        <div>
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Population</span>
              <span>{population}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Rotation Period</span>
              <span>{rotationPeriod}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Diameter</span>
              <span>{diametr}</span>
            </li>
          </ul>
        </div>
      </div>

    );
  }
}