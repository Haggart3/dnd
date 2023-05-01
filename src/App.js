/* import logo from './logo.svg'; */
import './App.css';
import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
/*import { Dropdown, DropdownButton } from 'react-bootstrap';*/
import AbilityScoreInfo from './abilityScore'


function APItest() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://www.dnd5eapi.co/api/ability-scores/cha')
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error));
  },[]);

  return (
    <div>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre>: 'Loading...'}
    </div>
  );
}



function App() {
  return (
    <div className="App">
      <header className="App-header">
       <AbilityScoreInfo />

      </header>
    </div>
  );
}

export default App;
