import './App.css';
import GoblinForm from './GoblinForm';
import GoblinList from './GoblinList';
import Goblin from './Goblin';
import { useState } from 'react';

function App() {
  /*
    track:
      allGoblins, an array of all goblins
      filteredGoblins, a second array of goblins: this one is the filtered version of the above allGoblins array
      goblinFormName, which is how we track the user input for the current name of the goblin in the form
      goblinFormHP, which is how we track the user input for the current HP of the goblin in the form
      goblinFormColor, which is how we track the user input for the current color of the goblin in the form
*/
  const [allGoblins, setAllGoblins] = useState([]);
  const [filteredGoblins, setFilteredGoblins] = useState([]);
  const [goblinFormName, setGoblinFormName] = useState('');
  const [goblinFormHP, setGoblinFormHP] = useState('');
  const [goblinFormColor, setGoblinFormColor] = useState('');


  function submitGoblin(e) {
    e.preventDefault();

    const newGoblin = {
      id: `${goblinFormName}${goblinFormHP}${goblinFormColor}`,
      name: goblinFormName,
      hp: goblinFormHP,
      color: goblinFormColor
    };

    // update the allGoblins array. Add the new goblin to the allGoblins array immutably.
    setAllGoblins([...allGoblins, newGoblin]);

    // clear out the goblin form state items by setting them to empty strings. This will cause the form to reset in the UI.
    setGoblinFormName('');
    setGoblinFormHP('');
    setGoblinFormColor('');
  }

  function handleDeleteGoblin(id) {

    const index = allGoblins.findIndex(goblin => goblin.id === id);

    allGoblins.splice(index, 1);

    setAllGoblins([...allGoblins]);
  }

  function handleFilterGoblins(search) {

    const filteredResult = allGoblins.filter(goblin => goblin.name.includes(search));

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
        {/* note that handleFilterGoblins is defined upstairs. This is where the allGoblins array gets filtered */}
        <input onChange={(e) => handleFilterGoblins(e.target.value)} />
      </div>
      <GoblinForm
        submitGoblin={submitGoblin}
        goblinFormName={goblinFormName} setGoblinFormName={setGoblinFormName} goblinFormColor={goblinFormColor} setGoblinFormColor={setGoblinFormColor} goblinFormHP={goblinFormHP}
        setGoblinFormHP={setGoblinFormHP}
      />
      <GoblinList
        goblins={
          filteredGoblins.length ? filteredGoblins : allGoblins } // this takes in an array of goblins. If the filteredGoblins has a length, use that array. Otherwise, use the allGoblins array
        handleDeleteGoblin={handleDeleteGoblin} // note that the goblin list has access to the ability to delete
      />
    </div>
  );
}

export default App;
