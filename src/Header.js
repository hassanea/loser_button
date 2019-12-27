import React, { Component } from 'react';
import dogBertPic from './images/Dogbert.png';


class Header extends Component {
    
    
    render() {
        
        const headTitle = 'Dogbert\'s Loser Clicker';
        
    return (
      
        <header className="App-header">
          <img src={dogBertPic} className="App-img" alt="Dogbert" />
          <h1>{headTitle}</h1>
          <i className="fas fa-link"></i> 
          <a href="https://dilbert.com" target="_blank" rel="noopener noreferrer" className="App-link">Read more Dilbert cartoons here!</a>
        </header>
    );
  }   
}

export default Header;