import React from "react";
import ComponentB from "./ComponentB";

class ComponentA extends React.Component{

    constructor(){
        super();
        this.state = {
            name : "ComponentA",
            data : []
        }

        console.log("Component A Constructor",this.state.name)
    }

    static getDerivedStateFromProps(){

     

        console.log("componentA get derived state from props");
        return null;
    }

    componentDidMount(){
       
        console.log("ComponentA componentDidMount");
        // return null;

        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response=> response.json())
        .then(data=> this.setState({data}))


    }




    render(){

        
        console.log("Component A render");
        return (

            <>
              <h1>{this.state.name}</h1>

              <ul>

                {this.state.data.map((d,index)=>{
                    return(
                        <li key={index}>{d.username}</li>
                    )
                })}


              </ul>
             

            
            </>
        
        )

    }
}

export default ComponentA;