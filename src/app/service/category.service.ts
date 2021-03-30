import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/category';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private API_URL = "http://localhost:3000/categories";

  constructor(private http:HttpClient) { } // gán giá trị cho http

  getAll():Observable<Category[]>{
    return this.http.get<Category[]>(this.API_URL);

  }
}
