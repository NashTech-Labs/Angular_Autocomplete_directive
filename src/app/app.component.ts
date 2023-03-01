import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-autocomplete-directive';

  profileForm: FormGroup= new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    streetAddress1: new FormControl(''),
    streetAddress2: new FormControl(''),
    city: new FormControl(''),
    country: new FormControl(''),
    province: new FormControl(''),
  });


  submit(){
    console.log(this.profileForm.value);
  }
}
