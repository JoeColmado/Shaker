import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import {ActivatedRoute, Router, RouterModule, Routes  } from "@angular/router";

import {AppStateService} from '../services/app-state.service';

@Component({
  selector: 'app-program-editor',
  templateUrl: './program-editor.component.html',
  styleUrls: ['./program-editor.component.css']
})
export class ProgramEditorComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private appStateService: AppStateService,
  ) { }
  ngOnInit(): void {
  }
  selectedFormPage: number = 0;

  newProgram = new FormGroup({
    Name: new FormControl(''),
    Medium: new FormControl(''),
    Compound: new FormControl(''),
    Time: new FormControl(''),
    Frequency: new FormControl(''),

  })

  nextPage(){
    this.selectedFormPage=1;
  }
  prevPage(){
    this.selectedFormPage=0;
  }
  showData(): void{
    console.log(this.newProgram.value);
  }
  saveProgram(){
    this.appStateService.insertNewProgram(this.newProgram.value);
    this.router.navigate(['']);
  }

}
