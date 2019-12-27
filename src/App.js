import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
/* Refer to this tutorial:  https://coderrocketfuel.com/article/how-to-play-a-mp3-sound-file-in-react-js */
import './App.css';
import LoserButton from './LoserButton.js';
import About from './About.js';


// Reference:  https://stackoverflow.com/questions/47686345/playing-sound-in-reactjs
//               https://material-ui.com/api/button/


class App extends Component {
    
    
constructor(props) {  
  super(props);    
this.state = {
    
     };
}
    
    
  render() {
    return (
      <div className="App">
       <Switch>
        <Route exact path='/' render={() => (
        <LoserButton/>
        )}/>
        
        <Route exact path='/about' render={() => (
        <About/>
        )}/>
        
       </Switch>    
      </div>
    );
  }
}

export default App;
