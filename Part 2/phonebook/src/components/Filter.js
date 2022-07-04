import React from "react";

function Filter({handleFilterInput, searchedPerson, foundedPersons}) {
  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with
        <br />
        <input onChange={handleFilterInput} value={searchedPerson}></input>
      </div>
    </div>
  );
}

export default Filter;
