import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatChipsModule } from '@angular/material/chips';

import { GooglemapsService } from '../googlemaps.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'parksAndRec';
  zipcode = '';
  parks = [];

  constructor(private service: GooglemapsService) {

  }

  submit() {
    console.log('submit button clicked');
    console.log(this.zipcode);

    this.service.search().then(
      response => {
        console.log(response.results);
        this.parks = response.results;
      }
      // ,
      // error => {
      //   console.log(error);
      // }
    );




  }



}