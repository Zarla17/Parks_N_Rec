import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { GooglemapsService } from '../googlemaps.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'parksAndRec';
  zipcode = '';

  constructor(private service: GooglemapsService) {

  }

  submit() {
    console.log('submit button clicked');
    console.log(this.zipcode);

    this.service.search().subscribe(res => {
      console.log(res);
    });




  }



}