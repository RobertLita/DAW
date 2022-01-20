import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodykitsComponent } from './bodykits.component';

describe('BodykitsComponent', () => {
  let component: BodykitsComponent;
  let fixture: ComponentFixture<BodykitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodykitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BodykitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
