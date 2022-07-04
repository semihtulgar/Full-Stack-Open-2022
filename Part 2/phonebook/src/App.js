import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas", number : "040-123-45-67" }]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPerson = { name: newName, number: newNumber };
    const personExist = persons.find((person) => person.name === newPerson.name || person.number === newPerson.number);
    
    if (personExist === undefined) {
      setPersons(persons.concat(newPerson));
      setNewName("");
      setNewNumber("");
    } else {
      alert(`this contact information is already added to phonebook`);
    }
  };

  const handleName = (e) => {
    setNewName(e.target.value);
  };

  const handleNumber = (e) => {
    setNewNumber(e.target.value);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input onChange={handleName} value={newName}/>
        </div>
        <div>
          number: <input onChange={handleNumber} value={newNumber} type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}" placeholder="123-456-78-90" />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => (
        <p key={person.name}>{person.name} {person.number}</p>
      ))}
    </div>
  );
};

export default App;
