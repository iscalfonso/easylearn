import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StudentHomeworksPage } from './student-homeworks.page';

describe('StudentHomeworksPage', () => {
  let component: StudentHomeworksPage;
  let fixture: ComponentFixture<StudentHomeworksPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentHomeworksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
