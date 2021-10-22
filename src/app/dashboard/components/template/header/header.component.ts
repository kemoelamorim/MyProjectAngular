import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  notification = 7;
  constructor() { }

  ngOnInit(): void {
  }
  incrementa():void{
    this.notification+=1;
  }
}
