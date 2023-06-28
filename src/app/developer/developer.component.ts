import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})
export class DeveloperComponent {
  constructor(private router: Router) { }
 
  logout() {
    this.router.navigate(['/login'], { queryParams: { logout: 'success' } });
  }

  viewtech(){
    this.router.navigate(['/viewtech'],{ queryParams: {logout:'sucess'}});

  }
  viewdev(){
    this.router.navigate(['/viewdev'],{ queryParams: {logout:'sucess'}});
  }

}
