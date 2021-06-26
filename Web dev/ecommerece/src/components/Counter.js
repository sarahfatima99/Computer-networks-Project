import React, { Component } from 'react'

import './styless.css'
import 'bootstrap/dist/css/bootstrap.min.css';

  class Counter extends Component {

    
 constructor(props) {
    super(props)

    this.state = {
         count:0
    }
}

increement(){
this.setState( {
   count:this.state.count+1
})
   
}

decrease (){
    this.setState( {
       count:this.state.count-1,
     
    })
   
       
    }
    render() {
        return (
            <div>
    
<div width>
                <button class="myButton" style={{float:'left'}} onClick={()=>this.increement()}>
                    +
                    </button>
                    <h5 style={{float:'left', marginTop:'5px',marginLeft:'10px', marginRight:'10px'}}> {this.state.count} </h5>
                    <button class="myButtondec" style={{float:'left'  } }onClick={()=>this.decrease()}>
                    -
                    </button >
                    </div>
                    </div>
    
        )
    }
}

export default Counter
