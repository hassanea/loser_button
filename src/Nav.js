import React, { Component } from 'react';
import logo from './images/dilbert-dogbert-logo.png';


class Nav extends Component {
    
    
    render() {
    return (
<div>        
  <nav className="navbar" aria-label="Navigation">
    <section className="navbar-section">    
       <a href="/" className="btn btn-link tooltip tooltip-bottom" data-tooltip="Home" aria-label="Home"><i className="fas fa-home fa-2x"></i></a>
    </section>
    <section className="navbar-center">
      <img src={logo} alt="Dilbert logo" className="App-logo s-circle"/>     
    </section>
    <section className="navbar-section"> 
       <a href="/about" className="btn btn-link tooltip tooltip-bottom" data-tooltip="About" aria-label="About"><i className="fas fa-info-circle fa-2x"></i></a>
    </section>
   </nav>
</div>
    );
  }   
}

export default Nav;