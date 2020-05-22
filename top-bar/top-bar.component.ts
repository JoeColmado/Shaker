
import { Component, OnInit,EventEmitter,Input, Output } from '@angular/core';
import {AppStateService  } from "../services/app-state.service";
@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  constructor(public appStateService: AppStateService) { }
  @Output() toggleSideBar:  EventEmitter<string> = new EventEmitter<string>();


  ngOnInit(): void {
  }
  toggleSideBarHandler(){
    this.toggleSideBar.emit('toggleSideBar');
  }


}
