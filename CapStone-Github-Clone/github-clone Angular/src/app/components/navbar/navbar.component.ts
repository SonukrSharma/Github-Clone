import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  searchForm!:FormGroup;
  searchText:any;
  constructor(private form:FormBuilder,private route:Router) { }

  ngOnInit(): void {
    this.searchForm=this.form.group({
      query:['',[Validators.required,Validators.minLength(3)]]
    })
    this.searchForm.valueChanges.subscribe(res=>{
      this.searchText=this.searchForm.value;
    })
  }
  toHome(){
    this.route.navigate(['/dashboard/']);
  }
  signOut(){
    localStorage.removeItem("logData");
    localStorage.removeItem("query");
    localStorage.removeItem("repoDataID");
    this.route.navigate(['home']);
  }
  toSearch(){
      localStorage.setItem("query",this.searchText.query);
      this.route.navigate(['search/'+this.searchText.query]);
  }
}
