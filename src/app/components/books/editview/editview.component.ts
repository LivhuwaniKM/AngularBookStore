import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {BooksService} from "../../../services/books.service";
import {Router, ActivatedRoute} from "@angular/router";
import {Book} from "../../../models/model.book";

@Component({
  selector: 'app-editview',
  templateUrl: './editview.component.html',
  styleUrls: ['./editview.component.scss']
})
export class EditviewComponent implements OnInit {
  bookForm!: FormGroup;
  bookId: number = 0;
  startDate = new Date();

  constructor(
    private fb: FormBuilder,
    private booksService: BooksService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.bookForm = this.fb.group({
      title: ['', [Validators.required]],
      author: [''],
      isbn: [''],
      year: [null]
    });

    this.activatedRoute.params.subscribe((params) => {
      this.bookId = params['id'];
      if (this.bookId) {
        this.booksService.getBookById(this.bookId).subscribe((res) => {

          this.bookForm.patchValue({
            title: res.title,
            author: res.author,
            isbn: res.isbn,
            year: res.year
          });
        });
      }
    });
  }

  onSubmit(): void {
    if (this.bookForm.valid) {
      if(this.bookId) {
        const bookDetails: Book = this.bookForm.value;
        this.booksService.updateBook(this.bookId, bookDetails).subscribe();
        this.router.navigate(['/books']);
      }
    }
  }
  chosenYearHandler(normalizedYear: Date, datepicker: any) {
    const ctrlValue = this.bookForm.get('year')?.value;
    if (ctrlValue) {
      ctrlValue.setFullYear(normalizedYear.getFullYear());
      this.bookForm.get('year')?.setValue(ctrlValue);
    } else {
      this.bookForm.get('year')?.setValue(normalizedYear);
    }
    datepicker.close();
  }
  onCancel() {
    this.router.navigate(['/books']);
  }
}
