import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StudentReportPage } from './student-report.page';

describe('StudentReportPage', () => {
  let component: StudentReportPage;
  let fixture: ComponentFixture<StudentReportPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentReportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
