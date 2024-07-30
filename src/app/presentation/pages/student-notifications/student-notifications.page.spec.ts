import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StudentNotificationsPage } from './student-notifications.page';

describe('StudentNotificationsPage', () => {
  let component: StudentNotificationsPage;
  let fixture: ComponentFixture<StudentNotificationsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentNotificationsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
