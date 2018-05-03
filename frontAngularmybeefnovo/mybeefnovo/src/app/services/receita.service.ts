import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class ReceitaService {

  private baseUrl = '';

  constructor(private http: HttpClient) { }


  query(): Observable<any>{
    return this.http.get(this.baseUrl);
  }

  find(receita_id: number): Observable<any>{
    return this.http.get(`${this.baseUrl}/${receita_id}`);
  }

  save(data:any): Observable<any>{
    return !data.receita_id
      ? this.http.post(this.baseUrl, data)
        :this.http.put(`${this.baseUrl}/${data.receita_id}`, data);
  }

  destroy(receita_id:number): Observable<any>{
    return this.http.delete(`${this.baseUrl}/${receita_id}`);
  }


}
