import React, { useState } from "react";


function Calc(){
    const [value, setValue] = useState("");
    const [first, setFirst] = useState("");
    const [second, setSecond] = useState("");
    const [action, setAction] = useState("");

    function clickHendler(event){
       
        let number = /[0-9]/.test(event.target.value); // Check if button clicked refers to number 
        
        if(number){  // If button refers to number 
            if(action.length){   
                setSecond(second + event.target.value);
                setValue(value + event.target.value);        
            }else{
                setFirst(first + event.target.value);
                setValue(value + event.target.value);        
            }
        }
        else{   // If button refers to action
            if(event.target.value === "add"){  // In case action choosed is + 
               setAction("sum");
               setValue("");
            }
            else if (event.target.value === "subtract"){ // In case action choosed is -
               setAction("subtract");
               setValue("");
            }
            else if(event.target.value === "multiply"){
                setAction("multiply");
                setValue("");
            }
            else if(event.target.value ==="divide"){
                setAction("divide");
                setValue("");
            }
            else if(event.target.value === "="){ // To get result
                let firstNumber = Number(first);
                let secondNumber = Number(second);
                let result = 0;
                switch(action){
                    case "sum":
                        result = firstNumber + secondNumber; 
                        setValue(result);
                        setFirst(result);
                        setSecond("");
                        setAction("");
                        break;
                    case "subtract": 
                       
                        result = firstNumber - secondNumber;
                 
                        setValue(`${result}`);
                        setFirst(`${result}`);
                        setSecond("");
                        setAction("");
                        break;
                    case "multiply":
                        result = firstNumber * secondNumber;

                        setValue(`${result}`);
                        setFirst(`${result}`);
                        setSecond("");
                        setAction("");
                        break;
                    case "divide":
                        result = firstNumber / secondNumber;
                        setValue(`${result}`);
                        setFirst(`${result}`);
                        setSecond("");
                        setAction("");
                        break;
                    default:
                        return;
                }
            }
            else{ 
               setValue("");
               setFirst("");
               setSecond("");
               setAction("");
            }
        }
    }

    return(     
        <div className="bgc">
            <input className="screen" value={value} type="text" disabled />
            <div className="numbers"> 
                <button className="number"name="1" value={1} onClick={clickHendler}>1</button>
                <button className="number"name="2" value={2} onClick={clickHendler}>2</button>
                <button className="number"name="3" value={3}  onClick={clickHendler}>3</button>
                <button className="number"name="4" value={4}  onClick={clickHendler}>4</button>
                <button className="number"name="5" value={5}  onClick={clickHendler}>5</button>
                <button className="number"name="6" value={6}  onClick={clickHendler}>6</button>
                <button className="number"name="7" value={7} onClick={clickHendler}>7</button>
                <button className="number"name="8" value={8} onClick={clickHendler}>8</button>
                <button className="number"name="9" value={9} onClick={clickHendler}>9</button>
                <button className="number"name="0" value={0} onClick={clickHendler}>0</button>
            </div>
            <div className="actions"> 
                <button value="add"  onClick={clickHendler}>+</button>
                <button value="subtract" onClick={clickHendler}>-</button>
                <button value="multiply" onClick={clickHendler}>*</button>
                <button value="divide" onClick={clickHendler}>/</button>
                <button value="=" onClick={clickHendler}>=</button>
                <button value="clear" onClick={clickHendler}>AC</button>
            </div>
        </div>
    )
}; 

export default Calc;