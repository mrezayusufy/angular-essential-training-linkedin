import { Component, OnInit } from '@angular/core';
import { IMedia } from '../interfaces/imedia';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { yearValidator } from '../validators/year.validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-reyu';
   
}
