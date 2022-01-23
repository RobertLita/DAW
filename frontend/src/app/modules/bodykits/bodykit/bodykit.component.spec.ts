import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodykitComponent } from './bodykit.component';

describe('BodykitComponent', () => {
  let component: BodykitComponent;
  let fixture: ComponentFixture<BodykitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodykitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BodykitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
