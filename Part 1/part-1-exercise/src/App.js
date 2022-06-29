import { useState } from 'react'

const Button = (props) => {
  return <button onClick={props.handleClick}>{props.text}</button>
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClick = (e) => {

    if (e.target.innerHTML === "Good") {
      setGood(good + 1);
    }else if(e.target.innerHTML === "Neutral"){
      setNeutral(neutral + 1);
    }else{
      setBad(bad + 1);
    }
  }

  const calculateAverage = (good, neutral, bad) => {
    return (good - bad) / (good + neutral + bad)
  }

  const calculatePositive = (good, neutral, bad) => {
    return good / (good + neutral + bad);
  }

  return (
    <div>
      <h1>Give Feedback</h1>
      <div>
        <Button handleClick={handleClick} text="Good" />
        <Button handleClick={handleClick} text="Neutral" />
        <Button handleClick={handleClick} text="Bad" />
      </div>
      <h1>Statistics</h1>
      <p>Good {good}</p>
      <p>Neutral {neutral}</p>
      <p>Bad {bad}</p>
      <p>Total {good + neutral + bad}</p>
      <p>Average {isNaN(calculateAverage(good, neutral, bad)) ? 0 : calculateAverage(good, neutral, bad)}</p>
      <p>Positive {isNaN(calculatePositive(good, neutral, bad)) ? 0 : calculatePositive(good, neutral, bad)} %</p>
    </div>
  )
}

export default App;
