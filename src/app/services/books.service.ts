import {ENVIRONMENT_INITIALIZER, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Observable } from "rxjs";
import { Book } from "../models/model.book";

@Injectable({
  providedIn: 'root'
})

export class BooksService {
  private baseurl = 'https://localhost:7236/api';
  constructor(private http: HttpClient) { }

  public getAllBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.baseurl}/get/all`);
  }

  getBookByIsbn(isbn: string): Observable<Book> {
    return this.http.get<Book>(`${this.baseurl}/get/isbn/${isbn}`);
  }

  getBookById(id: number): Observable<Book> {
    return this.http.get<Book>(`${this.baseurl}/get/id/${id}`);
  }

  addBook(book: Book): Observable<Book> {
    return this.http.post<Book>(`${this.baseurl}/create`, book);
  }

  updateBook(id: number, book: Book): Observable<Book> {
    return this.http.put<Book>(`${this.baseurl}/update/${id}`, book)
  }

  deleteBook(isbn: string): Observable<any> {
    return this.http.request('delete', `${this.baseurl}/delete/${isbn}`, {
      /*body: book,*/
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    })
  }
}
