import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";
import { Router,NavigationExtras } from '@angular/router';
import { FormControl,FormBuilder,FormGroup, Validators } from '@angular/forms';
import { ServicesService } from 'src/app/service/services.service';



@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  loginForm!:FormGroup;
  data:any;
  user:any;
  msg:string='';
  userDetails: any;
  
  constructor(private service:ServicesService,private form:FormBuilder,private titleService:Title,private route:Router) {
    this.titleService.setTitle("Sign in to Github . Github");
    document.body.style.background="#FFFFFF"}
    
  ngOnInit(): void {
    this.service.getData().subscribe(response => {
      this.data = response;
     });

     window.localStorage.clear;
     this.loginForm=this.form.group({
      emailId:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(8)]],
    });
  }

  ToHome(){
    this.route.navigate(['/home']);
  }
  toDashBoard(){
    this.user=this.loginForm.value;
    this.service.login(this.user).subscribe(data=>{
      this.userDetails=data;
      // this.service.setUserData(this.userDetails);
      localStorage.setItem("logData",this.userDetails.id);
      this.route.navigate(['/dashboard/'+this.userDetails.id]);
    },
    error=>{
     this.msg="Bad Credentials";
    }
    );
    
  //  window.localStorage.clear;
  }
   

}
