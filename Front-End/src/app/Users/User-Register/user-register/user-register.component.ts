import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
registrationform:FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.registrationform=new FormGroup({
      userName:new FormControl(null,[Validators.required]),
      Email:new FormControl(null,[Validators.email,Validators.required]),
      password:new FormControl(null,[Validators.required,Validators.minLength(8)]),
      confirmPassword:new FormControl(null,[Validators.required]),
      mobile:new FormControl(null,[Validators.required,Validators.minLength(10)])


    },
    this.PasswordmatchingValidators

  );

  }
  PasswordmatchingValidators(fg:FormGroup):Validators{
    return fg.get('password').value === fg.get('confirmPassword').value?null:{notmatched:true};
  }
  Onsubmit(){
    console.log(this.registrationform)
  }
  get userName(){
    return this.registrationform.get('userName') as FormControl;
  }
  get Email(){
    return this.registrationform.get('Email') as FormControl;
  }
  get password(){
    return this.registrationform.get('password') as FormControl;
  }
  get confirmPassword(){
    return this.registrationform.get('confirmPassword') as FormControl;
  }
  get mobile(){
    return this.registrationform.get('mobile') as FormControl;
  }

}
