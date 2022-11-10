import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import {ServicesService} from 'src/app/service/services.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  data:any;
  user:any;
  RegisterationForm !:FormGroup;
  isDisable:boolean=false


  constructor(private service:ServicesService,private form:FormBuilder,private titleService:Title,private route:Router) {}
  
  ngOnInit(): void {
    this.titleService.setTitle("Join Github . Github");
    document.body.style.background="linear-gradient(90deg, rgba(3,43,104) ,rgba(4, 13, 33))"

    this.service.getData().subscribe(response => {
      this.data = response;
     })

    this.RegisterationForm=this.form.group({
      emailId:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(8)]],
      username:['',[Validators.required,Validators.minLength(3)]],
      name:['',[Validators.required,Validators.minLength(3)]],
      subscription:['',[Validators.required,Validators.minLength(1),Validators.maxLength(1)]],
    })

    this.RegisterationForm.valueChanges.subscribe(res=>{
      this.user=this.RegisterationForm.value;
    })
  }
  toLogin(){
    this.route.navigate(['/login']);
  }
  toHome(){
    this.route.navigate(['/home']);
  }
  OnSubmit() {
    this.user=this.RegisterationForm.value;
    console.log(this.user);
    this.toLogin()
    return this.service.createUser(this.user).subscribe();
  }
}
