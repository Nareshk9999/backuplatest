import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPrivilageComponent } from './add-privilage.component';

describe('AddPrivilageComponent', () => {
  let component: AddPrivilageComponent;
  let fixture: ComponentFixture<AddPrivilageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPrivilageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPrivilageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
