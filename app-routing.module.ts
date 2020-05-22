import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManualControlComponent } from "./manual-control/manual-control.component";
import { ProgramControlComponent } from "./program-control/program-control.component";
import { ProgramDetailComponent } from './program-detail/program-detail.component';
import { ProcessControlComponent } from './process-control/process-control.component';
import { ProgramListComponent } from './program-list/program-list.component';


const routes: Routes = [
  {path:'manualControl', component:ManualControlComponent },
  {path:'', component:ProgramControlComponent },
  {path:'programDetail', component:ProgramDetailComponent },
  {path:'processControl', component:ProcessControlComponent },
  {path:'programControl', component:ProgramListComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
