import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApontamentoDeProducao } from './apontamento-de-producao.model';

const baseUrl = 'http://localhost:8080/api/apontamentosDeProducao';

@Injectable({
  providedIn: 'root'
})
export class ApontamentoDeProducaoService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<ApontamentoDeProducao[]> {
    return this.http.get<ApontamentoDeProducao[]>(baseUrl);
  }

  get(id: any): Observable<ApontamentoDeProducao> {
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
