import React, { Component } from 'react'
class Message extends Component{
    

constructor(){
  super()
  this.state={
    Message:'hello user'
  }
}

changeMessage(){
  this.setState({
    Message:"THANX"
  })
}

        render(){
          return(
        <div>
          <h1>
{this.state.Message}</h1>
<button onClick={()=>this.changeMessage()}> Subscribe</button>

        </div>

          )

        
    
 
}
}
export default Message