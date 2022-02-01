import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayDetails: Boolean = false;
  buttonClicks: Array<string> = [];
  

  showDetails(): void {
    var newDate = new Date();
    
    // Adds Date to Array
    this.buttonClicks.push(
      newDate.toLocaleString()
    );
    
    // Changes the Value
    this.displayDetails = !this.displayDetails;
  }
}
