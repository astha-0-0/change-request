import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ApplicantDataService } from '../applicant-data.service';
import { SuccessDialogComponent } from '../success-dialog/success-dialog.component';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { FailmsgComponent } from '../failmsg/failmsg.component';
import { FormsModule, FormBuilder, Validators, FormControl, ReactiveFormsModule} from '@angular/forms';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-devform',
  templateUrl: './devform.component.html',
  styleUrls: ['./devform.component.css']
})
export class DevformComponent {
  @Output() parentfunc = new EventEmitter<any>();

  checkboxChecked: boolean = false;


  constructor(private router: Router,private devDataService: ApplicantDataService, public dialog:MatDialog) { }

  logout() {
    this.router.navigate(['/developer'], { queryParams: { logout: 'success' } });
  }

  
  getname(data: String,date:String,sign:String,comment:String){
   // this.parentfunc.emit([data, date, sign, comment]);
    const formData={
      devname:data,
      Date:date,
      Signature:sign,
      Comments:comment

    }
    this.devDataService.devsubmit(formData)
    .subscribe(
      (response: any) => {
        // Handle response:
        console.log('Form data saved successfully', response);
      },
      (error: any) => {
        // Handle error:
        console.error('Error saving form data', error);
      }
    );
    
    //dialog box for successful submit
    if(this.checkboxChecked)
    this.dialog.open(SuccessDialogComponent);
    else{
      this.dialog.open(FailmsgComponent);
    }
    
  }

  dateControl = new FormControl('', Validators.required);
  nameControl = new FormControl('', Validators.required);
  signControl = new FormControl('', Validators.required);
  comControl = new FormControl('', Validators.required);
  checkControl= new FormControl('',Validators.required);

  resetFormFields(){
    this.dateControl.reset();
    this.nameControl.reset();
    this.signControl.reset();
    this.comControl.reset();
    this.checkControl.reset();

  }


}
