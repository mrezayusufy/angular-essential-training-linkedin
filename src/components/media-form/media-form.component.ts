import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { yearValidator } from '../../validators/year.validator';
import { MediaService } from '../../services/media.service';
import { lookupToken } from '../../providers';

@Component({
  selector: 'media-form',
  templateUrl: './media-form.component.html',
  styleUrl: './media-form.component.css'
})
export class MediaFormComponent implements OnInit {
  form!: FormGroup;
  constructor(private formBuilder: FormBuilder, 
    private mediaService: MediaService, 
    @Inject(lookupToken) public lookupLists: any){}
  ngOnInit(): void {
    const year = this.formBuilder.control('',{validators: [Validators.required, yearValidator()]});
    this.form = this.formBuilder.group({
      medium: this.formBuilder.control('Movies'),
      name: this.formBuilder.control('name', {validators: [Validators.required, Validators.pattern('[\\w\\-\\s\\/]+')]}),
      category: this.formBuilder.control('Comedy'),
      year: year
    });
  }
  onSubmit(mediaForm: any) {
    console.log("media form",mediaForm)
  }  
  
}
