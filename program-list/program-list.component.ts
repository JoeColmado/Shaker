import { Component, OnInit } from '@angular/core';
import {AppStateService  } from "../services/app-state.service";

@Component({
  selector: 'app-program-list',
  templateUrl: './program-list.component.html',
  styleUrls: ['./program-list.component.css']
})
export class ProgramListComponent implements OnInit {

  constructor(public appStateService : AppStateService) { }

  ngOnInit(): void {
    // console.log(this.appStateService.allPrograms);

  }

}
