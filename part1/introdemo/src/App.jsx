const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}, your are {props.age} years old!</p>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="George"age={Math.floor((Math. random() * (120 - 18) + 18))}/>
      <Hello name="Daisy" age={Math.floor((Math. random() * (120 - 18) + 18))}/>
    </div>
  )
}

export default App