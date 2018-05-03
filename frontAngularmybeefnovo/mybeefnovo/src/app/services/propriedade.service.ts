import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class PropriedadeService {

  private baseUrl = '';


  constructor(private http: HttpClient) { }


  query(): Observable<any>{
    return this.http.get(this.baseUrl);
  }

  find(propriedade_id: number): Observable<any>{
    return this.http.get(`${this.baseUrl}/${propriedade_id}`);
  }

  save(data:any): Observable<any>{
    return !data.propriedade_id
      ? this.http.post(this.baseUrl, data)
      :this.http.put(`${this.baseUrl}/${data.propriedade_id}`, data);
  }

  destroy(propriedade_id: number): Observable<any>{
    return this.http.delete(`${this.baseUrl}/${propriedade_id}`);
  }

}





