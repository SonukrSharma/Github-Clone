import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private titleService:Title,private route:Router) { }

  ngOnInit(): void {
    document.body.style.backgroundImage="url(https://github.blog/wp-content/uploads/2020/12/102393310-07478b80-3f8d-11eb-84eb-392d555ebd29.png?resize=1200%2C630)"
  }
  toLogin(){
    this.route.navigate(['/login']);
  }
  toSignup(){
    this.route.navigate(['/signup']);
  }
}
