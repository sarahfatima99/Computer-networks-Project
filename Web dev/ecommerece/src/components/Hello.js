import React, { createElement } from "react"

const Hello=()=>{
    return React.createElement('div',null,createElement('h1',null,'Hello'))
}

export default Hello