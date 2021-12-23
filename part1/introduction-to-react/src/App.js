import React from "react";

const Header = (props) =>{
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
};

const Part = (props)=>{
  return (
    <>
      <p>
        {props.part} {props.exercise}
      </p>
    </>
  )
};

const Content = (props) =>{
  return (
    <>
      <Part part={props.part[0]} exercise={props.exercises[0]}/>
      <Part part={props.part[1]} exercise={props.exercises[1]}/>
      <Part part={props.part[2]} exercise={props.exercises[2]}/>
    </>
  )
};

const Total =(props)=>{
  return (
  <>
    <p>Number of exercises {props.exercise[0] + props.exercise[1] + props.exercise[2]}</p>
  </>
  )
};

const App = ()=>{
  const course = 'Half Stack application development';
  const part1 = 'Fundamentals of React';
  const exercises1 = 10;
  const part2 = 'Using props to pass data';
  const exercises2 = 7;
  const part3 = 'State of a component';
  const exercises3 = 14;
  
  return (
    <div>
      <Header course={course}/>
      <Content part={[part1, part2, part3]} exercises={[exercises1, exercises2, exercises3]}/>
      <Total exercise={[exercises1, exercises2, exercises3]}/>
    </div>
  );
};


export default App;