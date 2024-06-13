import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OrdemDeProducao } from './ordem-de-producao.model';
import { Funcionario } from '../../funcionario/shared/funcionario.model';

const baseUrl = 'http://localhost:8080/api/ordensDeProducao';

@Injectable({
  providedIn: 'root'
})
export class OrdemDeProducaoService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<OrdemDeProducao[]> {
    return this.http.get<OrdemDeProducao[]>(baseUrl);
  }

  get(id: any): Observable<OrdemDeProducao> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }
}
