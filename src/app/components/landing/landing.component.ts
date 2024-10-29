import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent implements OnInit {
  public getJsonValue: any;
  public postJsonValue: any;
  constructor(private http: HttpClient) {

  }
  ngOnInit(): void {
    this.getMethod();
  }
  public getMethod() {
    this.http.get('https://jsonplaceholder.typicode.com/posts/1').subscribe((data) => {
      console.log(data);

      this.getJsonValue = data;
    });
  }
}
