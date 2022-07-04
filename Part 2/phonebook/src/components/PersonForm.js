import React from "react";

function PersonForm({handleSubmit, handleName, newName, handleNumber,newNumber}) {
  return (
    <div>
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
    </div>
  );
}

export default PersonForm;
