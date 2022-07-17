import React, { Component } from "react";

class Counter extends Component{
    constructor(props){
        super(props)
        
        this.state = {
            count:0
        }
    }

    increment(){
        this.setState({
            count:this.state.count + 1
        });
    }
    
    decrement(){
        this.setState({
            count:this.state.count - 1
        });
    }

    render(){
        return(
            <div className="counter">
                <h1>Welcome to the Counter App!</h1>
                <h2 id="cont">Count  -&#62;  {this.state.count}</h2>
                <div className="buttons">
                <button type="button" onClick={() => this.decrement()} id="dec">Decrement</button>
                <button type="button" onClick={() => this.increment()}>Increment</button>
                </div>
            </div>
        );
    }
}
export default Counter;