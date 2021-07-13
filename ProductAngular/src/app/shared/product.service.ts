import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  readonly baseURL = 'http://localhost:53388/api/Product';
  formData: Product = new Product();
  list: Product[];

  postProduct(){
    return this.http.post(`${this.baseURL}/SaveProduct`,this.formData);
  }

  putProduct(){
    return this.http.put(`${this.baseURL}/UpdateProduct/${this.formData.productID}`,this.formData);
  }

  deleteProduct(id:number){
    return this.http.delete(`${this.baseURL}/DeleteProduct/${id}`);
  }

  refreshList(){
    this.http.get(`${this.baseURL}/GetProducts`)
    .toPromise().then(res => this.list = res as Product[]);
  }
}
