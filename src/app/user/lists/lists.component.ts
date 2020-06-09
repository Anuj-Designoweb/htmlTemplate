import { Component, OnInit ,ViewChild } from '@angular/core';
import { FetchdataService } from '../../fetchdata.service';
import { AgGridAngular } from 'ag-grid-angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {
  data:any = []
  rowData: any =[];
  constructor(private saveData:FetchdataService,private http: HttpClient) { }
 // @ViewChild('agGrid') agGrid: AgGridAngular;
 
//   columnDefs = [
//     {headerName: 'firstName', field: 'firstName'},
//     {headerName: 'lastName', field: 'fastName'},
//     {headerName: 'email', field: 'email'}
// ];
columnDefs = [
  {headerName: 'firstName', field: 'firstName', sortable: true, filter: true,searchable:true },
  {headerName: 'lastName', field: 'lastName', sortable: true, filter: true },
  {headerName: 'email', field: 'email', sortable: true, filter: true }
];
  ngOnInit() {
    this.http.get('http://localhost:5000/getdata').subscribe((res:any)=> {
      this.data = res.employeedata;
     // this.rowData = this.data
      console.log("anujsru>>>>" + JSON.stringify(this.data))
      this.rowData = this.data
    console.log("asas>>>>" + JSON.stringify(this.rowData))
    })
    // this.rowData = this.http.get('http://localhost:5000/getdata');
    // console.log(this.rowData)
    // this.rowData = this.data
    // console.log("asas>>>>" + JSON.stringify(this.rowData))
    
  }
//   columnDefs = [
//     {headerName: 'firstName', field: 'firstName'},
//     {headerName: 'lastName', field: 'lastName'},
//     {headerName: 'email', field: 'email'}
// ];

}
