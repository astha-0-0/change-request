import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute, Router } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  constructor(private route: ActivatedRoute, private router: Router) { }
  ngOnInit(): void {}

  getrouterLink(): string {
    const currentRoute = this.router.routerState.snapshot.url;

    if (currentRoute.includes('/form-appl') || currentRoute.includes('/applicant')) {
      return '/applicant';
    } else if (currentRoute.includes('/devform') || currentRoute.includes('/viewtech')) {
      return '/developer';
      
    }else if (currentRoute.includes('/viewdev') || currentRoute.includes('/developer')) {
      return '/developer';
      
    } else if (currentRoute.includes('/tech-form') || currentRoute.includes('/viewapplicant') || currentRoute.includes('/technical')) {
      return '/technical';
    }else{
      return '/';}
    
  }
  getformLink(): string {
    const currentRoute = this.router.routerState.snapshot.url;

    if (currentRoute.includes('/applicant') || currentRoute.includes('/form-appl')) {
      return '/form-appl';
    } else if (currentRoute.includes('/developer') || currentRoute.includes('/devform') || currentRoute.includes('/viewtech')) {
      return '/devform';
    }else if (currentRoute.includes('/viewdev')) {
      return '/devform';
    } else {
      return '/tech-form';
    }

  }
 
  logout() {
    this.router.navigate(['/login'], { queryParams: { logout: 'success' } });
  }



}
