import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup} from '@angular/forms';
import {communicationServices} from '../services/communicationservice'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup;
  data:any;

  constructor(private fb:FormBuilder,private cs:communicationServices,private router: Router) { }

  ngOnInit() {
     this.data = this.cs.getData();
    // console.log(this.data[0].value)
    this.loginForm = this.fb.group({
      userName : [""],
      password : [""],

    });

  }




  login(){
    console.log(this.loginForm.value.userName)
  if(this.data[0].value.email==this.loginForm.value.userName && this.data[0].value.password==this.loginForm.value.password){
    this.router.navigateByUrl('/dashboard');
  }
else{
  alert('Invalid Credentials')
}
   
  }

}
