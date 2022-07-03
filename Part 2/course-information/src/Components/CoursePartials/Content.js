import React from "react";
import Part from "./CourseDetails/Part";

function Content({ parts }) {
  return (
    <div>
        <ul>
        {parts.map(part => <Part key={part.id} part={part}/>)}
        </ul>
    </div>
  );
}

export default Content;
