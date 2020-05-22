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

}
