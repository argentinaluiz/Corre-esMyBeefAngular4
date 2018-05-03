import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class RebanhoService {


  private baseUrl = '';


  constructor(private http: HttpClient) { }


  query(): Observable<any>{
    return this.http.get(this.baseUrl);
  }

  find(rebanho_id: number): Observable<any>{
    return this.http.get(`${this.baseUrl}/${rebanho_id}`);
  }

  save(data:any): Observable<any>{
    return !data.rebanho_id
      ? this.http.post(this.baseUrl, data)
        :this.http.put(`${this.baseUrl}/${data.rebanho_id}`, data);
  }

  destroy(rebanho_id:number): Observable<any>{
    return this.http.delete(`${this.baseUrl}/${rebanho_id}`);
  }



}
