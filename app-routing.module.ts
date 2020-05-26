import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManualControlComponent } from "./manual-control/manual-control.component";
import { ProgramDetailComponent } from './program-detail/program-detail.component';
import { ProcessControlComponent } from './process-control/process-control.component';
import { ProgramListComponent } from './program-list/program-list.component';
import {ProgramEditorComponent} from './program-editor/program-editor.component';
import {ProgramModifyComponent} from './program-modify/program-modify.component';


const routes: Routes = [
  {path:'manualControl', component:ManualControlComponent },
  {path:'', component:ProgramListComponent },
  {path:'programDetail', component:ProgramDetailComponent },
  {path:'processControl', component:ProcessControlComponent },
  {path:'programControl', component:ProgramListComponent },
  {path:'programEditor' , component: ProgramEditorComponent},
  {path:'programModify' , component: ProgramModifyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
