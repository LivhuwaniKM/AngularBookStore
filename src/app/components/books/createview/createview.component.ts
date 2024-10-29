import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BooksService} from "../../../services/books.service";
import { Book} from "../../../models/model.book";

@Component({
  selector: 'app-createview',
  templateUrl: './createview.component.html',
  styleUrl: './createview.component.scss'
})
export class CreateviewComponent {
  bookForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private booksService: BooksService,
    private router: Router
  ) {
  }

  ngOnInit()
  {
    this.bookForm = this.fb.group({
      title: ['', [Validators.required]],
      author: ['', [Validators.required]],
      isbn: ['', [Validators.required]],
      year: [null, [Validators.required]]
    });
  }

  onSubmit(): void {
    if(this.bookForm.value) {
      //this.submitForm();

      const book: Book = this.bookForm.value;
      this.booksService.addBook(book).subscribe();

      this.router.navigate(['/books'])
    } else {
      console.error('the books form is null and empty');
    }
  }

  /*submitForm(): any {
    const book: Book = this.bookForm.value;
    this.booksService.addBook(book).subscribe();
  }*/
  onCancel() {
    this.router.navigate(['/books'])
  }
}

