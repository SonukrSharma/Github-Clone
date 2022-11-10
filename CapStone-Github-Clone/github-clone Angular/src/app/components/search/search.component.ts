import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { elementAt } from 'rxjs';
import { ServicesService } from 'src/app/service/services.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  query:any
  userData:any
  result:any=[]
  empty:boolean=false
  show:boolean=true
  constructor(private service:ServicesService,private router:Router) { }

  ngOnInit(): void {
    window.location.reload;
    this.query=localStorage.getItem("query");
    this.service.getData().subscribe(res=>{
      this.userData=res
      this.userData.forEach((element: any) => {
        if (element.username.includes(this.query)) {
          this.result.push(element)
        } 

      });
      // console.log(this.result.length);

      // console.log(this.result);
      // this.userData.data.forEach((element:any)=>{
      //   console.log(element);
        
      // })
      if (this.result.length<1) {
        this.empty=true
        this.show=false
      }
      
      
    });
    
    
    
      
    
  }
  onClick(id:any){
    localStorage.setItem("logData",id)
    this.router.navigate(['dashboard/'+id])
  }

}
