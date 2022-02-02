import React from 'react';

export default function GoblinForm({
  submitGoblin,
  goblinFormName,
  setGoblinFormName,
  goblinFormColor,
  setGoblinFormColor,
  goblinFormHP,
  setGoblinFormHP
}) {
  return (
    <div className='goblin-form-container quarter'>
      {/* on submit, call the submitGoblin function, passed in as a prop.
      Note that you don't need to define an anonymous function--you can just name the submitGoblin prop here and it will work.
      Take a minute to try and puzzle out why that is: how is this function different from other functions,
      where you do need to create an anonymous function in the `onClick` or `onSubmit` spot? */}
      <form className='goblin-form' onSubmit={ submitGoblin }>
        <label>
            Name
          <input required value={ goblinFormName } onChange={(e) => setGoblinFormName(e.target.value) }/>
        </label>
        <label>
            HP
          <input required type="number" value={goblinFormHP} onChange={(e) => setGoblinFormHP(e.target.value) }/>
        </label>
        <label>
            Color
          <select required value={goblinFormColor} onChange={(e) => setGoblinFormColor(e.target.value) }>
            <option value="lightgreen">Green</option>
            <option value="lightblue">Blue</option>
            <option value="pink">Pink</option>
            <option value="purple">Purple</option>
            <option value="orange">Orange</option>
          </select>
        </label>
        <button type="submit">Add Goblin</button>

      </form>
    </div>
  );
}
