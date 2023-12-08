import { Component, OnInit } from '@angular/core';
import { IMedia } from '../interfaces/imedia';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'angular-reyu';
  form!: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
      medium: new FormControl('Movies'),
      name: new FormControl('name', [Validators.required, Validators.pattern('[\\w\\-\\s\\/]+')]),
      category: new FormControl(''),
      year: new FormControl('', [Validators.required ,this.yearValidator])
    });
  }
  onSubmit(mediaForm: any) {
    console.log("media form",mediaForm)
  }

 
  yearValidator(control: FormControl): { [key: string]: boolean } | null {
    const year = control.value;
    const minYear = 1900;
    const maxYear = new Date().getFullYear();
  
    if (!year || /^\s*$/.test(year)) {
      return null; // Validation passes if value is empty or whitespace
    }
  
    const parsedYear = parseInt(year, 10);
  
    if (parsedYear <= minYear || parsedYear >= maxYear) {
      return { year: true }; // Validation failed
    }
  
    return null; // Validation passes
  }
  
  onMediaItemDelete(event: any){

  }
  mediaItems: Array<IMedia> = [
    {
      id: 1,
      name: "The Redemption",
      medium: "Movies",
      category: "Animation",
      year: 2010,
      watchedOn: 1294166565384,
      isFavorite: false,
    },  
    {
      id: 4,
      name: "Firebug",
      medium: "Movies",
      category: "Drama",
      year: 2010,
      watchedOn: 1294166565384,
      isFavorite: true,
    },  
    {
      id: 5,
      name: "The star war",
      medium: "Series",
      category: "Science Fiction",
      year: 2010,
      watchedOn: 1294166565384,
      isFavorite: true,
    },  
    {
      id: 6,
      name: "Ready player one",
      medium: "Series",
      category: "Action",
      year: 2010,
      watchedOn: 1294166565384,
      isFavorite: false,
    },  
  ]
}
