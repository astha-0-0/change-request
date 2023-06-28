import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  role: string = '';
  loginError:string|null=null;
  isErrorMessageVisible: boolean = false;

  constructor(private authService: AuthService, private router: Router,private http: HttpClient) {}

  login(): void {
    this.http.get<any[]>('assets/users.json').subscribe(users => {
      const foundUser = users.find(user => user.username === this.username && user.password === this.password);
  
      if (foundUser) {
        this.authService.login(this.username, this.password).subscribe(isLoggedIn => {
          if (isLoggedIn) {
            if (this.username === 'abc') {
              this.router.navigate(['/applicant']);
            } else if (this.username === 'xyz') {
              this.router.navigate(['/technical']);
            } else if (this.username === 'pqr') {
              this.router.navigate(['/developer']);
            }
          }
        });
      } else {
        this.loginError = 'Invalid username or password. Please try again!';
        this.isErrorMessageVisible = true;
  
        setTimeout(() => {
          this.isErrorMessageVisible = false;
        }, 2000);
      }
    });
  }


  // login(): void {
  //   if (this.username === 'abc' && this.password === 'abc') {
  //     this.authService.login(this.username, this.password).subscribe(
  //       isLoggedIn => {
  //         if (isLoggedIn) {
  //           this.router.navigate(['/applicant']);
  //         } 
  //       }
  //     );
  //   } else if (this.username === 'xyz' && this.password === 'xyz') {
  //     this.authService.login(this.username, this.password).subscribe(
  //       isLoggedIn => {
  //         if (isLoggedIn) {
  //           this.router.navigate(['/technical']);
  //         }
  //       }
  //     );
  //   } else if (this.username === 'pqr' && this.password === 'pqr') {
  //     this.authService.login(this.username, this.password).subscribe(
  //       isLoggedIn => {
  //         if (isLoggedIn) {
  //           this.router.navigate(['/developer']);}
  //         // } else {
  //         //   this.loginError = 'Invalid username or password';
  //         // }
  //       }
  //     );
  //   } else {
  //     this.loginError = 'Invalid username or password. Please try again !';
  //     this.isErrorMessageVisible = true;

  //     setTimeout(() => {
  //       this.isErrorMessageVisible = false;
  //     }, 2000);
  //   }
  //}

}