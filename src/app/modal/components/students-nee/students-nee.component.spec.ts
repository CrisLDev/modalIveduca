import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsNEEComponent } from './students-nee.component';

describe('StudentsNEEComponent', () => {
  let component: StudentsNEEComponent;
  let fixture: ComponentFixture<StudentsNEEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentsNEEComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentsNEEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
