import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import Radium, {StyleRoot} from 'radium';
import Person from './Person/Person.js';
import styled from 'styled-components';

const StyleButton=styled.button`
   background-color: green;//regular css here
   color: red;
   font: inherit;
   border: 1px solid bule;
   padding : 8px;
   cursor: pointer;
   &:hover {
     background-color: white;
     color:black
   }
`;


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
    <StyleRoot>
      <div >
      console.log("sdd")
      console.log(state1)
      <p>really working</p>
      <StyleButton onClick={switchName}>Switch</StyleButton>


      <Person 
      name={states.persons[0].name} 
      age={states.persons[0].age}
      />
      <Person age={states.persons[1].age} name={states.persons[1].name}></Person>
    </div>

    </StyleRoot>
    
  )
  
   
}


export default App;



