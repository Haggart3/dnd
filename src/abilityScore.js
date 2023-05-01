import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Dropdown, DropdownButton } from 'react-bootstrap';



const AbilityScoreInfo = () => {
    const [ability, setAbility] = useState([]);
    const [abilityInfo, setAbilityInfo] = useState(null);
    const [loading, setLoading] = useState(false);
  
    useEffect(() => {
      console.log("test")
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
      setLoading(true);
      console.log(`Selected ability: ${ability.name}`);
      fetch(`https://www.dnd5eapi.co/api/ability-scores/${ability.index}`)
        .then(response => response.json())
        .then(data => {
          console.log('Ability Info 2:', data);
          setAbilityInfo(data);
          setLoading(false);
        })
        .catch(error => {
          console.log(error);
          setLoading(false);
        });
    };
    console.log("ability:", ability);
    console.log("abilityInfo:", abilityInfo);
    return (
      <div>
        <DropdownButton title = "Select Ability Score For Reference">
          {ability.map(a => (
            <Dropdown.Item key={a.index} onClick={() => handleSelect(a)}>
              {a.name}
            </Dropdown.Item>
        ))}
        </DropdownButton>
        {loading && <p>Loading...</p>}
        {abilityInfo && !loading &&
          <div>
            <h2>{abilityInfo.full_name}</h2>
            {abilityInfo.desc.map((desc, index) => (
            <p key={index}>{desc}</p>
            ))}
          </div>
        }
      </div>
    );
  }
  
export default AbilityScoreInfo;