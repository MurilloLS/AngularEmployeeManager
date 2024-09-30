import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Funcionarios } from '../models/Funcionarios';
import { Response } from '../models/Response';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  ApiUrl = environment.UrlApi;

  constructor(private http : HttpClient) { }
  
  GetFuncionarios() : Observable<Response<Funcionarios[]>> {
    return this.http.get<Response<Funcionarios[]>>(this.ApiUrl);
  }

  CriarFuncionario(funcionario: Funcionarios) : Observable<Response<Funcionarios[]>> {
    return this.http.post<Response<Funcionarios[]>>(this.ApiUrl, funcionario);
  }

  DeletarFuncionario(id: number | undefined): Observable<Response<Funcionarios[]>>{
    return this.http.delete<Response<Funcionarios[]>>(`${this.ApiUrl}?funcionarioId=${id}`)
  }

}
