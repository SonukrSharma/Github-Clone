import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/service/services.service';

@Component({
  selector: 'app-repo-content',
  templateUrl: './repo-content.component.html',
  styleUrls: ['./repo-content.component.css']
})
export class RepoContentComponent implements OnInit {
  userData: any;
  currentData: any;
  repoID:any
  dID:number=0
  show:boolean=false;
  hide:boolean=true;
  constructor(private service:ServicesService,private router:Router,) { }

  ngOnInit(): void {
    let userId=localStorage.getItem("logData");
    this.repoID=localStorage.getItem("repoDataID");
    userId && this.service.getUser(parseInt(userId)).subscribe(res=>{
      this.userData=res
    })
    this.currentData.push(this.userData.data[this.repoID].directories);
    
  }

  onClick(folder:String){
    let path:String="this.userData.data[this.repoID].directories";
    for (let index = 0; index < this.userData.data[this.repoID].directories.length; index++) {
      if(this.userData.data[this.repoID].directories.foldername==folder){
        this.dID=index;
        this.show=true;
        this.hide=false;
        break;
      }
      console.log(this.dID);
      
    }
    // console.log(this.currentData);
  }
  onUserClick(){
  // console.log(this.userData);
  this.router.navigate(["dashboard/"+this.userData.id]);  
}

}
