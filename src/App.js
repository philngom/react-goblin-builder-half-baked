import './App.css';
import GoblinForm from './GoblinForm';
import GoblinList from './GoblinList';
import Goblin from './Goblin';
import { useState } from 'react';

function App() {
  const [allGoblins, setAllGoblins] = useState([]);
  const [filteredGoblins, setFilteredGoblins] = useState([]);
  const [goblinFormName, setGoblinFormName] = useState('');
  const [goblinFormHP, setGoblinFormHP] = useState('');
  const [goblinFormColor, setGoblinFormColor] = useState('');
  // const [query, setQuery] = useState('');


  function submitGoblin(e) {
    e.preventDefault();

    const newGoblin = {
      id: `${goblinFormName}${goblinFormHP}${goblinFormColor}`,
      name: goblinFormName,
      hp: goblinFormHP,
      color: goblinFormColor
    };

    setAllGoblins([...allGoblins, newGoblin]);

    setGoblinFormName('');
    setGoblinFormHP('');
    setGoblinFormColor('');
  }

  function handleDeleteGoblin(id) {

    if (filteredGoblins.length) {
      const index = filteredGoblins.findIndex(goblin => goblin.id === id);

      filteredGoblins.splice(index, 1);

      setFilteredGoblins([...filteredGoblins]);
    }

    const index = allGoblins.findIndex(goblin => goblin.id === id);

    allGoblins.splice(index, 1);

    setAllGoblins([...allGoblins]);
  }

  function handleFilterGoblins(query) {
    // setQuery(query);
    const filteredResult = allGoblins.filter(goblin => goblin.name.includes(query));

    setFilteredGoblins(filteredResult);
  }


  return (
    <div className="App">
      <div className='current-goblin quarter'>
        <Goblin goblin={{
          name: goblinFormName,
          color: goblinFormColor
        }}/>
      </div>
      <div className='goblin-filter quarter'>
        Filter Goblins
        <input onChange={(e) => handleFilterGoblins(e.target.value)} />
      </div>
      <GoblinForm
        submitGoblin={submitGoblin}
        goblinFormName={goblinFormName} setGoblinFormName={setGoblinFormName} goblinFormColor={goblinFormColor} setGoblinFormColor={setGoblinFormColor} goblinFormHP={goblinFormHP}
        setGoblinFormHP={setGoblinFormHP}
      />
      <GoblinList
        goblins={
          filteredGoblins.length ? filteredGoblins : allGoblins }
        handleDeleteGoblin={handleDeleteGoblin}
      />
    </div>
  );
}

export default App;
