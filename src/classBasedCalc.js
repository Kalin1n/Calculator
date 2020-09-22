import React from "react";

export default class Calculator extends React.Component{
    constructor(props){
      super(props);
      this.state ={
        value : "",
        action : ""
      }
      this.numberOne = this.numberOne.bind(this);
      this.numberTwo = this.numberTwo.bind(this);
      this.numberThree = this.numberThree.bind(this);
      this.numberFour = this.numberFour.bind(this);
      this.numberFive = this.numberFive.bind(this);
      this.numberSix = this.numberSix.bind(this);
      this.numberSeven = this.numberSeven.bind(this);
      this.numberEight = this.numberEight.bind(this);
      this.numberNine = this.numberNine.bind(this);
      this.numberZero = this.numberZero.bind(this);
      this.actionAdd = this.actionAdd.bind(this);
      this.actionSubb = this.actionSubb.bind(this);
      this.actionDivide = this.actionDivide.bind(this);
      this.actionMultiply = this.actionMultiply.bind(this);
      this.equal = this.equal.bind(this);
      this.clear = this.clear.bind(this);
      
    }
    numberOne(event){
      this.setState({ value :this.state.value+"1"});
    }
    numberTwo(event){
      this.setState({value : this.state.value+"2"});
    }
    numberThree(event){
      this.setState({value : this.state.value+"3"});
    }
    numberFour(event){
      this.setState({value : this.state.value+"4"});
    }
    numberFive(event){
      this.setState({value : this.state.value+"5"});
    }
    numberSix(event){
      this.setState({value : this.state.value+"6"});
    }
    numberSeven(event){
      this.setState({value : this.state.value+ "7"});
    }
    numberEight(event){
      this.setState({value : this.state.value+"8"});
    }
    numberNine(event){
      this.setState({value : this.state.value+"9"});
    }
    numberZero(event){
      this.setState({value: this.state.value+"0"});
    }
    actionAdd(event){
      this.setState({action : "add", value : this.state.value+=" + "});
    }
    actionSubb(event){
      this.setState({action : "subb", value : this.state.value+=" - "});
    }
    actionMultiply(event){
      this.setState({action : "multiply", value: this.state.value+=" * "});
    }
    actionDivide(event){
      this.setState({action : "divide", value : this.state.value+=" / "});
    }
    
    equal(event){
      var str = this.state.value;
    
      var znak = /\s/;
      var mas = str.match(znak);
      var firstDigit = "";
      var secondDigit = "";
      var result = 0;
      try{
      // //recognize first digit
      for( var i = 0 ; i < mas.index;i++){
         firstDigit += str.charAt(i)
      }
      // // recognize second digit
      for( var j = mas.index + 2 ; j < str.length ; j++){
         secondDigit += str.charAt(j)
      }
      var fDigit = Number(firstDigit);
      var sDigit = Number(secondDigit);
      
        console.log(this.state, fDigit, sDigit);
        switch(this.state.action){
          case "add" :
              result = fDigit + sDigit;
              this.setState({value : result});
          break;
          case "subb" :
            result = fDigit - sDigit;
            this.setState({value : result});
          break;
          case "multiply" :
            result = fDigit * sDigit;
            this.setState({value : result});
          break;
          case "divide":
            result = fDigit / sDigit;
            this.setState({value : result});
          break;
          default : break;
        }
      }catch(err){
        alert(err)
        this.setState({value :""})
      }
    }
  
    clear(event){
      this.setState({value : "",action: "" });
    }
    render(){
      return(
        <div className="calculator-body">
            <input readOnly value={this.state.value}  className=""></input>
            <div className="calculator-buttons">
              <div className="numbers-buttons">
                <div>
                  <button onClick={this.numberOne} className="">1</button>
                  <button onClick={this.numberTwo} className="">2</button>
                  <button onClick={this.numberThree} className="">3</button>
                </div>
                <div>
                  <button onClick={this.numberFour} className="">4</button>
                  <button onClick={this.numberFive} className="">5</button>
                  <button onClick={this.numberSix} className="">6</button>
                </div>
                <div>
                  <button onClick={this.numberSeven} className="">7</button>
                  <button onClick={this.numberEight} className="">8</button>
                  <button onClick={this.numberNine} className="">9</button>
                </div>
                <button onClick={this.numberZero} className="">0</button>
              </div>
              <div className="action-buttons">
                <button onClick={this.actionAdd} className="">+</button>
                <button onClick={this.actionSubb} className="">-</button>
                <button onClick={this.actionMultiply} className="">*</button>
                <button onClick={this.actionDivide} className="">/</button>
              </div>
            </div>
            <button onClick={this.equal} className="main-buttons">=</button>
            <button onClick={this.clear} className="main-buttons">AC</button>
        </div>
      )
    }
  }
  