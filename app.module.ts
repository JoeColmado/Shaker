import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Router } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from "@angular/common/http";



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { AppStateService } from "./services/app-state.service";
import { ManualControlComponent } from './manual-control/manual-control.component';
import { ProgramControlComponent } from './program-control/program-control.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProgramDetailComponent } from './program-detail/program-detail.component';
import { ProcessControlComponent } from './process-control/process-control.component';
import { ProgramListComponent } from './program-list/program-list.component';
import { ProgramEditorComponent } from './program-editor/program-editor.component';
import { ProgramModifyComponent } from './program-modify/program-modify.component';


@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    ManualControlComponent,
    ProgramControlComponent,
    ProgramDetailComponent,
    ProcessControlComponent,
    ProgramListComponent,
    ProgramEditorComponent,
    ProgramModifyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,    //added here too
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [AppStateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
