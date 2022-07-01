import { useEffect, useLayoutEffect, useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]

  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0)); 

  const handleClick = () => {
    let index = Math.floor(Math.random() * anecdotes.length)
    setSelected(index)
  }
   
  const voteAnectode = () => {
    const newArray = [...votes];
    newArray[selected] += 1;
    setVotes(newArray)
  }

  const findMostVoted = () => {
    const index = votes.indexOf(Math.max(...votes));
    return index;
  }

  const [selected, setSelected] = useState(0)

  return (
    <div>
      <h1>Anectode of the Day</h1>
      {anecdotes[selected]}
      <p>has {votes[selected]} votes</p>
      <br />
      <button onClick={voteAnectode}>vote</button>
      <button onClick={handleClick}>Next Anecdote</button>
      <h1>Anectode with most votes</h1>
      <p>{anecdotes[findMostVoted()]}</p>
      <p>has {votes[findMostVoted()]} votes</p>
    </div>
  )
}

export default App;
