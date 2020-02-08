import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person.js'

const element = <h1>Hello, Meow</h1>;

const App = props => {
  const [states, setstates] = useState({
    persons :[
      {name: "hu", age:18},
      {name: "lv", age: 28}

    ],
   
  });
  const [otherState, setOtherState] = useState('some other value');
  console.log(states, otherState)
  const switchName = () => {
    
    setstates({
      persons:[
      {name: "hurrrrr", age:81},
      {name: "lvsssss", age:8}
      ]
    })
    console.log("sdfc")
    
   
    console.log("state1")
    console.log(states)
  }
  return (
    <div >
      console.log("sdd")
      console.log(state1)
      <p>really working</p>
      <button onClick={switchName}>Switch</button>


      <Person 
      name={states.persons[0].name} 
      age={states.persons[0].age}
      />
      <Person age={states.persons[1].age} name={states.persons[1].name}></Person>
    </div>
  )
  
   
}


export default App;



