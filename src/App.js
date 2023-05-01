/* import logo from './logo.svg'; */
import './App.css';
import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
/*import { Dropdown, DropdownButton } from 'react-bootstrap';*/
import AbilityScoreInfo from './abilityScore'
import { supabase } from './supabaseClient';
/*import { Table } from 'react-bootstrap';*/

/*
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
*/


function Adventures() {
  const [myModules, setMyModules] = useState([]);
  async function getModules() {
    let { data: modules} = await supabase
      .from('Modules')
      .select('*')
    setMyModules(modules);
  }
  getModules();
  return(
    <table className='modules'>
    {
      myModules.map(m => (
        <tr>
          <td>{m.Title}</td>
          <td>{m.Length}</td>
          <td>{m.Levels}</td>
          <td>{m.Description}</td>
          <td>{m.Completed}</td>
        </tr>
      ))
    }
    </table>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <AbilityScoreInfo />
          <Adventures />
        </div>
      </header>
    </div>
  );
}

export default App;
