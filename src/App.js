/* import logo from './logo.svg'; */
import './App.css';
import React, {useState, useEffect} from 'react';


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
       <APItest />
      </header>
    </div>
  );
}

export default App;
