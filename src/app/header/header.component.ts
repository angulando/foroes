import { Component, OnInit } from '@angular/core';
import { HeaderService } from './header.service'

@Component({
  selector: 'header-comp',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private headers: any[] = [];

  constructor(service: HeaderService) {
    service.getHeader().subscribe(data => { console.log("header", data);this.headers = data });
  }

  ngOnInit() {
  }

}
