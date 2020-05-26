import { Injectable } from '@angular/core';
import {  Program} from "./program";
import { Timer} from "./timer";

import { Hardware } from "./hardware";
import { DB } from "./db";

import {HttpClient, HttpParams, HttpHeaders} from "@angular/common/http";
import{Observable} from 'rxjs'
import { retry } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})

export class AppStateService {
  allPrograms : Program[]
  hardwareControl: Hardware
  dataBase: DB

  constructor(
    public http: HttpClient
  )
  {
    //initialising Objects
    this.hardwareControl = new Hardware(this.http);
    this.hardwareControl.initHardware();
    this.dataBase = new DB(this.http);
    this.getAllPrograms();
  }

// --DB Functionalities
  getAllPrograms(){
    this.dataBase.getAllPrograms()
    .subscribe((data:any)=> {
      this.allPrograms = data;
      })
    }
    insertNewProgram(newProgram){
      console.log(newProgram);
      this.dataBase.insertNewProgram(newProgram)
      .subscribe((data:any)=> {
        this.allPrograms = data;
      })
    }
    modifyAttr(modifyData:any){
      this.dataBase.modifyAttr(modifyData)
      .subscribe((data:any)=> {
        this.allPrograms = data;
      })
    }
    deleteProgram(deleteData){
      console.log(deleteData);
      this.dataBase.deleteProgram(deleteData)
      .subscribe((data:any)=> {
        this.allPrograms = data;
      })
    }




  // 0 Created 1 Ready 2 Processing 3 Error 4 finished
  readyState : number = 0;
  //getting the programs
  activeProgram : Program;

  switchDeviceOn(){
    this.hardwareControl.switchDeviceOn();
  }
  switchDeviceOff(){
    this.hardwareControl.switchDeviceOff();
  }

  //Frequenz
  processFrequency: number;

  setFrequency(newFrequency: number){
    this.processFrequency =newFrequency;
    this.setDeviceFrequency();
  }
  increaseFrequency(){
    this.processFrequency -= -0.5;
    this.setDeviceFrequency();
  }
  decreaseFrequency(){
    this.processFrequency -= 0.5 ;
    this.setDeviceFrequency();
  }


  setDeviceFrequency(){
    this.hardwareControl.setDeviceFrequency(this.processFrequency);
  }


  setDeviceCreated(){
    this.readyState = 0;
    this.unsetActiveProgram();
  }
  setDeviceReady(){
    this.switchDeviceOff();
    this.readyState = 1;
  }
  setDeviceProcessing(){
    this.switchDeviceOn();
    this.readyState = 2;
  }
  setDeviceError(){
    this.switchDeviceOff();
    this.readyState = 3;
  }
  setDeviceFinished(){
    this.switchDeviceOff();
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
  onProgramFinish(){
    this.pauseTimer();
    this.setDeviceFinished();
  }
// TODO: Put timer in seperate file
// Timer
// timer = new Timer(this.testFunction);
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
        this.createTimeLeftString()
      } else {
        this.onProgramFinish()
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
    timeString = leftMin+ ' min : ' + leftSec + ' s';
    this.timeLeftString = timeString;
  }
  twoDigitTransform(n: number ){
      let input : number = n;
      return n > 9 ? "" + input: "0" + input;
  }
}
