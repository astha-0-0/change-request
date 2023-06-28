import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedInUser: string | null = null;

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<boolean> {
    // Make an HTTP GET request to your JSON file
    return this.http.get<any[]>('assets/users.json').pipe(
      map(users => {
        const matchedUser = users.find(user => user.username === username && user.password === password);
        if (matchedUser) {
          // Set the loggedInUser to the matched user's username
          this.loggedInUser = matchedUser.username;
          return true; 
        } else {
          this.loggedInUser = null;
          return false; 
        }
      })
    );
  }

  logout(): void {
    this.loggedInUser = null;
  }

  isAuthenticated(): boolean {
    return !!this.loggedInUser;
  }
  // constructor(private http: HttpClient) { }
  // isAuthenticate: boolean = false;

  

  // login(username: string, password: string): Observable<boolean> {
  //   if (username === 'abc' && password === 'abc') {
  //     this.isAuthenticate = true;
  //     return of(true);
  //   }
  //   else if(username==='xyz' && password==='xyz'){
  //     this.isAuthenticate=true;
  //     return of(true);
  //   }
  //   else if(username==='pqr' && password==='pqr'){
  //     this.isAuthenticate=true;
  //     return of(true);
  //   }
  //   return of(false);
  // }
}