import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewshoeComponent } from './viewshoe.component';

describe('ViewshoeComponent', () => {
  let component: ViewshoeComponent;
  let fixture: ComponentFixture<ViewshoeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewshoeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewshoeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
