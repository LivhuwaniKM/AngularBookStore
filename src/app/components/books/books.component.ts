// src/app/components/books/books.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BooksService } from "../../services/books.service";
import { Book } from "../../models/model.book";

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})

export class BooksComponent implements OnInit {
  booksValue: Book[] = [];
  displayedColumns: string[] = ['title', 'author', 'isbn', 'year', 'actions'];
  constructor(private router: Router, private bookService: BooksService) {}
  ngOnInit(): void {
    this.loadBooks();
  }
  loadBooks(): void {
    this.bookService.getAllBooks().subscribe(books => {
      this.booksValue = books;
    });
  }
  /*addBook(): void {
    this.router.navigate(['/books/create']);
  }*/
  deleteBook(isbn: string): void {
    this.bookService.deleteBook(isbn).subscribe();
  }
}
