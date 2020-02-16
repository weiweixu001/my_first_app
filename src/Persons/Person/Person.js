import React from 'react';
import './Person.css';
import Radium from 'radium';
import styled from 'styled-components';

const StyleDiv = styled.div`
    width: '400px';
    margin: 16px auto;
    border: 200px solid #bbb;
    text-align: center;
`;

const Person = (props) =>{
  
    return (
        <StyleDiv>

        
          <h1 className='Person' >I am {props.name}, and I am {props.age} years old</h1>
        </StyleDiv> 
    
    )     
}

export default Radium(Person);
