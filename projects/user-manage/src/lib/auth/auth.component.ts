import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ErrorStateMatcher} from '@angular/material/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'user-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  emailid = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();

  constructor(private router: Router) { }
email: string;
password: string;
  ngOnInit() {
  }
  login() : void {
    if(this.email == 'abc@hp.com' && this.password == 'admin'){
     this.router.navigate(["users"]);
     
    }else {
      alert("Enter valid Emailid and Password");
    }
  }
  
}
  
  



