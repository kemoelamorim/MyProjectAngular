import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../../models/pessoa';

import { PessoaService } from '../../service/pessoa.service';

export interface info{
  nome: string

}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private pessoaService: PessoaService) { }
  
  mostra: any;
  cpf: any;
  cooperado: any
  frase: any;
  
  ngOnInit(): void {
  }
  
  onSubmit(){
    this.pessoaService.consultaCpf(this.cpf).then(pessoa => this.render(pessoa))
  }

  render(cooperado: Pessoa){
    this.cooperado = cooperado
    console.log(this.cooperado)
    this.mostra = true;
  }
  erro(frase: string){
    this.frase = frase;
  }
 
}