import { Component } from "react";

export default class ErrorBoundary extends Component{
    constructor(){
        super();

        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError(error){

        return {             // it will directly set this.state.hasError to true
            hasError:true
        };
       
    }

    componentDidCatch(error,info){
        console.log("Error : ",error);
        console.log("Error Info : ",info);
    }

    render(){

        if(this.state.hasError){
            return (<h1>Something went wrong, Contact Admin</h1>)
        }

        return this.props.children // self note : components which will be enclosed inside ErrorBoundary component will become ErrorBoundary children (these children will be passed EB using props)
    }
}