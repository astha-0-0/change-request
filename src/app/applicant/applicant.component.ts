import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
//import { AuthGuard } from '../auth.guard';

@Component({
  selector: 'app-applicant',
  templateUrl: './applicant.component.html',
  styleUrls: ['./applicant.component.css']
})
export class ApplicantComponent {
  constructor(private router: Router) { }
 
  logout() {
    this.router.navigate(['/login'], { queryParams: { logout: 'success' } });
  }
  

}
