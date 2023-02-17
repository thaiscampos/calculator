import React, { useState } from 'react'
import './Calculator.css'
import Container from   "@mui/material/Container"
import Box from '@mui/material/Box';

function Calculator() {

    const[num,setNum]=useState(0);
    const[old,setOldNum]=useState(0);
    const[operator,setOperator]=useState();

    function inputNum(e){
        console.log(e.target.value);
        var input = e.target.value;

        if(num===0){
            setNum(input);
        }else{
            setNum( num + input)
        }

        
        
    }
    function clear(e){
        setNum(0)
    }

    function porc(e){
        setNum(num / 100);

    }


    function changeSign(){
     if(num>0){
        setNum(-num)
     }else{
        setNum(Math.abs(num))
     }   
       
    }


    function operatorHandler(e){
        var operatorInput = e.target.value;
        setOperator(operatorInput);
        setOldNum(num);
        setNum(0);
    }

    function calculate(){
        console.log(num);
        console.log(old)
        console.log(operator);

        if(operator === "-"){
            setNum(old-num);
        }else if(operator === "/"){
            setNum(old/num);
        }else if(operator === "+"){
            
            setNum(parseFloat(old) + parseFloat(num));
        }else if(operator === "x"){
            setNum(old*num);
        }



    }
    return (
        <div>
        <Box m={5} />
        <Container maxWidth="xs">
        <div className='wrapper'>
        <Box m={10}/>
            <h1 id='result'>{num}</h1>
        <button  className='white' onClick={clear}>AC</button>
        <button  className='white' onClick={changeSign}>+-</button>
        <button  className='white' onClick={porc}>%</button>
        <button className='orange' onClick={operatorHandler} value={"/"}>/</button>

        <button value={7}  onClick={inputNum}>7</button>
        <button value={8}  onClick={inputNum}>8</button>
        <button value={9}  onClick={inputNum}>9</button>
        <button className='orange' value={"x"} onClick={operatorHandler}>X</button>

        <button value={4}  onClick={inputNum}>4</button>
        <button value={5}  onClick={inputNum}>5</button>
        <button value={6}  onClick={inputNum}>6</button>
        <button className='orange' value={"-"} onClick={operatorHandler}>-</button>

        <button value={1}  onClick={inputNum}>1</button>
        <button value={2}  onClick={inputNum}>2</button>
        <button value={3}  onClick={inputNum}>3</button>
        <button className='orange' value={"+"} onClick={operatorHandler}>+</button>

        <button className='teste' value={0}  onClick={inputNum}>0</button>
        
        <button onClick={inputNum} value={"."} >,</button> 
        
        <button className='white' onClick={calculate}>=</button>
        
        </ div>
        </Container>
        </div>
    )
}

export default Calculator
