import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FetchdataService } from '../../fetchdata.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[FetchdataService]
})
export class HomeComponent implements OnInit {
//userClaims:any;
myData:any;
  constructor(private router:Router,private uploads: FetchdataService) { }

  ngOnInit() {
    this.uploads.getUserClaims().subscribe((info:any)=>{
    
      this.myData = info.Userinformation.data;
     
    })
  }
  

  logout() {
    localStorage.removeItem("item")
    this.router.navigateByUrl("login")
  }
}
