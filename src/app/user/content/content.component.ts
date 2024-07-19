import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

fname:string='';
constructor(private dataService: DataService) {}
ngOnInit() {
  this.fname = this.dataService.getFname();
}
}
