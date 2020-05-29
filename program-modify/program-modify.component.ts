import { Component, OnInit } from '@angular/core';
import {Program} from '../services/program';
import {ActivatedRoute, Router, RouterModule, Routes} from '@angular/router';
import {AppStateService} from '../services/app-state.service';
import { FormGroup, FormControl } from "@angular/forms";



@Component({
  selector: 'app-program-modify',
  templateUrl: './program-modify.component.html',
  styleUrls: ['./program-modify.component.css']
})
export class ProgramModifyComponent implements OnInit {
  selectedProgram: Program;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public appStateService: AppStateService
  ) {
    this.route.params.subscribe((params: Program) => this.selectedProgram = params);

  }

  ngOnInit(): void {
    this.setDefaultValues();
  }
  selectedFormPage: number = 0;

  newProgram = new FormGroup({
    Name: new FormControl(""),
    Medium: new FormControl(""),
    Compound: new FormControl(""),
    Time: new FormControl(""),
    Frequency: new FormControl(""),

  })

  setDefaultValues(){
    this.newProgram.get('Name').setValue(this.selectedProgram.Name);
    this.newProgram.get('Medium').setValue(this.selectedProgram.Medium);
    this.newProgram.get('Compound').setValue(this.selectedProgram.Compound);
    this.newProgram.get('Time').setValue(this.selectedProgram.Time);
    this.newProgram.get('Frequency').setValue(this.selectedProgram.Frequency);
  }
  goTolistView(){
    this.router.navigate(['']);

  }

  nextPage(){
    this.selectedFormPage=1;
  }
  prevPage(){
    this.selectedFormPage=0;
  }

  modifyAttr(attr: string){
    console.log(this.newProgram.value[attr]);

    let modifyData={
      id: this.selectedProgram.Id,
      attr: attr,
      value: this.newProgram.value[attr],
    }
    this.appStateService.modifyAttr(modifyData);
  }
  deleteProgram(){
    let data = {
      id: this.selectedProgram.Id,
    }
    this.appStateService.deleteProgram(data);
    this.router.navigate(['']);
  }


}
