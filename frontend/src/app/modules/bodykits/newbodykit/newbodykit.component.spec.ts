import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewbodykitComponent } from './newbodykit.component';

describe('NewbodykitComponent', () => {
  let component: NewbodykitComponent;
  let fixture: ComponentFixture<NewbodykitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewbodykitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewbodykitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
