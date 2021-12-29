import React, {useState} from "react";

const Header = ()=>{
  return(
    <>
      <h1>Give Feedback</h1>
    </>
  )
}

const Button = ({text, rating})=>{
  return(
    <>
      <button onClick={rating}>{text}</button>
    </>
  )
}

const Content = ({good, neutral, bad})=>{
  return(
    <>
      <Button rating={good} text='good'/>
      <Button rating={neutral} text='neutral'/>
      <Button rating={bad} text='bad'/>
    </>
  )
}

const StatisticsLine = ({text, value, percentage=false})=>{
  if (percentage){
    return(
      <>
        <tr>
          <td>{text}</td>
          <td>{value}%</td>
        </tr>
      </>
    )
  }
  return(
    <>
      <tr>
          <td>{text}</td>
          <td>{value}</td>
      </tr>
    </>
  )
}

const Statistics = ({clicks})=>{
  const values = Object.values(clicks);
  const sum = values.reduce((a,b)=> a + b);
  const average = ((clicks.good + clicks.bad*-1 + clicks.neutral*0)/sum).toFixed(2);
  const positive = ((clicks.good / sum) * 100).toFixed(1);
  if (sum === 0){
    return (
    <>
      <h2>Statistics</h2>
      <h3>No feedback has been given</h3>
    </>
    )
  }
  return(
    <>
      <h2>Statistics</h2>
      <table>  
        <tbody>
          <StatisticsLine text={'good'} value={clicks.good}/>
          <StatisticsLine text={'neutral'} value={clicks.neutral}/>
          <StatisticsLine text={'bad'} value={clicks.bad}/>
          <StatisticsLine text={'all'} value={sum}/>
          <StatisticsLine text={'average'} value={average}/>
          <StatisticsLine text={'positive'} value={positive} percentage={true}/>
        </tbody>
      </table>
    </>
  )
}

const App = () =>{
  const [clicks, setClicks] = useState({
    good: 0,
    neutral:0,
    bad:0
  });
  const handleGoodClicks = ()=>{
    setClicks({...clicks, good:clicks.good + 1})
  }
  const handleBadClicks = ()=>{
    setClicks({...clicks, bad:clicks.bad + 1})
  }
  const handleNeutralClicks = ()=>{
    setClicks({...clicks, neutral:clicks.neutral + 1})
  }
  return(
    <div>
      <Header/>
      <Content good={handleGoodClicks} bad={handleBadClicks} neutral={handleNeutralClicks}/>
      <Statistics clicks={clicks}/>
    </div>
  )
}

export default App;