import React, { Component } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import './styless.css'
// eslint-disable-next-line
export class button extends Component {
    render() {
        return (
            <div>
                <button type="button" className="btn btnproducts btn-outline-info info"  style={{borderColor:'white',borderRadius: '70%'}}>Prod1</button>
                <button type="button" class="btn btnproducts btn-outline-info info"  style={{borderColor:'white',borderRadius: '70%'}}>Prod2</button>
                <button type="button" class="btn btnproducts btn-outline-info info"style={{borderColor:'white' ,borderRadius: '70%'}}>Prod3</button>
            </div>
        )
    }
}

export default button
