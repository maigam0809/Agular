import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comics } from '../models/comics';

@Injectable({
  providedIn: 'root'
})
export class ComicsService {
  private API_COMICS = "http://localhost:3000/comics";

  constructor(private http:HttpClient) { } // gán giá trị cho http

  getAll():Observable<Comics[]>{
    return this.http.get<Comics[]>(this.API_COMICS);

  }
}
