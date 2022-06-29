import { useState } from 'react'

const Button = (props) => {
  return <button onClick={props.handleClick}>{props.text}</button>
}

const StatisticLine = ({ text, value }) => {
  return <p>{text} {value}</p>
}

const calculateAverage = (good, neutral, bad) => {
  return (good - bad) / (good + neutral + bad)
}

const calculatePositive = (good, neutral, bad) => {
  return `${good / (good + neutral + bad)} %`;
}
const Statistics = ({ good, neutral, bad }) => {
  return <div>
    <StatisticLine text="Good" value={good} />
    <StatisticLine text="Neutral" value={neutral} />
    <StatisticLine text="Bad" value={bad} />
    <StatisticLine text="Total" value={good + neutral + bad} />
    <StatisticLine text="Average" value={calculateAverage(good, neutral, bad)} />
    <StatisticLine text="Positive" value={calculatePositive(good, neutral, bad)} />
  </div>
}



const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClick = (e) => {

    if (e.target.innerHTML === "Good") {
      setGood(good + 1);
    } else if (e.target.innerHTML === "Neutral") {
      setNeutral(neutral + 1);
    } else {
      setBad(bad + 1);
    }
  }

  let showStatistics = false;

  if (good !== 0 || neutral !== 0 || bad !== 0) {
    showStatistics = true;
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
      {showStatistics
        ? (<Statistics good={good} neutral={neutral} bad={bad} />)
        : "No feedback given"}

    </div>
  )
}

export default App;
