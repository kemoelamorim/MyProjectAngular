

import { Component, OnInit } from '@angular/core';

import { Contas } from '../../models/pessoa/contas';
import { Info } from '../../models/pessoa/info';
import { Pessoa } from '../../models/pessoa/pessoa';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  cooperado$: any;

  constructor() { }

  ngOnInit(): void {

  }

  recabeCooperado(): void{
    this.cooperado$ 

  }

}
