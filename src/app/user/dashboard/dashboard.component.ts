import { Component, OnInit } from '@angular/core';
import { FetchdataService } from '../../fetchdata.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers:[FetchdataService]
})
export class DashboardComponent implements OnInit {

  constructor(private saveData:FetchdataService) { }
data:any;
emailId:any;
lastName:any;
  ngOnInit() {
this.data = localStorage.getItem("firstName")
this.lastName = localStorage.getItem("lastName")
this.emailId = localStorage.getItem("email")


//console.log("anuj>>>>>>" + (this.data).OTP);
//event.preventDefault();
//console.log((this.data).email)
  }

}
