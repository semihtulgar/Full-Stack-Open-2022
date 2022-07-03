import React from "react";
import Part from "./CourseDetails/Part";

function Content({ parts }) {
  console.log(parts);
  let total = 0;
  let totalOfExercises = parts.forEach(part => total += part.exercises);
  return (
    <div>
      <ul>
        {parts.map((part) => (
          <Part key={part.id} part={part} />
        ))}
      </ul>
      <p>{total}</p>
    </div>
  );
}

export default Content;
