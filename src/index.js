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
}


const swapi = new SwapiService();

swapi.getAllPeople().then(body => {
  body.forEach( people => {
    console.log(people.name)
  });
});