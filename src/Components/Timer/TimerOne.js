import React from "react";

export default class Timer extends React.Component{

    constructor(){
        super();

        this.state = {
            time:0
        }

        this.timer = null;

        console.log("TimerOne Constructor");
    }

    static getDerivedStateFromProps(){
        console.log("TimerOne getDerivedStateFromProps");
        return null;
    }

    shouldComponentUpdate(nextProps,nextState){
        return true;
    }

    
    render(){
        console.log("TimerOne render");
        return(
                <>
                  <h1>Time Spent :  </h1>
                  {new Date(this.state.time*1000).toISOString().slice(11,19)}
                </>
            );
    }

    componentDidMount(){
        console.log("TimerOne componentDidMount");

        this.timer = setInterval(()=>{
            this.setState((prevState)=>({
                time:prevState.time+0.5
            }))
        },1000);




    }

    getSnapshotBeforeUpdate(prevProps,prevState){

        console.log("TimerOne getSnapshotBeforeUpdate");
        return null;
    }

    componentDidUpdate(prevProps,prevState,snapShot){
        console.log("TimerOne componentDidUpdate");
        console.log("_______________");

        console.log("Previous props : ",prevProps);
        console.log("Previous State : ", prevState);
        console.log("Snapshot from getSnapshotBeforeUpdate: ",snapShot);
    }

    componentWillUnmount(){

        clearInterval(this.timer);

    }





}