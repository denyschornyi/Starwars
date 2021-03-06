import React, { Component } from 'react';

import SwapiService from '../../service/SwapiService'
import Spiner from '../Spiner'
import ErrorIndecator from '../ErrorIndecator/'

import './RandomPlanet.css';

export default class RandomPlanet extends Component {

    swapiService = new SwapiService();

    state = {
        planet: { },
        loading: true,
        error: false
    }

    componentDidMount(){
      this.updatePlanet();
      this.interval = setInterval(this.updatePlanet, 10000);
    }

    componentWillUnmount(){
      clearInterval(this.interval);
    }

    onPlanetLoaded = (planet) => {
        this.setState({planet , loading: false, error: false});
    }

    onEror = (err) => {
        this.setState({
            error: true,
            loading: false
        })
    }

    updatePlanet = () => {
        const id = Math.floor(Math.random() * 25) + 2;
        this.swapiService
            .getPlanet(id)
            .then(this.onPlanetLoaded)
            .catch(this.onEror)
    }
    
  render() {

    const {planet, loading, error} = this.state;

    const errorEl = error  ? <ErrorIndecator/> : null;
    const spiner =  loading ? <Spiner/> : null;
    const content = !(error || loading) ? <RandomPlanetElement planet={planet}/> : null

    return (
      <div className="random-planet jumbotron rounded">
        {spiner}
        {content}
        {errorEl}
      </div>
    );
  }
}


const RandomPlanetElement = ({planet}) => {
    const {id, name, population, rotationPeriod, diameter} = planet

    return (
    <React.Fragment>
        <img className="planet-image"
             src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}  alt={name}/>
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
              <span>{diameter}</span>
            </li>
          </ul>
        </div>
    </React.Fragment>
    );
}