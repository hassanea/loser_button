import React, { Component } from 'react';
//import Button from '@material-ui/core/Button';
import loser_sound from './audio/Dogbert_Loser.mp3';

class Button extends Component {
    
    
handleBtnClick = () => {
  console.log('Audio play!')
  console.log('<i className="fas fa-volume-up"></i>')    
const audio = document.getElementsByClassName("audio-element")[0]
    audio.play()
    }
    
      
    render() {
        
        const btnText = "Loser!!!";
        const mr = {
            marginRight: '16px'
        };
        
    return (
      <div>
    <button className="loserBtn btn btn-lg" onClick={() => this.handleBtnClick()}>
      <span style={mr}><i className="far fa-grin-tongue-squint fa-2x"></i></span>    
      {btnText}
    </button>
       <audio className="audio-element">
          <source src={loser_sound}></source>
        </audio>
      </div>
    );
  }   
}

export default Button;