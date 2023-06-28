import { Component,Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-technical',
  templateUrl: './technical.component.html',
  styleUrls: ['./technical.component.css']
})
export class TechnicalComponent {
  constructor(private router: Router) { }
  viewapplicant(){
    this.router.navigate(['/viewapplicant'],{queryParams:{logout:'success'}});
  }
  logout() {
    this.router.navigate(['/login'], { queryParams: { logout: 'success' } });
  }

}
