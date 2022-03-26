import { Component, OnInit,Input } from '@angular/core';
import { Data } from '../login.model';

@Component({
  selector: 'app-rightcomp',
  templateUrl: './rightcomp.component.html',
  styleUrls: ['./rightcomp.component.css']
})
export class RightcompComponent implements OnInit {
  @Input() data:Data = {name:"",email:"",password:"",contact:""}
  constructor() { }

  ngOnInit(): void {
  }

}
