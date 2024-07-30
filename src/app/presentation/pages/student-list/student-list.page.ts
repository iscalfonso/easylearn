import { Component, OnInit } from '@angular/core';
import { StudentsAttendance, StudentList, StudentAttendance } from '../../../infrastructure/http/student-list';
interface Group {
  name: string;
  code: string;
}
@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.page.html',
  styleUrls: ['./student-list.page.scss'],
})
export class StudentListPage implements OnInit {

  groups: Group[] | undefined;
  selectedGroup: Group | undefined;
  selectedDate: string | undefined;
  students: Array<StudentAttendance> | undefined;

  constructor() {
    console.log(StudentsAttendance)
  }

  ngOnInit() {
    this.groups = [
      { name: 'Primero A', code: '1a' },
      { name: 'Segundo B', code: '2b' },
      { name: 'Tercero A', code: '3a' },
      { name: 'Sexto B', code: '6b' },
      { name: 'Quinto C', code: '5c' }
    ];
    this.students = StudentList;
  }

}
