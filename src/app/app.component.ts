import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { clock } from './clock.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  //Clock
  time: any;
  Clock = true;
  ngOnInit(): void {
    let interval = setInterval(() =>{
      this.time = new Date();
    }, 1000);
  }
  
  
  //Stopwatch
  StopWatch = false;
  Sclock = 0;
  Sminutes = 0;
  Sseconds = 0;
  reset = false;
  resetWatch(){
    this.reset = true
    this.Sclock = 0;
    this.Sminutes = 0;
    this.Sseconds = 0;
  }
  startWatch(){

    let interval = setInterval(() =>{
      if (!this.reset) this.Sclock += 1;
      if(this.reset) clearInterval(interval);
      
      this.Sminutes = Math.floor(this.Sclock/60);
      this.Sseconds = this.Sclock - this.Sminutes*60;
      
    }, 1000)

    this.reset = false
  }
  
  
  //timer
  Timer = false;
  InputValue = 0;
  minutes = 0;
  seconds = 0;
  hours = 0;
  stop = '';

  LiveUpdate(){
    let inputSeconds = this.InputValue * 60;
    this.minutes = Math.floor(inputSeconds/60);
    this.seconds = inputSeconds - this.minutes * 60;
  }
  setTimer(){
    let inputSeconds = this.InputValue * 60;
    this.stop = 'start'
    if (inputSeconds > 0)
    {
      let interval = setInterval(()=>{
        if (this.stop == 'stop') 
        {
          inputSeconds = 0;
        }
  
        if(inputSeconds == 0 )
        {
          inputSeconds += 1;
          clearInterval(interval);
        }
        inputSeconds -= 1;
    
        this.minutes = Math.floor(inputSeconds/60);
        this.seconds = inputSeconds - this.minutes * 60;
  
      }, 1000) 
    }
  }
  stopClock(){
    this.stop = 'stop';
  }


//Hide and show
  toClock(){
    this.Clock = true;
    this.StopWatch = false;
    this.Timer = false

  }
  toStopWatch(){
    this.Clock = false;
    this.StopWatch = true;
    this.Timer = false;

  }
  toTimer(){    
    this.Clock = false;
    this.StopWatch = false;
    this.Timer = true;
  }
}
