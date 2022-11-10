import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from 'src/app/service/services.service';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {

  userData:any

  constructor(private service:ServicesService,private titleService:Title,private router:Router,private route:ActivatedRoute,) { }

  ngOnInit(): void {
    this.titleService.setTitle("Your Dashboard");

    let mid=this.route.snapshot.paramMap.get('id');
    mid && this.service.getUser(parseInt(mid)).subscribe(res=>{this.userData=res})
  }
  toHome(){
    this.router.navigate(['/home']);
  }
  
}
