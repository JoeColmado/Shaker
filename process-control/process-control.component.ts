import { Component, OnInit, OnDestroy } from '@angular/core';
import {ActivatedRoute, Router, RouterModule, Routes  } from "@angular/router";
import {AppStateService  } from "../services/app-state.service";


import {Program  } from "../services/program";

@Component({
  selector: 'app-process-control',
  templateUrl: './process-control.component.html',
  styleUrls: ['./process-control.component.css']
})
export class ProcessControlComponent implements OnInit {

  selectedProgram: Program

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public appStateService: AppStateService
    ){
      //Selected Program given in the routing navigation
      this.route.params.subscribe( (params : Program) => this.selectedProgram= params );
     }

  ngOnInit(): void {
    if (!this.appStateService.timerActive) {
      this.appStateService.setDeviceReady();
      this.appStateService.setTimeLeft(this.selectedProgram.Time);
      this.appStateService.setFrequency(this.selectedProgram.Frequency);
    }
  }
  ngOnDestroy(): void{
    if (this.appStateService.timerActive) {
    }
    else{
    this.appStateService.stopProgram();
    }
  }
  onClose(){
    this.router.navigate([''])
  }
  onRunDevice(){
    this.appStateService.startProgram();
    this.appStateService.setActiveProgram(this.selectedProgram);
  }
  onStopDevice(){
    this.appStateService.pauseProgram();
  }
  onProgramFinish(){
    this.appStateService.setDeviceFinished();
  }
  onRestartProgram(){
    this.resetTimer()
    this.onRunDevice();
  }
  resetTimer(){
    console.log(this.selectedProgram.Time)
    this.appStateService.setTimeLeft(this.selectedProgram.Time);
  }
  decreaseLeftTime(){
    this.appStateService.decreaseLeftTime();
  }
  increaseLeftTime(){
    this.appStateService.increaseLeftTime();
  }
  //Frequency Control

  increaseFrequency(){
    this.appStateService.increaseFrequency()
  }
  decreaseFrequency(){
    this.appStateService.decreaseFrequency();
  }

}
