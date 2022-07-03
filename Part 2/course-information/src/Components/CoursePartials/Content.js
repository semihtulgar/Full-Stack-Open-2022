import React from "react";
import Part from "./CourseDetails/Part";

function Content({ parts }) {
  // console.log(parts);
  const amountOfExercises = [];
  parts.forEach((part) => {
    amountOfExercises.push(part.exercises);
  });
  let total = amountOfExercises.reduce((previousValue, currentValue) => previousValue +
    currentValue,
    0
  );
  return (
    <div>
      <ul>
        {parts.map((part) => (
          <Part key={part.id} part={part} />
        ))}
      </ul>
      <p><b>total of {total} exercises</b></p>
    </div>
  );
}

export default Content;
