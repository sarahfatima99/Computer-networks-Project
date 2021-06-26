import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import ReactDOM from 'react-dom';

class ThemeSwitcher extends Component {

  state = { theme: null }
  
  resetTheme = evt => {
    evt.preventDefault();
    this.setState({ theme: null });
  }
  
  chooseTheme = (theme, evt) => {
    evt.preventDefault();
    this.setState({ theme });
  }
  
  render() {
  
    const { theme } = this.state;
    const themeClass = theme ? theme.toLowerCase() : 'secondary';
    
    return (
        <div>
        <nav class="navbar navbar-light bg-light">
        <a class="navbar-brand" href="#">
          <img src="unexpand.svg" width="30" height="60" class="d-inline-block align-top" alt=""/>
    
        </a>
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
              <a class="nav-link" href="#"> 
                <img src="logo.png" class="cart-img" alt=""/>
              </a>
          </li>
          </ul>
      </nav>
      </div>
    );
    
  }
  
}

export default ThemeSwitcher;