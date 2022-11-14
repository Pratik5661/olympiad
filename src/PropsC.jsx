import React from "react";
import C from "./Interview/ClassC";

class Parent extends React.Component{
    constructor(props){
        super(props);


    }
    render(){

        return(
            <>
                <Child name={'pratik'} age={'21'} Interest={'Coding'} />
            </>
        )
    }
}

class Child extends React.Component{
    render(){
        return(
            <>
            <h1>{this.props.name}</h1>
            <p>{this.props.age}</p>
            <h2>{this.props.Interest}</h2>
            </>
        )
    }
}
export default Parent;