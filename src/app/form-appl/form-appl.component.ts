import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ApplicantDataService } from '../applicant-data.service';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { SuccessDialogComponent } from '../success-dialog/success-dialog.component';
import { FormsModule, FormBuilder, Validators, FormControl, ReactiveFormsModule} from '@angular/forms';
import {NgForm} from '@angular/forms';
import { FailmsgComponent } from '../failmsg/failmsg.component';

@Component({
  selector: 'app-form-appl',
  templateUrl: './form-appl.component.html',
  styleUrls: ['./form-appl.component.css'],
})
export class FormApplComponent {
  
  @Output() parentone=new EventEmitter<any>();
  
  checkboxChecked: boolean = false;

  constructor(private router: Router,private applicantDataService: ApplicantDataService, public dialog: MatDialog) { }

  logout() {
    this.router.navigate(['/applicant'], { queryParams: { logout: 'success' } });
  }
  selectedOption: string=''; 
  onOptionChange(event: any) {
    this.selectedOption = event;
  }
  getone(app:string,date:string,refno:string,name:string,reqby:string,payno:string,namet:string,code:string,desc:string,sign:string){
    //this.parentone.emit([app,date,refno,this.selectedOption,reqby,name,payno,namet,code,desc,sign]);
    const formData = {
      applicationName: app,
      dateOfRequest: date,
      referenceNumber: refno,
      mode:this.selectedOption,
      requestedBy: {
        type: reqby,
        name: name,
        payeeId: payno,
        departmentName: namet,
        departmentCode: code
      },
      description: desc,
      signature: sign
    };
  
    if(this.checkboxChecked)
    this.applicantDataService.submit(formData)
    .subscribe(
      (response: any) => {
        // Handle the response
        console.log('Form data saved successfully', response);
      },
      (error: any) => {
        // Handle the error
        console.error('Error saving form data', error);
      }
    );
    if(this.checkboxChecked)
    this.dialog.open(SuccessDialogComponent);
    else{
      this.dialog.open(FailmsgComponent);
    }
   
  }
  
  appNameControl = new FormControl('', Validators.required);
  dateControl = new FormControl('', Validators.required);
  refControl = new FormControl('', Validators.required);
  reqControl = new FormControl('', Validators.required);
  NameControl = new FormControl('', Validators.required);
  NamedControl = new FormControl('', Validators.required);
  payeeControl = new FormControl('', Validators.required);
  codeControl = new FormControl('', Validators.required);
  descControl = new FormControl('', Validators.required);
  signControl = new FormControl('', Validators.required);
  checkControl= new FormControl('',Validators.required);

  resetFormFields() {
    // Reset the values of the form fields
    
    this.appNameControl.reset();
    this.dateControl.reset();
    this.refControl.reset();
    this.reqControl.reset();
    this.NameControl.reset();
    this.NamedControl.reset();
    this.payeeControl.reset();
    this.codeControl.reset();
    this.descControl.reset();
    this.signControl.reset();
    this.checkControl.reset();
  }

}

