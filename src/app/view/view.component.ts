import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  emplist:Employee[];

  constructor() { 
    this.emplist = [
      {eid:1237, ename:"Shashank", desig:"DotNET", joindate:new Date(2020,6,21), salary:21000},
      {eid:1147, ename:"Pankaj", desig:"Java", joindate:new Date(2020,7,15), salary:30000},
      {eid:1305, ename:"Mayank", desig:"DeepLearning", joindate:new Date(2020,9,20), salary:30000},
      {eid:1032, ename:"Aditya", desig:"Database", joindate:new Date(2020,0,10), salary:25000},
      {eid:1249, ename:"Suryanshu", desig:"Java", joindate:new Date(2020,1,14), salary:23000}
    ]
  }

  ngOnInit(): void {
  }

}
