import React from 'react';

import './App.css';
import CarsList from './components/CarsList';
import CarsProvider from './CarsProvider';

function App() {
  return (
      <CarsProvider>
        <div className="App">
         <CarsList />
        </div>
      </CarsProvider>
  );
}

export default App;
