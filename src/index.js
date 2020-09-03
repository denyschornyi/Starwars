class SwapiService {

  _apiBase = `http://swapi.dev/api`

  async getRecource(url){
    const res = await fetch(`${this._apiBase}${url}`);
  
    if(!res.ok){
      throw new Error (`Could not fetch ${url}, recived ${res.status}`)
    }
  
    return await res.json();
  }

  async getAllPeople(){
    const res = await this.getRecource(`/people/`);
    return res.results;
  }

  getPerson(id){
    return this.getRecource(`/people/${id}`);
  }

  async getAllPlanets(){
    const res = await this.getRecource(`/planets/`);
    return res.results;
  }

  getPlanet(id){
    return this.getRecource(`/planet/${id}`);
  }

  async getAllStarships(){
    const res = await this.getRecource(`/starships/`);
    return res.results;
  }

  getStarship(id){
    return this.getRecource(`/starships/${id}`);
  }
}


const swapi = new SwapiService();

swapi.getPerson(1).then(body => {
    console.log(body.name)
});