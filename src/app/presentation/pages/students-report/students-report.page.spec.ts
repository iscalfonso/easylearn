import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StudentsReportPage } from './students-report.page';

describe('StudentsReportPage', () => {
  let component: StudentsReportPage;
  let fixture: ComponentFixture<StudentsReportPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsReportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
