import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { FormGroup,FormControl,FormGroupDirective } from '@angular/forms';
import { Data } from '../login.model';



@Component({
  selector: 'app-leftcomp',
  templateUrl: './leftcomp.component.html',
  styleUrls: ['./leftcomp.component.css']
})
export class LeftcompComponent implements OnInit {

  @Output() display = new EventEmitter<Data>();
  form = new FormGroup({
    name: new FormControl(''),
    email:new FormControl(''),
    password:new FormControl(''),
    contact:new FormControl('')
  })
  constructor() { }


  onSubmit(){
  
    this.display.emit({
        name:this.form.controls['name'].value,
        email:this.form.controls['email'].value,
        password:this.form.controls['password'].value,
        contact:this.form.controls['contact'].value,
    })
    this.form.reset();
  }

  ngOnInit(): void {
  }

}
