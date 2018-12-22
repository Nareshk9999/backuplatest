import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityModelsComponent } from './security-models.component';

describe('SecurityModelsComponent', () => {
  let component: SecurityModelsComponent;
  let fixture: ComponentFixture<SecurityModelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecurityModelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecurityModelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
