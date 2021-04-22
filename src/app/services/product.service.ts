import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const Product_API = 'http://127.0.0.1:5000/api/product/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  insertProduct(name: string, description: string, price: number){
    return this.http.post(Product_API + 'insert', {
      name,
      description,
      price,
     
    }, httpOptions);
  }

  showProduct(){
    return this.http.get(Product_API + 'show', httpOptions);
  }
}
