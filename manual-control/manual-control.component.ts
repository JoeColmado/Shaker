import { Component, OnInit } from '@angular/core';
import {AppStateService  } from "../services/app-state.service";
@Component({
  selector: 'app-manual-control',
  templateUrl: './manual-control.component.html',
  styleUrls: ['./manual-control.component.css']
})
export class ManualControlComponent implements OnInit {

  constructor(private appStateService : AppStateService) { }

  ngOnInit(): void {
  }
// ---------OnOFF
  deviceActive: boolean= false;
  activateDevice(){
    this.deviceActive = true;
    this.appStateService.switchDeviceOn();
  }
  deactivateDevice(){
    this.deviceActive = false;
    this.appStateService.switchDeviceOff();
  }
  //-------------Frequency
  manualFrequency: number = 2.5;
  increaseFrequency(){
    this.manualFrequency += 0.5;
    this.appStateService.setFrequency(this.manualFrequency);
  }
  decreaseFrequency(){
    this.manualFrequency -= 0.5;

    this.appStateService.setFrequency(this.manualFrequency);
  }

  //---Device States
    setDeviceCreated(){
    this.appStateService.setDeviceCreated();
  }
  setDeviceReady(){
    this.appStateService.setDeviceReady();
  }
  setDeviceProcessing(){
    this.appStateService.setDeviceProcessing();
  }
  setDeviceError(){
    this.appStateService.setDeviceError();
  }

  inputActive: boolean =  false;
  inputOnFocus(){
    this.inputActive =true;
  }
  inputOffFocus(){
    this.inputActive =false;
  }
  windowHeight: number;
  windowWidth: number;
  showWindowsize(){
    this.windowHeight = window.innerHeight;
    this.windowWidth = window.innerWidth;
  }

}
