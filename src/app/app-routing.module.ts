import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './components/books/books.component';
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { AboutComponent } from "./components/about/about.component";
import { AuthorsComponent } from "./components/authors/authors.component";
import { LandingComponent } from './components/landing/landing.component';
import {CreateviewComponent} from "./components/books/createview/createview.component";
import {EditviewComponent} from "./components/books/editview/editview.component";

const routes: Routes = [
  { path: 'landing', component: LandingComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'books', component: BooksComponent },
  { path: 'authors', component: AuthorsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'book/add', component: CreateviewComponent },
  { path: 'book/edit/:id', component: EditviewComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
