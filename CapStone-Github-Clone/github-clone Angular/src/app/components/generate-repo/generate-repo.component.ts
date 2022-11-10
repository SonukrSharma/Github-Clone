import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormGroup, Validators } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/service/services.service';


@Component({
  selector: 'app-generate-repo',
  templateUrl: './generate-repo.component.html',
  styleUrls: ['./generate-repo.component.css']
})
export class GenerateRepoComponent implements OnInit {
  userData:any
  NewRepo!:FormGroup;
  RepoName:String='';
  constructor(private form:FormBuilder,private router:Router,private service:ServicesService) { }

  ngOnInit(): void {
    let userId=localStorage.getItem("logData");
    userId && this.service.getUser(parseInt(userId)).subscribe(res=>{
      this.userData=res
    })

    this.NewRepo=this.form.group({
      repoName:['',[Validators.required,Validators.minLength(1)]]
    })
    this.NewRepo.valueChanges.subscribe(res=>{
      this.RepoName=this.NewRepo.value;
    })
  }
  
  
  onClick(){
  
   

      let n:number=this.userData.data.length
      this.userData.data[n]=this.RepoName;
    
    this.service.update(this.userData).subscribe(res=>{
      this.userData=res
    })
    // console.log(this.userData);
    this.router.navigate(["dashboard/"+this.userData.id]);
    
    
    
  }

}
