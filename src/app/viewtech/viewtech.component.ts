import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

interface Technical{
  NameofTechnical: string;
  Analyse: string;
  Logic: string;
  Signature: string;
  Category:string;
  id: number;
}

@Component({
  selector: 'app-viewtech',
  templateUrl: './viewtech.component.html',
  styleUrls: ['./viewtech.component.css']
})
export class ViewtechComponent implements OnInit{
  constructor(private http: HttpClient) { }


  dataSource!: MatTableDataSource<Technical>;
  displayedColumns: string[] = ['NameofTechnical', 'Analyse', 'Logic', 'Category', 'Signature', 'delete'];

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.http.get<any>('http://www.localhost:3000/technical').subscribe(data => {
      const techData: Technical[] = data;
      this.dataSource = new MatTableDataSource(techData);
    });
  }

  deleteRow(row: any) {
    const index = this.dataSource.data.indexOf(row);
  
    if (index !== -1) {
      const rowId = row.id; 
      const url = 'http://www.localhost:3000/technical/' + rowId; 
  
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
