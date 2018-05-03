import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class CustoService {

    private baseUrl = '';


    constructor(private  htpp: HttpClient) {
    }


    query(): Observable<any> {
        return this.htpp.get(this.baseUrl);
    }

    find(custo_id: number): Observable<any>{
      return this.htpp.get(`${this.baseUrl}/${custo_id}`);
    }

    save(data:any): Observable<any>{
      return !data.custo_id
        ?this.htpp.post(this.baseUrl, data)
        :this.htpp.put(`${this.baseUrl}/${data.custo_id}`, data);
    }

    destroy(custo_id: number): Observable<any>{
      return this.htpp.delete(`${this.baseUrl}/${custo_id}`);
    }

}