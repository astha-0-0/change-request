import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApplicantDataService {
  constructor(private http: HttpClient) {}

  submit(formData: any){
    return this.http.post('http://localhost:3000/applicant',formData);
  }

  techsubmit(formData:any){
    return this.http.post('http://localhost:3000/technical',formData);
  }

  devsubmit(formData:any){
    return this.http.post('http://localhost:3000/developer',formData);
  }
 
  
}
