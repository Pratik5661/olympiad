import React  from "react";


class C extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: 'pratik',
            age: '21'
        }
    }
    render() {
    
        return(
            <>
            <h2>CLass Component</h2>
        <h1>{this.state.name}</h1>
        <h3>{this.state.age}</h3>
            </>
        )
    }
}
export default C