import { Component } from '@angular/core';
import { TopBarComponent } from "./top-bar/top-bar.component";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {


  sideBarOpen: boolean = false;
  toggleSideBar(){
    this.sideBarOpen = !this.sideBarOpen;

  }
  openSidebar() {
    this.sideBarOpen = true;
  }

  closeSidebar() {
    this.sideBarOpen = false;
  }

}
