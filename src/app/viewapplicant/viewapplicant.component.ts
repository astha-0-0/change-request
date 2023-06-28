import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';


interface Applicant {
  applicationName: string;
  dateOfRequest: string;
  referenceNumber: string;
  mode:string;
  requestedBy: {
    type: string;
    name: string;
    payeeId: string;
    departmentName: string;
    departmentCode: string;
  };
  description: string;
  signature: string;
  id: number;
}


@Component({
  selector: 'app-viewapplicant',
  templateUrl: './viewapplicant.component.html',
  styleUrls: ['./viewapplicant.component.css']
})
export class ViewapplicantComponent implements OnInit{

  dataSource!: MatTableDataSource<Applicant>;
  displayedColumns: string[] = ['applicationName', 'dateOfRequest', 'referenceNumber', 'mode','requestedBy', 'description', 'signature','delete'];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.http.get<any>('http://www.localhost:3000/applicant').subscribe(data => {
      const applicantData: Applicant[] = data;
      this.dataSource = new MatTableDataSource(applicantData);
    });
  }

  deleteRow(row: any) {
    const index = this.dataSource.data.indexOf(row);
  
    if (index !== -1) {
      const rowId = row.id; 
      const url = 'http://www.localhost:3000/applicant/' + rowId; 
  
      this.http.delete(url).subscribe(
        (response) => {
          console.log('Row deleted successfully', response);
  
          this.dataSource.data.splice(index, 1);
          this.dataSource._updateChangeSubscription(); 
        },
        (error) => {
          console.error('Error deleting row', error);
        }
      );
    }
  }


}
