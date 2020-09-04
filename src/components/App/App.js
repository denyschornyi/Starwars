import React from 'react';

import Header from '../Header';
import ItemList from '../ItemList';

import './App.css';

const App = () => {
  return (
    <div className="container">
      <Header />
      <div className="row mb2">
        <div className="col-md-6">
          <ItemList />
        </div>
        <div className="col-md-6">
            {/* PersonDetails */}
        </div>
      </div>
    </div>
  );
};

export default App;