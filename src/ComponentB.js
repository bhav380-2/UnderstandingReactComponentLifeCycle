import React from "react";

class ComponentB extends React.Component{

    constructor(){
        super();
        this.state = {
            name : "ComponentB"
        }

        console.log("ComponentB Constructor",this.state.name)
    }

    static getDerivedStateFromProps(){

     

        console.log("ComponentB get derived state from props");
        return null;
    }

    componentDidMount(){
       
        console.log("ComponentB componentDidMount");
        // return null;

    }




    render(){

        
        console.log("Component B render");
        return (<h2>ComponentB</h2>)

    }
}

export default ComponentB;