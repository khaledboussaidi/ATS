import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HerosServiceService {

  constructor(private http: HttpClient) { }
  host = 'http://localhost:9090';


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };
public getProducts(pagenuber){
  return this.http.get(this.host + '/heros?page=' + pagenuber, this.httpOptions);
}
public  getProductsById(id){
  return this.http.get(this.host + '/hero/' + id , this.httpOptions);

}
}