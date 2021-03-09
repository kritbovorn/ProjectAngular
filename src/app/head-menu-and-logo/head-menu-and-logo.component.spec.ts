import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadMenuAndLogoComponent } from './head-menu-and-logo.component';

describe('HeadMenuAndLogoComponent', () => {
  let component: HeadMenuAndLogoComponent;
  let fixture: ComponentFixture<HeadMenuAndLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadMenuAndLogoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadMenuAndLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
