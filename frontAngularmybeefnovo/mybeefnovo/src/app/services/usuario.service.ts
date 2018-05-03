import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class UsuarioService {

  private baseUrl =  '';


  constructor(private http: HttpClient) { }



  query(): Observable<any>{
    return this.http.get(this.baseUrl);
  }

  find(usuario_id: number): Observable<any>{
    return this.http.get(`${this.baseUrl}/${usuario_id}`);
  }

  save(data:any): Observable<any>{
    return !data.usuario_id
      ? this.http.post(this.baseUrl, data)
        :this.http.put(`${this.baseUrl}/${data.usuario_id}`, data);
  }

  destroy(usuario_id:number): Observable<any>{
    return this.http.delete(`${this.baseUrl}/${usuario_id}`);
  }


}
