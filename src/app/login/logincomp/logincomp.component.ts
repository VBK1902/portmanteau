import { Component, OnInit } from '@angular/core';
import { Data } from '../login.model';

@Component({
  selector: 'app-logincomp',
  templateUrl: './logincomp.component.html',
  styleUrls: ['./logincomp.component.css']
})
export class LogincompComponent implements OnInit {
  resultdata:Data={name:"",email:"",password:"",contact:""};
  constructor() { }

  change(data:Data){
    this.resultdata=data
  }

  ngOnInit(): void {
  }

}
