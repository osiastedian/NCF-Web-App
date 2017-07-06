import { Component , ViewChild, AfterViewInit , ElementRef, } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public mainContent = 
  {
    marginRight : 0,    
  };
  public loginSidebar = 
  {
    display: "block",
    width: 0
  };
  
  
  title = 'Northview Christian Fellowship';
  toggled = false;
  private _toggleLogin()
  {
    this.toggled = !this.toggled;
  }
}
