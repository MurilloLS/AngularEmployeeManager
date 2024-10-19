import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Funcionarios } from '../models/Funcionarios';
import { Response } from '../models/Response';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  ApiUrl = `${environment.UrlApi}/Funcionario`;

  constructor(private readonly http: HttpClient) { }

  private getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders().set('Authorization', `Bearer ${token}`);
  }

  GetFuncionarios(): Observable<Response<Funcionarios[]>> {
    return this.http.get<Response<Funcionarios[]>>(this.ApiUrl, { headers: this.getAuthHeaders() });
  }

  CriarFuncionario(funcionario: Funcionarios): Observable<Response<Funcionarios[]>> {
    return this.http.post<Response<Funcionarios[]>>(`${this.ApiUrl}`, funcionario, { headers: this.getAuthHeaders() });
  }

  DeletarFuncionario(id: number): Observable<Response<Funcionarios[]>> {
    return this.http.delete<Response<Funcionarios[]>>(`${this.ApiUrl}?id=${id}`, { headers: this.getAuthHeaders() });
  }

  GetFuncionarioId(id: number): Observable<Response<Funcionarios>> {
    return this.http.get<Response<Funcionarios>>(`${this.ApiUrl}/${id}`, { headers: this.getAuthHeaders() });
  }

  EditarFuncionario(funcionario: Funcionarios): Observable<Response<Funcionarios[]>> {
    return this.http.put<Response<Funcionarios[]>>(`${this.ApiUrl}`, funcionario, { headers: this.getAuthHeaders() });
  }

  InativaFuncionario(id: number): Observable<Response<Funcionarios[]>> {
    return this.http.put<Response<Funcionarios[]>>(`${this.ApiUrl}/InativaFuncionario/${id}`, id, { headers: this.getAuthHeaders() });
  }

  AtivaFuncionario(id: number): Observable<Response<Funcionarios[]>> {
    return this.http.put<Response<Funcionarios[]>>(`${this.ApiUrl}/AtivaFuncionario/${id}`, id, { headers: this.getAuthHeaders() });
  }

}
