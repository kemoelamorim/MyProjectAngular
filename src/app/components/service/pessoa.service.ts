import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_PATH } from 'src/environments/environment';
import { Pessoa } from '../models/pessoa';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {
  
  httpOptions = {headers: new HttpHeaders({ 'Content-Type': 'application/json' })}
  
  constructor(private http: HttpClient) { }


  consultaCpf(cpf: string){
    return this.http.get<Pessoa>(`${API_PATH}/pessoas?info.cpf=${cpf}`).toPromise()

    
  }

  
}
