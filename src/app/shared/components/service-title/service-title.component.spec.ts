import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceTitleComponent } from './service-title.component';

describe('ServiceTitleComponent', () => {
  let component: ServiceTitleComponent;
  let fixture: ComponentFixture<ServiceTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
