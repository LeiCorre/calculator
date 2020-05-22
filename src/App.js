import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import {
  atan2, chain, derivative, e, evaluate, log, pi, pow, round, sqrt
} from 'mathjs'





 class Calculator extends React.Component {
   constructor(props) {
     super(props);
     this.state = {
       equation: "0"

     }
     this.oneC = this.oneC.bind(this)
     this.twoC = this.twoC.bind(this)
     this.threeC = this.threeC.bind(this)
     this.fourC = this.fourC.bind(this)
     this.fiveC = this.fiveC.bind(this)
     this.sixC = this.sixC.bind(this)
     this.sevenC = this.sevenC.bind(this)
     this.eightC = this.eightC.bind(this)
     this.nineC = this.nineC.bind(this)
     this.zeroC = this.zeroC.bind(this)
     this.decC = this.decC.bind(this)
     this.plusC = this.plusC.bind(this)
     this.minusC = this.minusC.bind(this)
     this.multC = this.multC.bind(this)
     this.divC = this.divC.bind(this)
     this.equals = this.equals.bind(this)
     this.clear = this.clear.bind(this)

   }

   oneC(event) {
     const value = this.state.equation.toString()
     this.setState({ equation: value.replace(/^0/, '') + "1" })
   }

   twoC(event) {
    const value = this.state.equation.toString()
    this.setState({ equation: value.replace(/^0/, '') + "2" })
   }

   threeC(event) {
    const value = this.state.equation.toString()
    this.setState({ equation: value.replace(/^0/, '') + "3" })
   }

   fourC(event) {
    const value = this.state.equation.toString()
     this.setState({ equation: value.replace(/^0/, '') + "4" })
   }
   
   fiveC(event) {
    const value = this.state.equation.toString()
     this.setState({ equation: value.replace(/^0/, '') + "5" })
   }
   
   sixC(event) {
    const value = this.state.equation.toString()
     this.setState({ equation: value.replace(/^0/, '') + "6" })
   }
   
   sevenC(event) {
    const value = this.state.equation.toString()
     this.setState({ equation: value.replace(/^0/, '') + "7" })
   }
   
   eightC(event) {
    const value = this.state.equation.toString()
     this.setState({ equation: value.replace(/^0/, '') + "8" })
   }
   
   nineC(event) {
    const value = this.state.equation.toString()
     this.setState({ equation: value.replace(/^0/, '') + "9" })
   }
   
   zeroC(event) {
    const value = this.state.equation.toString()
     this.setState({ equation: value.replace(/^0/, '') + "0" })
   }
   
   decC(event) {
     const value = this.state.equation;
     if (!value.includes(".")) 
     this.setState({equation: value + '.'})
   }

   equals(event) {
    const value = this.state.equation.toString()
    
    this.setState({
      equation: evaluate(value)
    })
   }
   
   plusC(event) {
    const value = this.state.equation.toString()
    
    this.setState({ equation: value.replace(/\D$/, '') + "+" });
    
    }

    
   

   minusC(event) {
    const value = this.state.equation.toString()
    
    this.setState({ equation: value.replace(/\D$/, '') + "-" });

   }
   
   multC(event) {
     
    const value = this.state.equation.toString()
    
    this.setState({ equation: value.replace(/\D$/, '') + "*" });
    
   }
   
   divC(event) {
    const value = this.state.equation.toString()
    
    this.setState({ equation: value.replace(/\D$/, '') + "/" });
      
   }
   
   
   
   clear(event) {
     this.setState({
       equation: "0"
     })
   }

   
   
   
   render() {
     return (
       <div className="container-fluid">
         <div id="box">
           <div id="display">{this.state.equation}</div>
           <div className="buttons">
           <div className='row'>
            
             <button className="col btn btn-info calc" id="clear" onClick={this.clear}>A/C</button>
             <button className="col btn btn-info calc" id="decimal" onClick={this.decC}>.</button>
             <button className="col btn btn-info calc" id="divide" onClick={this.divC}>%</button>
             <button className="col btn btn-info calc" id="multiply" onClick={this.multC}>x</button>
            
          </div>
          <div className='row'>
            
             <button className="col btn btn-info calc" id="nine" onClick={this.nineC}>9</button>
             <button className="col btn btn-info calc" id="eight" onClick={this.eightC}>8</button>
             <button className="col btn btn-info calc" id="seven" onClick={this.sevenC}>7</button>
             <button className="col btn btn-info calc" id="add" onClick={this.plusC}>+</button>
             </div>
          
          <div className='row'>
             <button className="col btn btn-info calc" id="six" onClick={this.sixC}>6</button>
             <button className="col btn btn-info calc" id="five" onClick={this.fiveC}>5</button>
             <button className="col btn btn-info calc" id="four" onClick={this.fourC}>4</button>
             <button className="col btn btn-info calc" id="subtract" onClick={this.minusC}>-</button>
          </div>

          <div className="row">
              <button className="col btn btn-info calc" id="three" onClick={this.threeC}>3</button>
               <button className="col btn btn-info calc" id="two" onClick={this.twoC}>2</button>
               <button className="col btn btn-info calc" id="one" onClick={this.oneC}>1</button>
               <button className="col btn btn-info calc" id="equals" onClick={this.equals}>=</button>
             </div>
              
           <div className='row'>
             <button className="col btn btn-info calc" id="zero" onClick={this.zeroC}>0</button>
             <button className="col btn btn-info calc" id="power">On/Off</button>
             </div>
             
             </div>

            
             
          </div> 

          
             
             





         

       </div>
     )
   }
 }

 ReactDOM.render(<Calculator />, document.getElementById('root'))

export default Calculator;
