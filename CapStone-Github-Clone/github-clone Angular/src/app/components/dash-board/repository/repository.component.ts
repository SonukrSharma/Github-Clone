import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/service/services.service';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {

  userData:any
  empty:boolean=false
  show:boolean=false
  constructor(private service:ServicesService,private router:Router) { }


  ngOnInit(): void {
    let userId=localStorage.getItem("logData");
    userId && this.service.getUser(parseInt(userId)).subscribe(res=>{
      this.userData=res
      if (this.userData.data==null) {
        this.empty=true
        this.show=false
      }else{
        this.empty=false
        this.show=true
      }
     
    })
  }

  OnClick(repoName:string){
    let index:number=0;
    while (this.userData.data[index].repoName!=repoName) {
      index++;
    }
    localStorage.setItem("repoDataID",index.toString());
    this.router.navigate(["/dashboard/"+this.userData.username+"/"+repoName])
  }
}
