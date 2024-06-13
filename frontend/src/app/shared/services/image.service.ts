import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Image } from '../model/image.model';

const baseUrl = 'http://localhost:8080/api/imagens';

@Injectable({
  providedIn: 'root'
})

export class ImageService {

  constructor(private http: HttpClient) { }

  uploadImage(image: any, id: any): Observable<any> {
    return this.http.post(`${baseUrl}/${id}`, image);
  }
    
  deleteImage(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  updateImage(image: any, id: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, image);
  }
}
