import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'parksAndRec';
  zipcode;

  submit() {
    console.log('submit button clicked');
    console.log(this.zipcode);






  }



}