import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { getLocaleDayPeriods } from '@angular/common';
import { FetchdataService } from '../fetchdata.service';
@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css'],
  providers:[FetchdataService]
})
export class ReactiveformComponent implements OnInit {
orderForm:FormGroup;
items:FormArray
  constructor(private fb:FormBuilder,private savedata:FetchdataService) { }

  ngOnInit() {
this.orderForm = this.fb.group({
  items:this.fb.array([this.createitem()])
  
})

  }
  additem():void{
    this.items = this.orderForm.get("items") as FormArray;
  
    this.items.push(this.createitem());
  
   // this.orderForm.get('items').reset();
  }
  createitem():FormGroup {
    return this.fb.group({
firstname:null,
lastname:null
    })
    
    
  }
  
  

  onSubmit() {
    var formarray = this.orderForm.value;
    console.log("formarray>>>>>>." + JSON.stringify(formarray))
    this.createemployee(formarray);
    (this.orderForm.get("items") as FormArray)['controls'].splice(0);
  }

  createemployee(formarray:any){

    console.log("11111don>>>>>>>>>" + JSON.stringify(formarray))
    this.savedata.createblog(formarray).subscribe(res => {
      console.log("don>>>>>>>>>" + JSON.stringify(res))
    

    })
  }
}
