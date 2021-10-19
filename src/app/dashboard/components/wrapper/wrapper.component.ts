import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss']
})
export class WrapperComponent implements OnInit {

  isExpanded: boolean = false;
  isExpanDicas: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  expandir(event: boolean):void{
    this.isExpanDicas = event;
  }

}
