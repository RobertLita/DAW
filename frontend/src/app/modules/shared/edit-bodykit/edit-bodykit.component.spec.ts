import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBodykitComponent } from './edit-bodykit.component';

describe('EditBodykitComponent', () => {
  let component: EditBodykitComponent;
  let fixture: ComponentFixture<EditBodykitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditBodykitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBodykitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
