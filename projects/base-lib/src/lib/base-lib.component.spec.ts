import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseLibComponent } from './base-lib.component';

describe('BaseLibComponent', () => {
  let component: BaseLibComponent;
  let fixture: ComponentFixture<BaseLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
