import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RelatorioDeProducao } from './relatorio-de-producao.model';

const baseUrl = 'http://localhost:8080/api/relatoriosDeProducao';

@Injectable({
  providedIn: 'root'
})
export class RelatorioDeProducaoService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<RelatorioDeProducao[]> {
    return this.http.get<RelatorioDeProducao[]>(baseUrl);
  }

  get(id: any): Observable<RelatorioDeProducao> {
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
