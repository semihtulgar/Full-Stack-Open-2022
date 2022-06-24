function Header(props) {
  return (
    <h1>{props.course.name}</h1>
  )
}

function Content(props) {
  return (
    <div>
      {props.parts.parts.map(part => {
        return <Part part={part.name} exercise={part.exercises} />
      })}
    </div>
  )
}

function Part(props) {
  return (
    <p>
      {props.part} {props.exercise}
    </p>
  )
}

function Total(props) {
  let total = 0;
  for (let i = 0; i < props.parts.parts.length; i++) {
    total += props.parts.parts[i].exercises;
  }

  return (
    <p>Number of exercises {total}</p>
  )
}



function App() {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course} />
      <Content parts={course} />
      <Total parts={course} />
    </div>
  );
}

export default App;
