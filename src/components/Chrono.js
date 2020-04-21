import React, { Component } from 'react';

class Chrono extends Component {
    
    state = {
        numOfSecons : 0,
    }

    timerId = 0

    startTimer = () => {
        if(!this.timerId){     
          this.timerId = setInterval(()=>{
            this.setState({numOfSecons : this.state.numOfSecons+1})
          }, 1000);
        }
      }
      
    stopTimer = () => {
        clearInterval(this.timerId);
        this.timerId = 0;
    }

    resetTimer = () => {
        this.setState({numOfSecons : 0})
    }

    _convertToStringWithTwoDigits(number) {
        return (number / 100).toFixed(2).split('.')[1];
    }

    render() {
        const seconds = this._convertToStringWithTwoDigits(this.state.numOfSecons % 60); // remaining seconds 
        const minutes = this._convertToStringWithTwoDigits(Math.floor(this.state.numOfSecons / 60) % 60); // remaining minutes
        const hours = this._convertToStringWithTwoDigits(Math.floor(this.state.numOfSecons / 60 / 60)); // number of hours
    
        return (
            <div id="root">
                <h1>My Chrono</h1>
                <div id="timer">
                    {hours}:{minutes}:{seconds}
                </div>
                <button onClick={this.startTimer}>Start</button>
                <button onClick={this.stopTimer}>Stop</button>
                <button onClick={this.resetTimer}>Reset</button>
            </div>
        );
    }
};
    
export default Chrono;