import React from "react";
// import ComponentA from "./ComponentA";
import TimerOne from "./Components/Timer/TimerOne";

class App extends React.Component{

  constructor(){
    super();
    this.state={
      timerOn:false
    }
  }

  handleTimerOn = ()=>{
    this.setState((prevState)=>({timerOn:!prevState.timerOn}));
  }

  render(){
    return (

      <>

      <TimerOne timerOn = {this.state.timerOn} />
      <button onClick={this.handleTimerOn}>{this.state.timerOn?"STOP":"START"}</button>

  
        
      </>
      
    );
  }
}

export default App;
