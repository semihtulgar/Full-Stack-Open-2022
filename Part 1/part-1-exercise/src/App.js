function Header(props) {
  return (
    <h1>{props.course}</h1>
  )
}

function Content(props) {
  return (
    <div>
      {props.parts.map(part => {
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
  for (let i = 0; i < props.parts.length; i++) {
    total += props.parts[i].exercises;
  }
  
  return (
    <p>Number of exercises {total}</p>
  )
}



function App() {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course} />
      <Content parts={[part1, part2, part3]} />
      <Total parts={[part1, part2, part3]} />
    </div>
  );
}

export default App;
