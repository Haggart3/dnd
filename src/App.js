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
      <tr>
        <th>Title</th>
        <th>Length</th>
        <th>Levels</th>
        <th>Description</th>
      </tr>
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
    <div className='App'>
      <header className='App-header'>
        <div className='final'>
          <div className='titles'>
            <h1>Welcome to your personal D&D 5e Reference Sheet!</h1>
            <h2>Store your currently owned modules and utilize our build in reference tool in order to get a refresher on what certain abilities do!</h2>


          </div>
          <div className='content'>
              <AbilityScoreInfo />
              <h4>Your saved adventure modules:</h4>
              <Adventures />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
