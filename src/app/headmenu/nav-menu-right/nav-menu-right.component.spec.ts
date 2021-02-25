import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavMenuRightComponent } from './nav-menu-right.component';

describe('NavMenuRightComponent', () => {
  let component: NavMenuRightComponent;
  let fixture: ComponentFixture<NavMenuRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavMenuRightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavMenuRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
