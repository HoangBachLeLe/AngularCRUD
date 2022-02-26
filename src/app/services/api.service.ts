import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  baseUrl: string = 'http://localhost:3000/bookList/';

  constructor(private http: HttpClient) {}

  getBooks() {
    return this.http.get<any>(this.baseUrl);
  }

  postBook(data: any) {
    return this.http.post<any>(this.baseUrl, data);
  }

  putBook(data: any, id: number) {
    return this.http.put<any>(this.baseUrl + id, data);
  }

  deleteBook(id: number) {
    return this.http.delete<any>(this.baseUrl + id);
  }
}
