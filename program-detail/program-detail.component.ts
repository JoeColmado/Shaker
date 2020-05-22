import { Component, OnInit } from '@angular/core';
import {Program  } from "../services/program";
import {ActivatedRoute, Router, RouterModule, Routes  } from "@angular/router";
import {AppStateService  } from "../services/app-state.service";

@Component({
  selector: 'app-program-detail',
  templateUrl: './program-detail.component.html',
  styleUrls: ['./program-detail.component.css']
})
export class ProgramDetailComponent implements OnInit {

  selectedProgram: Program
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public appStateService: AppStateService

  ) {
    this.route.params.subscribe( (params : Program) => this.selectedProgram= params );
  }

  ngOnInit(): void {
  }
  onClose(){
     this.router.navigate([''])
  }
  onEdit(){
    console.log('edit');
  }
  onDelete(){
    if (window.confirm('Are you sure')) {
      console.log('delete');
    }

  }
  onProcess(){

    if (this.appStateService.timerActive) {
      window.alert('You are running another program!!!\n Please finish it before running a new one')
      this.router.navigate(['processControl',this.appStateService.activeProgram]);
    }
    else{
      this.router.navigate(['processControl',this.selectedProgram]);
    }

  }



}
