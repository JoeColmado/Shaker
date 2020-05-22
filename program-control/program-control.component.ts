import { Component, OnInit } from '@angular/core';
import {AppStateService  } from "../services/app-state.service";

@Component({
  selector: 'app-program-control',
  templateUrl: './program-control.component.html',
  styleUrls: ['./program-control.component.css']
})
export class ProgramControlComponent implements OnInit {

  constructor(public appStateService : AppStateService) { }

  ngOnInit(): void {
    console.log(this.appStateService.allPrograms);

  }

}
