import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { JsonFormData } from '../components/dynamic-form/dynamic-form.component';

Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public formData: JsonFormData;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get('/assets/dynamic-form.json')
      .subscribe((formData: JsonFormData) => {
        this.formData = formData;
      });
  }

}
