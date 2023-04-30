/* import logo from './logo.svg'; */
import './App.css';
import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Dropdown, DropdownButton } from 'react-bootstrap';

const AbilityScoreInfo = () => {
  const [ability, setAbility] = useState([]);

  useEffect(() => {
    fetch('https://www.dnd5eapi.co/api/ability-scores')
      .then(response => response.json())
      .then(data => {
        setAbility(data.results);
      })
      .catch(error => {
        console.log(error);
      });
  }, [])
  const handleSelect = (ability) => {
    fetch(`https://www.dnd5eapi.co/api/ability-scores/${ability.index}`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          abilityData: data
        });
      })
      .catch(error => {
        console.log(error);
      });
  };
  return (
    <DropdownButton title = "Select Ability Score">
      {ability.map(ability => (
        <Dropdown.Item key={ability.index} onSelect={() => handleSelect(ability)}>
          {ability.name}
        </Dropdown.Item>
      ))}
    </DropdownButton>
  );
}



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
       <APItest />
      </header>
    </div>
  );
}

export default App;
