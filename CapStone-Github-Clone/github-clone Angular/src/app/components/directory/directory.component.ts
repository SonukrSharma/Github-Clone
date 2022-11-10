import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/service/services.service';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})
export class DirectoryComponent implements OnInit {
  userData: any;
  currentData: any;
  repoID:any
  constructor(private service:ServicesService) { }

  ngOnInit(): void {
  }
  onClick(){
    let path:String="this.userData.data[this.repoID].directories";
    console.log(this.currentData);
  }

}
