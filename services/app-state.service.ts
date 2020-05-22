import { Injectable } from '@angular/core';
import { AllPrograms } from "./mock-programs";
import {  Program} from "./program";
import { Hardware } from "./hardware";


@Injectable({
  providedIn: 'root'
})
export class AppStateService {
  hardwareControl = new Hardware();
  // 0 Created 1 Ready 2 Processing 3 Error 4 finished
  readyState : number = 0;
  //getting the programs
  allPrograms= AllPrograms
  activeProgram : Program;

  constructor() {
    this.hardwareControl.initHardware();
  }
  setDeviceCreated(){
    this.readyState = 0;
    this.unsetActiveProgram();
  }
  setDeviceReady(){
    this.readyState = 1;
  }
  setDeviceProcessing(){
    this.readyState = 2;
  }
  setDeviceError(){
    this.readyState = 3;
  }
  setDeviceFinished(){
    this.readyState = 4;
  }
  setActiveProgram(newProgram: Program){
    this.activeProgram = newProgram;
  }
  unsetActiveProgram(){
  }
  startProgram(){
    this.setDeviceProcessing();
    this.startTimer();
  }
  stopProgram(){
    this.pauseTimer()
    this.setDeviceCreated();
    this.stopTimer();
  }
  pauseProgram(){
    this.pauseTimer()
    this.setDeviceReady();
  }
//Frequenz
  processFrequency: number;
  setFrequency(newFrequency: number){
    this.processFrequency =newFrequency;
  }
  increaseFrequency(){
    this.processFrequency++
  }
  decreaseFrequency(){
    this.processFrequency--;
  }
// Timer
  interval ;
  timerActive: boolean;
  timeLeftString:string ="";
  timeLeft: number;

  setTimeLeft(time: number){
    this.timeLeft = time;
    this.createTimeLeftString()
  }

  startTimer() {
    this.timerActive = true;
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
        console.log(this.timeLeft);
        this.createTimeLeftString()
      } else {
        this.pauseTimer();
        this.setDeviceFinished();
      }
    },1000)
  }
  pauseTimer() {
    clearInterval(this.interval)
    this.timerActive = false;
    // this.timeLeftString= '';
  }
  stopTimer() {
    clearInterval(this.interval)
    this.timerActive = false;
    this.timeLeft = 0;
    this.createTimeLeftString()
  }
  decreaseLeftTime(){
    if (this.timeLeft > 60) {
      this.timeLeft -= 60;
      this.createTimeLeftString();
    }
  }
  increaseLeftTime(){
    this.timeLeft -=  -60 ;
    this.createTimeLeftString();
  }
  createTimeLeftString(){
    let leftMin = this.twoDigitTransform(Math.floor(this.timeLeft / 60));
    let leftSec = this.twoDigitTransform(Math.floor(this.timeLeft % 60));
    let timeString: string;
    timeString = leftMin+ 'min : ' + leftSec + 's';
    this.timeLeftString = timeString;
  }
  twoDigitTransform(n: number ){
      let input : number = n;
      return n > 9 ? "" + input: "0" + input;
  }
}
