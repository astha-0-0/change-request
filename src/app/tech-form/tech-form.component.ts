import { Component,Output,EventEmitter  } from '@angular/core';
import { Router } from '@angular/router';
import { ApplicantDataService } from '../applicant-data.service';
import { SuccessDialogComponent } from '../success-dialog/success-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { FailmsgComponent } from '../failmsg/failmsg.component';
import { FormsModule, FormBuilder, Validators, FormControl, ReactiveFormsModule} from '@angular/forms';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-tech-form',
  templateUrl: './tech-form.component.html',
  styleUrls: ['./tech-form.component.css']
})
export class TechFormComponent {
  @Output() parentwo=new EventEmitter<any>();

  checkboxChecked: boolean = false;

  constructor(private router: Router, private techDataService:ApplicantDataService, public dialog:MatDialog) { }

  logout() {
    this.router.navigate(['/login'], { queryParams: { logout: 'success' } });
  }
  goBack(){
    this.router.navigate(['/technical'], { queryParams: { logout: 'success' } }); 
  }
  selectedCategory!: string;

  selectCategory(category: string) {
    this.selectedCategory = category;
  }
  
  getsecond(name: String,analysis:String,logic:String,sign:String){
    const formData={
      NameofTechnical:name,
      Analyse:analysis,
      Logic:logic,
      Category:this.selectedCategory,
      Signature:sign

    }
    if(this.checkboxChecked)
    this.techDataService.techsubmit(formData)
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
//this.parentwo.emit([name, analysis, logic, this.selectCategory, sign]);
   
  }


  NameControl = new FormControl('', Validators.required);
  AnylControl = new FormControl('', Validators.required);
  logicControl = new FormControl('', Validators.required);
  catControl = new FormControl('', Validators.required);
  signControl = new FormControl('', Validators.required);
  checkControl = new FormControl('', Validators.required);

  resetFormFields(){
    this.NameControl.reset();
    this.AnylControl.reset();
    this.catControl.reset();
    this.logicControl.reset();
    this.signControl.reset();
    this.checkControl.reset();

  }


}
