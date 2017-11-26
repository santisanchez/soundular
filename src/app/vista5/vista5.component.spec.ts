import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Vista5Component } from './vista5.component';

describe('Vista5Component', () => {
  let component: Vista5Component;
  let fixture: ComponentFixture<Vista5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Vista5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Vista5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
