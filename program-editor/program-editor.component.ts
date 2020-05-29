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
    if (this.checkUserInput()) {
      this.appStateService.insertNewProgram(this.newProgram.value);
      this.router.navigate(['']);
    }
    else{
      window.alert(this.errorMessage)
    }

  }
  errorMessage: string
  checkUserInput(){
    let success : boolean = true;
    //Name
    if (this.newProgram.value.Name.length > 1) {
    }
    else{
      this.errorMessage ='unvalid Name'
      success = false;
      return success;
    }

    //Time
    if (typeof(this.newProgram.value.Time) == 'number' && this.newProgram.value.Time > 0) {
    }
    else{
      success = false;
      this.errorMessage ='unvalid Time'
      return success;
    }
    //Frequency
    if (typeof(this.newProgram.value.Frequency) == 'number' && this.newProgram.value.Frequency > 0 && this.newProgram.value.Frequency < 22) {
      success = true;
    }
    else{
      success = false;
      this.errorMessage ='Frequency has to be a number from 0-22'
      return success;
    }


    return success;
  }

}
