


import { Cpf } from './../../models/search/cpf';
import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../../models/pessoa/pessoa';
import { PessoaService } from '../../service/pessoa.service';

import { CardsComponent } from '../cards/cards.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(private pessoaService: PessoaService) { }
  cooperado$!: Pessoa;
  pessoa!:Pessoa;
  error: boolean = false;

  ngOnInit(): void {
  }
  onSubmit(numero: Cpf):void{
    this.pessoaService.consultaCpf(numero.cpf).subscribe(data => {
      this.pessoa = data[0];
      if(this.pessoa === undefined){
        this.error = true
      }else{
        this.cooperado$ = this.pessoa
        this.error = false
      };
    })
  }
  mostraCards(pessoa:Pessoa):void{
    this.cooperado$ = pessoa
  }
}
