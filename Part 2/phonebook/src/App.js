import { useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

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
  const [foundedPersons, setFoundedPersons] = useState(persons);

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

  const handleFilterInput = (e) => {
    setSearchedPerson(e.target.value);
    if (e.target.value !== "") {
      setFoundedPersons(
        persons.filter((person) =>
          person.name.toLowerCase().startsWith(e.target.value.toLowerCase())
        )
      );
    } else {
      setFoundedPersons(persons);
    }
  };

  return (
    <div>
      <Filter
        handleFilterInput={handleFilterInput}
        searchedPerson={searchedPerson}
        foundedPersons={foundedPersons}
      />
      <br />
      <PersonForm
        handleSubmit={handleSubmit}
        handleName={handleName}
        newName={newName}
        handleNumber={handleNumber}
        newNumber={newNumber}
      />
      <Persons persons={foundedPersons} />
    </div>
  );
};

export default App;
