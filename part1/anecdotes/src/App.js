import React, {useState} from "react";

const GetQuote =({selected,setSelected})=>{
  return(
    <>
      <button onClick={()=> setSelected(selected+1)}>
        next anecdote
      </button>
    </>
  )
}

const Vote = ({votes, setVotes, quote})=>{
  const updateVotes=()=>{
    if(votes.hasOwnProperty(quote)){
      votes[quote] += 1;
    }else{
      votes[quote] = 1;
    }
  }
  
  return(
    <>
      <button onClick={updateVotes}>
        Vote!
      </button>
    </>
  )
}

const CountVotes =({votes, quote})=>{
  if(votes.hasOwnProperty(quote)){
    return(
      <div>
        has {votes[quote]} votes
      </div>
    )
  }
  return(
    <div>
        has 0 votes
    </div>
  )
}

const MostVoted=({votes, quotes})=>{
  const votesKeys = Object.keys(votes);
  if(votesKeys.every(quote=> quote === 0)){
    return(
      <div>
        <p>No ratings yet</p>
      </div>
    )
  }else{
    const mostVoted = votesKeys.reduce((a, b) => votesKeys[a] > votesKeys[b] ? a : b);
    return(
      <div>
        <p>{quotes[mostVoted]}</p>
        <CountVotes votes={votes} quote={mostVoted}/>
      </div>
    )
  }
}

const App=()=> {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState({});
  if(selected > 0){
    const randomQuote = Math.floor(Math.random() * anecdotes.length);
    return (
      <div>
        <h1>Anecdote of the day</h1>
        <p>{anecdotes[randomQuote]}</p>
        <CountVotes votes={votes} quote={randomQuote}/>
        <br/>
        <Vote votes={votes} setVotes={setVotes} quote={randomQuote}/>
        <GetQuote selected={selected} setSelected={setSelected}/>
        <h1>Anecdote with most votes</h1>
        <MostVoted votes={votes} quotes={anecdotes}/>
      </div>
    )
  }
  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <CountVotes votes={votes} quote={selected}/>
      <br/>
      <Vote votes={votes} setVotes={setVotes} quote={0}/>
      <GetQuote selected={selected} setSelected={setSelected}/>
      <h1>Anecdote with most votes</h1>
      <MostVoted votes={votes} quotes={anecdotes}/>
    </div>
  )
}

export default App;
