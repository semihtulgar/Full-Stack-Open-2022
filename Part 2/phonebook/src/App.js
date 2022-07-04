import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchedPerson, setSearchedPerson] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPerson = { name: newName, number: newNumber };
    const personExist = persons.find(
      (person) =>
        person.name === newPerson.name || person.number === newPerson.number
    );

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
  };

  let foundedPerson = ""; 

  const handleFilterInput = (e) => {
    setSearchedPerson(e.target.value);
    foundedPerson = persons.filter(person => person.name.toLowerCase().startsWith(e.target.value.toLowerCase()));
    console.log(foundedPerson);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with
        <br />
        <input onChange={handleFilterInput} value={searchedPerson}></input>
      </div>
      <br />
      <form onSubmit={handleSubmit}>
        <div>
          name: <input onChange={handleName} value={newName} />
        </div>
        <div>
          number:{" "}
          <input
            onChange={handleNumber}
            value={newNumber}
            type="tel"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}"
            placeholder="123-456-78-90"
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => (
        <p key={person.name}>
          {person.name} {person.number}
        </p>
      ))}
    </div>
  );
};

export default App;
