import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { DynamicFormComponent } from './dynamic-form.component';

describe('DynamicFormComponent', () => {
  let component: DynamicFormComponent;
  let fixture: ComponentFixture<DynamicFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicFormComponent ],
      imports: [IonicModule.forRoot(),ReactiveFormsModule,FormsModule,HttpClientTestingModule],
      providers:[HttpClient,HttpClientModule]
    }).compileComponents();

    fixture = TestBed.createComponent(DynamicFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('formgroup element count',() => {
    const formelement = fixture.debugElement.nativeElement.querySelector("#myForm")
    const inputelements = formelement.querySelectorAll('ion-label')
    expect(inputelements.length).toEqual(0)
  })


  it('login values',() => {
    const myformgroup = {
      age: "",
      agreeTerms: "",
      comments: "",
      firstName: "",
      lastName: "",
      middleName: ""
    }
    //component.myForm
    const myformvalue = {
      age: "",
      agreeTerms: "",
      comments: "",
      firstName: "",
      lastName: "",
      middleName: ""
    }
    expect(myformgroup).toEqual(myformvalue)
  })
});
