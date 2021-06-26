import React, { Component } from 'react'
import './styless.css'
import 'bootstrap/dist/css/bootstrap.min.css';
export class Navbar extends Component {
    render() {
        return (
            <div>
                {/* <!-- Navbar --> */}
<nav class="navbar navbar-expand-md navbar-light">

  <a class="navbar-brand" href="#!">
  <img src="https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.png" height="30" alt="mdb logo"/>
 
  </a>

  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav1"
    aria-controls="basicExampleNav1" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="basicExampleNav1">

    <ul class="navbar-nav ml-auto">
       <li class="nav-item" >
        <a href="#!"  class="home nav-link waves-effect">
          Home
        </a>
      </li>
    
      <li class="nav-item pl-2 my-2 my-sm-0 btn">
        <a href="#!" type="button"
          class="btn btn-outline-info btn-md btn-rounded btn-navbar waves-effect waves-light">Sign up</a>
      </li>
      <li class="nav-item pl-2 my-2 my-sm-0 btn">
        <a href="#!" type="button"
          class="btn btn-outline-info btn-md btn-rounded btn-navbar waves-effect waves-light">Sign in</a>
      </li>
    </ul>

  </div>
</nav>
            </div>
        )
    }
}

export default Navbar
