import React, { Component } from 'react';



class Info extends Component {
    constructor(props) {
      super()
        this.state={
            null:null,  
            goodbye:this.props.auRevoir //instantiate new state
        }
    }  
    render(){
    //   return(<h1>{this.state.hello}</h1>)
      return(<h1>{this.state.goodbye}</h1>)
    }
  }
  
  export default Info;

  // states can be altered, props cannot