import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

interface Developer{
  devname:string,
  Date:string,
  Signature:string,
  Comments:string
}
@Component({
  selector: 'app-viewdev',
  templateUrl: './viewdev.component.html',
  styleUrls: ['./viewdev.component.css']
})
export class ViewdevComponent{
  constructor(private http: HttpClient) { }


  dataSource!: MatTableDataSource<Developer>;
  displayedColumns: string[] = ['devname','Date','Signature','Comments','delete'];

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.http.get<any>('http://www.localhost:3000/developer').subscribe(data => {
      const techData: Developer[] = data;
      this.dataSource = new MatTableDataSource(techData);
    });
  }

  deleteRow(row: any) {
    const index = this.dataSource.data.indexOf(row);
  
    if (index !== -1) {
      const rowId = row.id; 
      const url = 'http://www.localhost:3000/developer/' + rowId; 
  
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
