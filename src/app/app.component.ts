import { Component } from '@angular/core';
import { User } from './user';
import { EnrollmentService } from './enrollment.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'registration-app';

  submitted = false;
  errorMessage = '';
  userModel = new User('', '');

  constructor(private _enrollmentService: EnrollmentService){}

  onSubmit() {
    this.submitted = true;
    this._enrollmentService.enroll(this.userModel)
    .subscribe(
      data => console.log('Success', data),
      error => this.errorMessage = error.statusText
    )
  }
}
