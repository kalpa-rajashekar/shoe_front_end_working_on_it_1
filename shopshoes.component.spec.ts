import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopshoesComponent } from './shopshoes.component';

describe('ShopshoesComponent', () => {
  let component: ShopshoesComponent;
  let fixture: ComponentFixture<ShopshoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopshoesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopshoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
