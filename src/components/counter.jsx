import React, { Component} from 'react';
class Counter extends Component{
    
    state ={
        counter:0
    };
incrementCounter = ()=>{
    this.setState({counter: ++this.state.counter});
    console.log(this.state.counter);
}
   
  render(){
      return (
    <div>
     <span className='badge'>{this.state.counter === 0? 'Zero': this.state.counter}</span>
              <button className="btn btn-success" onClick={this.incrementCounter.bind(this)}>Increment</button>
    </div>
  );
  }
}

export default Counter