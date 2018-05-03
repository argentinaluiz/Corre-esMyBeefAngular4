import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class AtividadeService {


  private baseUrl = '';

  constructor(private http: HttpClient ) {

  }

  query(): Observable<any> {
    return this.http.get(this.baseUrl);
  }


  find(atividade_id: number): Observable<any>{
    return this.http.get(`${this.baseUrl}/${atividade_id}`);

  }

  save(data:any): Observable<any>{
    return !data.atividade_id
      ? this.http.post(this.baseUrl, data)
        :this.http.put(`${this.baseUrl}/${data.atividade_id}`, data);
  }

  destroy(atividade_id:number): Observable<any>{
    return this.http.delete(`${this.baseUrl}/${atividade_id}`);
  }


}
