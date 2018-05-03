import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class MedidaService {

  private baseUrl = '';

  constructor(private http: HttpClient) {}


  query(): Observable<any>{
    return this.http.get(this.baseUrl);
  }

  find(medida_id: number): Observable<any>{
    return this.http.get(`${this.baseUrl}/${medida_id}`);
  }

  save(data:any): Observable<any>{
    return !data.medida_id
      ? this.http.post(this.baseUrl, data)
      :this.http.put(`${this.baseUrl}/${data.medida_id}`, data);

  }

  destroy(medida_id:number): Observable<any>{
    return this.http.delete(`${this.baseUrl}/${medida_id}`);
  }

}
