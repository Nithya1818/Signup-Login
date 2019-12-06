import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup} from '@angular/forms';
import { communicationServices } from '../services/communicationservice';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
 
  signupForm:FormGroup;


  constructor(private fb:FormBuilder,private cs:communicationServices,private route:Router) {

    
   }

  ngOnInit() {
    
    this.signupForm = this.fb.group({
      first_name:[""],
      last_name:[""],
      email:[""],
      password:[""],
      confirm_password:[""],
    })
  }

  signUp(){
    console.log(this.signupForm.value);
    this.cs.getData().push(this.signupForm);
    this.route.navigate(['/login']);
  }

}
