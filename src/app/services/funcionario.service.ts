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

  ApiUrl = `${environment.UrlApi}/Funcionario`;

  constructor(private readonly http : HttpClient) { }
  
  GetFuncionarios() : Observable<Response<Funcionarios[]>> {
    return this.http.get<Response<Funcionarios[]>>(this.ApiUrl);
  }

  CriarFuncionario(funcionario: Funcionarios) : Observable<Response<Funcionarios[]>> {
    return this.http.post<Response<Funcionarios[]>>(`${this.ApiUrl}`, funcionario);
  }

  DeletarFuncionario(id: number): Observable<Response<Funcionarios[]>>{
    return this.http.delete<Response<Funcionarios[]>>(`${this.ApiUrl}?id=${id}`)
  }

  GetFuncionarioId(id: number): Observable<Response<Funcionarios>>{
    return this.http.get<Response<Funcionarios>>(`${this.ApiUrl}/${id}`);
  }

  EditarFuncionario(funcionario: Funcionarios): Observable<Response<Funcionarios[]>>{
    return this.http.put<Response<Funcionarios[]>>(`${this.ApiUrl}`, funcionario);
  }

  InativaFuncionario(id: number): Observable<Response<Funcionarios[]>>{
    return this.http.put<Response<Funcionarios[]>>(`${this.ApiUrl}/InativaFuncionario/${id}`, id);
  }

  AtivaFuncionario(id: number): Observable<Response<Funcionarios[]>>{
    return this.http.put<Response<Funcionarios[]>>(`${this.ApiUrl}/AtivaFuncionario/${id}`, id);
  }

}
