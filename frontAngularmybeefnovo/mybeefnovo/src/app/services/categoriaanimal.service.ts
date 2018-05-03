import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";



@Injectable()
export class CategoriaanimalService {

     //private baseUrl = 'https://jsonplaceholder.typicode.com/posts';
    private baseUrl = 'http://localhost:8080/categoria_animal';
    //private baseUrl = 'http://200.132.234.10/mateus/public/usuario';

    constructor(private http: HttpClient) {

        //response => response.json()._embedded.baseUrl;
    }


    query(): Observable<any> {

        return this.http.get(this.baseUrl);


        //let response = this.http.get(this.baseUrl).map((response: Response) => response.json());

    }


    find(id: number): Observable<any>{
        return this.http.get(`${this.baseUrl}/${id}`);

    }

    save(data:any): Observable<any>{
        return !data.id
            ? this.http.post(this.baseUrl, data)
            :this.http.put(`${this.baseUrl}/${data.id}`, data);
    }

    destroy(id:number): Observable<any>{
        return this.http.delete(`${this.baseUrl}/${id}`);
    }


}